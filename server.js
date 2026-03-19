/* =====================================================
   VANQUISHERS - Express Server
   MongoDB Integrated - Authentication & Data API
   ===================================================== */

require('dotenv').config();
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const rateLimit = require('express-rate-limit');
const path = require('path');
const cors = require('cors');
const { User, Player, Alumni, Match, Point, Memory, Auction } = require('./models');
const { upload } = require('./cloudinary');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// ====== UPLOAD ROUTE ======
// Returns the Cloudinary URL for the uploaded file
app.post('/api/upload', authenticateToken, upload.single('photo'), (req, res) => {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
    res.json({ url: req.file.path }); // req.file.path is the Cloudinary URL
});

const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'vanquishers_default_secret_change_me';
const MONGODB_URI = process.env.MONGODB_URI;

// ====== MongoDB Connection ======
if (!MONGODB_URI || MONGODB_URI.includes('your_mongodb_atlas_connection_string')) {
    console.warn('⚠️ MONGODB_URI is not set. Database features will not work.');
} else {
    mongoose.connect(MONGODB_URI)
        .then(() => console.log('✅ Connected to MongoDB Atlas'))
        .catch(err => console.error('❌ MongoDB connection error:', err));
}

// ====== Middleware ======
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100, // Increased for general usage
    message: { error: 'Too many requests. Please try again later.' }
});

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

app.post('/api/login', authLimiter, async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    try {
        const user = await User.findOne({ username: username.toLowerCase().trim() });
        if (!user) return res.status(401).json({ error: 'Invalid username or password' });

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(401).json({ error: 'Invalid username or password' });

        const token = jwt.sign(
            { username: user.username, role: user.role, displayName: user.displayName, batchYear: user.batchYear },
            JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.json({
            token,
            user: { username: user.username, role: user.role, displayName: user.displayName, batchYear: user.batchYear }
        });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

app.post('/api/change-password', authenticateToken, requireAdmin, async (req, res) => {
    const { targetUsername, newPassword } = req.body;
    if (!targetUsername || !newPassword || newPassword.length < 6) {
        return res.status(400).json({ error: 'Invalid input' });
    }

    try {
        const hash = await bcrypt.hash(newPassword, 10);
        const result = await User.findOneAndUpdate({ username: targetUsername }, { password: hash });
        if (!result) return res.status(404).json({ error: 'User not found' });
        res.json({ message: `Password changed for ${targetUsername}` });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

app.get('/api/users', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const users = await User.find({}, '-password');
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

app.get('/api/me', authenticateToken, (req, res) => {
    res.json(req.user);
});

// ====== DATA ROUTES ======

// Generic GET all
const createGetRoute = (path, Model) => {
    app.get(path, async (req, res) => {
        try {
            const data = await Model.find().sort({ id: 1 });
            res.json(data);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });
};

createGetRoute('/api/players', Player);
createGetRoute('/api/alumni', Alumni);
createGetRoute('/api/matches', Match);
createGetRoute('/api/points', Point);

// Generic POST/PUT/DELETE for Admin
const createAdminRoutes = (basePath, Model) => {
    app.post(basePath, authenticateToken, requireAdmin, async (req, res) => {
        try {
            const newItem = new Model(req.body);
            await newItem.save();
            res.json(newItem);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    app.put(`${basePath}/:id`, authenticateToken, requireAdmin, async (req, res) => {
        try {
            const updated = await Model.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
            res.json(updated);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    app.delete(`${basePath}/:id`, authenticateToken, requireAdmin, async (req, res) => {
        try {
            await Model.findOneAndDelete({ id: req.params.id });
            res.json({ message: 'Deleted' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });
};

createAdminRoutes('/api/players', Player);
createAdminRoutes('/api/alumni', Alumni);
createAdminRoutes('/api/matches', Match);
createAdminRoutes('/api/points', Point);

// Memories
app.get('/api/memories/all', async (req, res) => {
    try {
        const memories = await Memory.find().sort({ addedAt: -1 });
        res.json(memories);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/memories/:alumniId', async (req, res) => {
    try {
        const memories = await Memory.find({ alumniId: req.params.alumniId }).sort({ addedAt: -1 });
        res.json(memories);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/memories', authenticateToken, async (req, res) => {
    try {
        const memory = new Memory({
            ...req.body,
            author: req.body.author || req.user.displayName || req.user.username
        });
        await memory.save();
        res.json(memory);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/api/memories/:id', authenticateToken, async (req, res) => {
    try {
        const memory = await Memory.findById(req.params.id);
        if (!memory) return res.status(404).json({ error: 'Memory not found' });
        // Allow: admin OR the original author
        const isAdmin = req.user.role === 'admin';
        const isAuthor = memory.author === (req.user.displayName || req.user.username);
        if (!isAdmin && !isAuthor) {
            return res.status(403).json({ error: 'Permission denied. You can only edit your own memories.' });
        }
        const updated = await Memory.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/api/memories/:id', authenticateToken, async (req, res) => {
    try {
        const memory = await Memory.findById(req.params.id);
        if (!memory) return res.status(404).json({ error: 'Memory not found' });
        // Allow: admin OR the original author
        const isAdmin = req.user.role === 'admin';
        const isAuthor = memory.author === (req.user.displayName || req.user.username);
        if (!isAdmin && !isAuthor) {
            return res.status(403).json({ error: 'Permission denied. You can only delete your own memories.' });
        }
        await Memory.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Auction
app.get('/api/auction', async (req, res) => {
    try {
        const auction = await Auction.findOne({ key: 'current_auction' });
        res.json(auction ? auction.data : null);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/auction', authenticateToken, requireAdmin, async (req, res) => {
    try {
        await Auction.findOneAndUpdate(
            { key: 'current_auction' },
            { data: req.body },
            { upsert: true }
        );
        res.json({ message: 'Auction saved' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ====== Serve frontend ======
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
