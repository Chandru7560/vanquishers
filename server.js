/* =====================================================
   VANQUISHERS - Express Server
   Authentication, CAPTCHA, and Access Control
   ===================================================== */

require('dotenv').config();
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const rateLimit = require('express-rate-limit');
const path = require('path');
const fs = require('fs');

const app = express();
const cors = require('cors');

// Allow multiple origins for testing and production
app.use(cors());

const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'vanquishers_default_secret_change_me';

// ====== Middleware ======
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Rate limiting for auth endpoints (brute force protection)
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 30, // max 30 attempts per window
    message: { error: 'Too many attempts. Please try again after 15 minutes.' },
    standardHeaders: true,
    legacyHeaders: false
});

// ====== Data Helpers ======
const USERS_FILE = path.join(__dirname, 'data', 'users.json');

function loadUsers() {
    if (!fs.existsSync(USERS_FILE)) {
        console.error('❌ data/users.json not found. Run: npm run seed');
        return [];
    }
    return JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));
}

function saveUsers(users) {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), 'utf8');
}

// ====== CAPTCHA Store (in-memory, expires after 3 minutes) ======
const captchaStore = new Map();

function generateCaptcha() {
    const ops = ['+', '-', '×'];
    const op = ops[Math.floor(Math.random() * ops.length)];
    let a, b, answer;

    if (op === '+') {
        a = Math.floor(Math.random() * 40) + 5;
        b = Math.floor(Math.random() * 30) + 3;
        answer = a + b;
    } else if (op === '-') {
        a = Math.floor(Math.random() * 40) + 15;
        b = Math.floor(Math.random() * (a - 1)) + 1;
        answer = a - b;
    } else {
        a = Math.floor(Math.random() * 9) + 2;
        b = Math.floor(Math.random() * 9) + 2;
        answer = a * b;
    }

    const sessionId = crypto.randomBytes(16).toString('hex');
    captchaStore.set(sessionId, {
        answer: answer,
        expiresAt: Date.now() + 3 * 60 * 1000 // 3 minutes
    });

    // Cleanup expired captchas periodically
    if (captchaStore.size > 500) {
        const now = Date.now();
        for (const [key, val] of captchaStore) {
            if (now > val.expiresAt) captchaStore.delete(key);
        }
    }

    return { sessionId, question: `${a} ${op} ${b} = ?`, answer };
}

function verifyCaptcha(sessionId, userAnswer) {
    const entry = captchaStore.get(sessionId);
    if (!entry) return { valid: false, error: 'CAPTCHA expired. Please refresh and try again.' };
    if (Date.now() > entry.expiresAt) {
        captchaStore.delete(sessionId);
        return { valid: false, error: 'CAPTCHA expired. Please refresh and try again.' };
    }
    captchaStore.delete(sessionId); // One-time use
    if (parseInt(userAnswer) !== entry.answer) {
        return { valid: false, error: 'Wrong CAPTCHA answer. Please try again.' };
    }
    return { valid: true };
}

// ====== JWT Middleware ======
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Authentication required' });

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ error: 'Invalid or expired token' });
        req.user = user;
        next();
    });
}

function requireAdmin(req, res, next) {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ error: 'Admin access required' });
    }
    next();
}

// ====== AUTH ROUTES ======

// GET /api/captcha — Generate a new CAPTCHA question
app.get('/api/captcha', (req, res) => {
    const { sessionId, question } = generateCaptcha();
    res.json({ sessionId, question });
});

// POST /api/login — Verify CAPTCHA + credentials, issue JWT
app.post('/api/login', authLimiter, async (req, res) => {
    const { username, password, captchaId, captchaAnswer } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    // Validate CAPTCHA first
    if (!captchaId || captchaAnswer === undefined || captchaAnswer === '') {
        return res.status(400).json({ error: 'Please solve the CAPTCHA' });
    }
    const captchaResult = verifyCaptcha(captchaId, captchaAnswer);
    if (!captchaResult.valid) {
        return res.status(400).json({ error: captchaResult.error });
    }

    const users = loadUsers();
    const user = users.find(u => u.username === username.toLowerCase().trim());
    if (!user) {
        return res.status(401).json({ error: 'Invalid username or password' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Issue JWT token directly
    const token = jwt.sign(
        { username: user.username, role: user.role, displayName: user.displayName, batchYear: user.batchYear },
        JWT_SECRET,
        { expiresIn: '24h' }
    );

    res.json({
        token,
        user: { username: user.username, role: user.role, displayName: user.displayName, batchYear: user.batchYear }
    });
});

// POST /api/change-password — Admin only: change any user's password
app.post('/api/change-password', authenticateToken, requireAdmin, async (req, res) => {
    const { targetUsername, newPassword } = req.body;
    if (!targetUsername || !newPassword) {
        return res.status(400).json({ error: 'Target username and new password are required' });
    }
    if (newPassword.length < 6) {
        return res.status(400).json({ error: 'Password must be at least 6 characters' });
    }

    const users = loadUsers();
    const userIndex = users.findIndex(u => u.username === targetUsername);
    if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found' });
    }

    const hash = await bcrypt.hash(newPassword, 10);
    users[userIndex].password = hash;
    saveUsers(users);

    res.json({ message: `Password changed for ${targetUsername}` });
});

// GET /api/users — Admin only: list all users (no passwords)
app.get('/api/users', authenticateToken, requireAdmin, (req, res) => {
    const users = loadUsers().map(u => ({
        username: u.username,
        email: u.email,
        role: u.role,
        batchYear: u.batchYear,
        displayName: u.displayName
    }));
    res.json(users);
});

// GET /api/me — Get current user info from token
app.get('/api/me', authenticateToken, (req, res) => {
    res.json(req.user);
});

// ====== Serve frontend ======
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// ====== Start Server ======
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    if (!fs.existsSync(USERS_FILE)) {
        console.log('Default players and alumni seeded! Run: npm run seed');
    } else {
        const users = loadUsers();
        console.log(`Loaded ${users.length} users`);
    }
});
