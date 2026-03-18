const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    email: { type: String, default: '' },
    role: { type: String, enum: ['admin', 'player', 'viewer'], default: 'player' },
    batchYear: { type: Number, default: null },
    displayName: { type: String, required: true }
}, { timestamps: true });

// Player Schema
const playerSchema = new mongoose.Schema({
    id: { type: Number, unique: true }, // Keeping original ID for compatibility
    name: { type: String, required: true },
    position: { type: String, default: 'All-Rounder' },
    batchYear: { type: Number },
    phone: { type: String, default: '' },
    matches: { type: Number, default: 0 },
    wins: { type: Number, default: 0 },
    photo: { type: String, default: '' }
}, { timestamps: true });

// Alumni Schema
const alumniSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    name: { type: String, required: true },
    batchYear: { type: Number },
    position: { type: String, default: '' },
    achievements: { type: String, default: '' },
    photo: { type: String, default: '' }
}, { timestamps: true });

// Match Schema
const setSchema = new mongoose.Schema({
    scoreA: { type: Number, default: 0 },
    scoreB: { type: Number, default: 0 },
    teamAStrike: [Number],
    teamBStrike: [Number],
    timeouts: {
        teamA: { type: Boolean, default: false },
        teamB: { type: Boolean, default: false }
    }
});

const matchSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    teamA: { type: String, required: true },
    teamB: { type: String, required: true },
    scoreA: { type: Number, default: 0 },
    scoreB: { type: Number, default: 0 },
    date: { type: String },
    venue: { type: String },
    status: { type: String, enum: ['upcoming', 'ongoing', 'completed'], default: 'upcoming' },
    set: { type: String, default: '' },
    type: { type: String, default: 'VPL' },
    currentSet: { type: Number, default: 1 },
    sets: [setSchema]
}, { timestamps: true });

// Points Table Schema
const pointSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    team: { type: String, required: true },
    played: { type: Number, default: 0 },
    won: { type: Number, default: 0 },
    lost: { type: Number, default: 0 },
    draw: { type: Number, default: 0 },
    points: { type: Number, default: 0 },
    nrr: { type: String, default: '0.00' },
    color: { type: String, default: '#00e5ff' },
    type: { type: String, default: 'VPL' }
}, { timestamps: true });

// Memory Schema
const memorySchema = new mongoose.Schema({
    alumniId: { type: String, required: true }, // Can be alumni numeric ID or 'general'
    content: { type: String, required: true },
    author: { type: String, required: true },
    name: { type: String },
    fileType: { type: String },
    photo: { type: String, default: '' },
    addedAt: { type: Date, default: Date.now }
}, { timestamps: true });

// Auction Schema
const auctionSchema = new mongoose.Schema({
    key: { type: String, default: 'current_auction' }, // Single record for now
    data: { type: mongoose.Schema.Types.Mixed }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
const Player = mongoose.model('Player', playerSchema);
const Alumni = mongoose.model('Alumni', alumniSchema);
const Match = mongoose.model('Match', matchSchema);
const Point = mongoose.model('Point', pointSchema);
const Memory = mongoose.model('Memory', memorySchema);
const Auction = mongoose.model('Auction', auctionSchema);

module.exports = { User, Player, Alumni, Match, Point, Memory, Auction };
