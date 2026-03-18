require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const { User, Player, Alumni, Match, Point } = require('./models');

// Extract defaults from js/data.js (hardcoded here for simplicity in migration)
const defaults = {
    players: [
      { id: 15, name: "Sampath", position: "All-Rounder", batchYear: 2026, phone: "", matches: 0, wins: 0 },
      { id: 16, name: "Vignesh", position: "All-Rounder", batchYear: 2026, phone: "", matches: 0, wins: 0 },
      { id: 17, name: "Bharani", position: "All-Rounder", batchYear: 2026, phone: "", matches: 0, wins: 0 },
      { id: 18, name: "Jenson", position: "All-Rounder", batchYear: 2026, phone: "", matches: 0, wins: 0 },
      { id: 1, name: "Rajesh", position: "All-Rounder", batchYear: 2027, phone: "", matches: 0, wins: 0 },
      { id: 2, name: "Muthu", position: "All-Rounder", batchYear: 2027, phone: "", matches: 0, wins: 0 },
      { id: 3, name: "Naveen", position: "All-Rounder", batchYear: 2027, phone: "", matches: 0, wins: 0 },
      { id: 4, name: "Chandru", position: "All-Rounder", batchYear: 2027, phone: "", matches: 0, wins: 0 },
      { id: 5, name: "Kasi Annamalai", position: "All-Rounder", batchYear: 2028, phone: "", matches: 0, wins: 0 },
      { id: 6, name: "Kannan", position: "All-Rounder", batchYear: 2028, phone: "", matches: 0, wins: 0 },
      { id: 7, name: "Santhosh", position: "All-Rounder", batchYear: 2028, phone: "", matches: 0, wins: 0 },
      { id: 8, name: "Ganapathy", position: "All-Rounder", batchYear: 2028, phone: "", matches: 0, wins: 0 },
      { id: 9, name: "Sriram", position: "All-Rounder", batchYear: 2028, phone: "", matches: 0, wins: 0 },
      { id: 10, name: "Navaneesh", position: "All-Rounder", batchYear: 2028, phone: "", matches: 0, wins: 0 },
      { id: 11, name: "Somesh", position: "All-Rounder", batchYear: 2029, phone: "", matches: 0, wins: 0 },
      { id: 12, name: "Ramakrishnan", position: "All-Rounder", batchYear: 2029, phone: "", matches: 0, wins: 0 },
      { id: 13, name: "Dhavamani", position: "All-Rounder", batchYear: 2029, phone: "", matches: 0, wins: 0 },
      { id: 14, name: "Sakthi", position: "All-Rounder", batchYear: 2029, phone: "", matches: 0, wins: 0 },
      { id: 19, name: "Bala Narain", position: "All-Rounder", batchYear: 2029, phone: "", matches: 0, wins: 0 }
    ],
    alumni: [
      { id: 1, name: "Karthik", batchYear: 2010, position: "", achievements: "", photo: "" },
      { id: 2, name: "Kamaraj", batchYear: 2010, position: "", achievements: "", photo: "" },
      { id: 3, name: "Muthu", batchYear: 2011, position: "", achievements: "", photo: "" },
      { id: 4, name: "Yashwanth", batchYear: 2011, position: "", achievements: "", photo: "" },
      { id: 5, name: "Arun", batchYear: 2011, position: "", achievements: "", photo: "" },
      { id: 6, name: "Ram", batchYear: 2012, position: "", achievements: "", photo: "" },
      { id: 7, name: "Vijayendran", batchYear: 2012, position: "", achievements: "", photo: "" },
      { id: 8, name: "Hariharasudhan", batchYear: 2012, position: "", achievements: "", photo: "" },
      { id: 9, name: "Siva", batchYear: 2013, position: "", achievements: "", photo: "" },
      { id: 10, name: "Prem", batchYear: 2013, position: "", achievements: "", photo: "" },
      { id: 11, name: "Aravinth", batchYear: 2013, position: "", achievements: "", photo: "" },
      { id: 12, name: "Rajavel", batchYear: 2013, position: "", achievements: "", photo: "" },
      { id: 13, name: "Alex", batchYear: 2013, position: "", achievements: "", photo: "" },
      { id: 14, name: "Muthu Alagappan", batchYear: 2013, position: "", achievements: "", photo: "" },
      { id: 15, name: "Vignesh", batchYear: 2014, position: "", achievements: "", photo: "" },
      { id: 16, name: "Vijayan", batchYear: 2014, position: "", achievements: "", photo: "" },
      { id: 17, name: "Aravinth Prasadth", batchYear: 2014, position: "", achievements: "", photo: "" },
      { id: 18, name: "Durga Prasadh", batchYear: 2014, position: "", achievements: "", photo: "" },
      { id: 19, name: "Aravinthan", batchYear: 2014, position: "", achievements: "", photo: "" },
      { id: 20, name: "Vinoth", batchYear: 2014, position: "", achievements: "", photo: "" },
      { id: 21, name: "Sreeni", batchYear: 2015, position: "", achievements: "", photo: "" },
      { id: 22, name: "Ameesh", batchYear: 2015, position: "", achievements: "", photo: "" },
      { id: 23, name: "Karthi", batchYear: 2015, position: "", achievements: "", photo: "" },
      { id: 24, name: "Senthil", batchYear: 2015, position: "", achievements: "", photo: "" },
      { id: 25, name: "Sreeni (TVS)", batchYear: 2015, position: "", achievements: "", photo: "" },
      { id: 26, name: "Prem Kumar", batchYear: 2015, position: "", achievements: "", photo: "" },
      { id: 27, name: "Blessto", batchYear: 2015, position: "", achievements: "", photo: "" },
      { id: 28, name: "Dhinesh", batchYear: 2016, position: "", achievements: "", photo: "" },
      { id: 29, name: "Sugumar", batchYear: 2016, position: "", achievements: "", photo: "" },
      { id: 30, name: "Mugilan", batchYear: 2016, position: "", achievements: "", photo: "" },
      { id: 31, name: "Logesh", batchYear: 2017, position: "", achievements: "", photo: "" },
      { id: 32, name: "Puvi", batchYear: 2017, position: "", achievements: "", photo: "" },
      { id: 33, name: "Naveen", batchYear: 2017, position: "", achievements: "", photo: "" },
      { id: 34, name: "Godwin", batchYear: 2017, position: "", achievements: "", photo: "" },
      { id: 35, name: "Seetha", batchYear: 2017, position: "", achievements: "", photo: "" },
      { id: 36, name: "Kumaresan", batchYear: 2017, position: "", achievements: "", photo: "" },
      { id: 37, name: "Praveen", batchYear: 2017, position: "", achievements: "", photo: "" },
      { id: 38, name: "Vicky", batchYear: 2018, position: "", achievements: "", photo: "" },
      { id: 39, name: "Antony", batchYear: 2018, position: "", achievements: "", photo: "" },
      { id: 40, name: "Tamil", batchYear: 2018, position: "", achievements: "", photo: "" },
      { id: 41, name: "Hari", batchYear: 2018, position: "", achievements: "", photo: "" },
      { id: 42, name: "Rahman", batchYear: 2018, position: "", achievements: "", photo: "" },
      { id: 43, name: "Avinash", batchYear: 2019, position: "", achievements: "", photo: "" },
      { id: 44, name: "Aanath", batchYear: 2019, position: "", achievements: "", photo: "" },
      { id: 45, name: "Vijay", batchYear: 2019, position: "", achievements: "", photo: "" },
      { id: 46, name: "Bala Haraish", batchYear: 2019, position: "", achievements: "", photo: "" },
      { id: 47, name: "Praveen", batchYear: 2019, position: "", achievements: "", photo: "" },
      { id: 48, name: "Mani", batchYear: 2019, position: "", achievements: "", photo: "" },
      { id: 49, name: "Siva", batchYear: 2020, position: "", achievements: "", photo: "" },
      { id: 50, name: "Bharathan", batchYear: 2020, position: "", achievements: "", photo: "" },
      { id: 51, name: "Ashok", batchYear: 2020, position: "", achievements: "", photo: "" },
      { id: 52, name: "Jagadheesh", batchYear: 2020, position: "", achievements: "", photo: "" },
      { id: 53, name: "Hari", batchYear: 2020, position: "", achievements: "", photo: "" },
      { id: 54, name: "Saravana", batchYear: 2020, position: "", achievements: "", photo: "" },
      { id: 55, name: "Mayil Raj", batchYear: 2021, position: "", achievements: "", photo: "" },
      { id: 56, name: "Ram Prasanth", batchYear: 2021, position: "", achievements: "", photo: "" },
      { id: 57, name: "Pradeep Kumar", batchYear: 2021, position: "", achievements: "", photo: "" },
      { id: 58, name: "Vignesh", batchYear: 2021, position: "", achievements: "", photo: "" },
      { id: 59, name: "Karthikeyan", batchYear: 2021, position: "", achievements: "", photo: "" },
      { id: 60, name: "Udhaya Kumar", batchYear: 2021, position: "", achievements: "", photo: "" },
      { id: 61, name: "Waran Kumar", batchYear: 2021, position: "", achievements: "", photo: "" },
      { id: 62, name: "Keerthinathan", batchYear: 2021, position: "", achievements: "", photo: "" },
      { id: 63, name: "Arun", batchYear: 2022, position: "", achievements: "", photo: "" },
      { id: 64, name: "Ramkumar", batchYear: 2022, position: "", achievements: "", photo: "" },
      { id: 65, name: "Anbumani", batchYear: 2022, position: "", achievements: "", photo: "" },
      { id: 66, name: "Dharbanesh", batchYear: 2022, position: "", achievements: "", photo: "" },
      { id: 67, name: "Kathir", batchYear: 2022, position: "", achievements: "", photo: "" },
      { id: 68, name: "Prashanth", batchYear: 2023, position: "", achievements: "", photo: "" },
      { id: 69, name: "Hari Hara Priyan", batchYear: 2023, position: "", achievements: "", photo: "" },
      { id: 70, name: "Surya", batchYear: 2023, position: "", achievements: "", photo: "" },
      { id: 71, name: "Ashin", batchYear: 2023, position: "", achievements: "", photo: "" },
      { id: 72, name: "Vignesh", batchYear: 2023, position: "", achievements: "", photo: "" },
      { id: 73, name: "Mohan", batchYear: 2023, position: "", achievements: "", photo: "" },
      { id: 74, name: "Kishore", batchYear: 2023, position: "", achievements: "", photo: "" },
      { id: 75, name: "Murali Manohar", batchYear: 2023, position: "", achievements: "", photo: "" },
      { id: 76, name: "Logesh", batchYear: 2023, position: "", achievements: "", photo: "" },
      { id: 77, name: "Dinesh Kumar", batchYear: 2024, position: "", achievements: "", photo: "" },
      { id: 78, name: "Hemachandran", batchYear: 2024, position: "", achievements: "", photo: "" },
      { id: 79, name: "Ram Sabarish", batchYear: 2024, position: "", achievements: "", photo: "" },
      { id: 80, name: "Mvs Raja", batchYear: 2024, position: "", achievements: "", photo: "" },
      { id: 81, name: "Varun", batchYear: 2025, position: "", achievements: "", photo: "" },
      { id: 82, name: "Hemachandran G M", batchYear: 2025, position: "", achievements: "", photo: "" },
      { id: 83, name: "Thanus", batchYear: 2025, position: "", achievements: "", photo: "" },
      { id: 84, name: "Aswin", batchYear: 2025, position: "", achievements: "", photo: "" },
      { id: 85, name: "Sanjay", batchYear: 2025, position: "", achievements: "", photo: "" },
      { id: 86, name: "Sampath", batchYear: 2026, position: "", achievements: "", photo: "" },
      { id: 87, name: "Vignesh", batchYear: 2026, position: "", achievements: "", photo: "" },
      { id: 88, name: "Bharani", batchYear: 2026, position: "", achievements: "", photo: "" },
      { id: 89, name: "Jenson", batchYear: 2026, position: "", achievements: "", photo: "" },
      { id: 90, name: "Rajesh", batchYear: 2027, position: "", achievements: "", photo: "" },
      { id: 91, name: "Muthu", batchYear: 2027, position: "", achievements: "", photo: "" },
      { id: 92, name: "Naveen", batchYear: 2027, position: "", achievements: "", photo: "" },
      { id: 93, name: "Chandru", batchYear: 2027, position: "", achievements: "", photo: "" },
      { id: 94, name: "Kasi Annamalai", batchYear: 2028, position: "", achievements: "", photo: "" },
      { id: 95, name: "Kannan", batchYear: 2028, position: "", achievements: "", photo: "" },
      { id: 96, name: "Santhosh", batchYear: 2028, position: "", achievements: "", photo: "" },
      { id: 97, name: "Ganapathy", batchYear: 2028, position: "", achievements: "", photo: "" },
      { id: 98, name: "Sriram", batchYear: 2028, position: "", achievements: "", photo: "" },
      { id: 99, name: "Navaneesh", batchYear: 2028, position: "", achievements: "", photo: "" },
      { id: 100, name: "Somesh", batchYear: 2029, position: "", achievements: "", photo: "" },
      { id: 101, name: "Ramakrishnan", batchYear: 2029, position: "", achievements: "", photo: "" },
      { id: 102, name: "Dhavamani", batchYear: 2029, position: "", achievements: "", photo: "" },
      { id: 103, name: "Sakthi", batchYear: 2029, position: "", achievements: "", photo: "" },
      { id: 104, name: "Bala Narain", batchYear: 2029, position: "", achievements: "", photo: "" }
    ],
    matches: [
      { id: 1, teamA: "Vanquishers", teamB: "Thunder Kings", scoreA: 21, scoreB: 15, date: "2026-02-18", venue: "City Sports Complex", status: "ongoing", set: "Set 2", type: "VPL", currentSet: 2, sets: [{ scoreA: 40, scoreB: 35, teamAStrike: Array.from({ length: 40 }, (_, i) => i + 1), teamBStrike: Array.from({ length: 35 }, (_, i) => i + 1), timeouts: { teamA: true, teamB: true } }, { scoreA: 21, scoreB: 15, teamAStrike: Array.from({ length: 21 }, (_, i) => i + 1), teamBStrike: Array.from({ length: 15 }, (_, i) => i + 1), timeouts: { teamA: false, teamB: false } }, { scoreA: 0, scoreB: 0, teamAStrike: [], teamBStrike: [], timeouts: { teamA: false, teamB: false } }] },
      { id: 2, teamA: "Vanquishers", teamB: "Storm Raiders", scoreA: 0, scoreB: 0, date: "2026-02-20", venue: "District Stadium", status: "upcoming", set: "", type: "VPL" },
      { id: 3, teamA: "Vanquishers", teamB: "Fire Eagles", scoreA: 0, scoreB: 0, date: "2026-02-25", venue: "State Arena", status: "upcoming", set: "", type: "Alumni Meet" },
      { id: 4, teamA: "Vanquishers", teamB: "Royal Warriors", scoreA: 2, scoreB: 1, date: "2026-02-10", venue: "City Sports Complex", status: "completed", set: "Final", type: "Zone" },
      { id: 5, teamA: "Vanquishers", teamB: "Shadow Strikers", scoreA: 2, scoreB: 0, date: "2026-02-05", venue: "School Ground", status: "completed", set: "Final", type: "Interzone" },
      { id: 6, teamA: "Vanquishers", teamB: "Lightning Bolts", scoreA: 1, scoreB: 2, date: "2026-01-28", venue: "District Stadium", status: "completed", set: "Final", type: "CM Trophy" },
      { id: 7, teamA: "Vanquishers", teamB: "Titan Smashers", scoreA: 2, scoreB: 0, date: "2026-01-20", venue: "City Sports Complex", status: "completed", set: "Final", type: "VPL" }
    ],
    pointsTable: [
      { id: 1, team: "Vanquishers", played: 6, won: 4, lost: 2, draw: 0, points: 12, nrr: "+1.25", color: "#00e5ff", type: "VPL" },
      { id: 2, team: "Thunder Kings", played: 6, won: 4, lost: 2, draw: 0, points: 12, nrr: "+0.85", color: "#e040fb", type: "VPL" },
      { id: 3, team: "Storm Raiders", played: 6, won: 3, lost: 3, draw: 0, points: 9, nrr: "+0.45", color: "#ffd740", type: "VPL" },
      { id: 4, team: "Royal Warriors", played: 6, won: 3, lost: 3, draw: 0, points: 9, nrr: "+0.12", color: "#69f0ae", type: "VPL" },
      { id: 5, team: "Fire Eagles", played: 6, won: 3, lost: 3, draw: 0, points: 9, nrr: "-0.20", color: "#ff9100", type: "VPL" },
      { id: 6, team: "Shadow Strikers", played: 6, won: 2, lost: 4, draw: 0, points: 6, nrr: "-0.55", color: "#ff5252", type: "VPL" },
      { id: 7, team: "Lightning Bolts", played: 6, won: 2, lost: 4, draw: 0, points: 6, nrr: "-0.92", color: "#ba68c8", type: "VPL" },
      { id: 8, team: "Titan Smashers", played: 6, won: 1, lost: 5, draw: 0, points: 3, nrr: "-1.40", color: "#78909c", type: "VPL" }
    ]
};

async function migrate() {
    const uri = process.env.MONGODB_URI;
    if (!uri || uri.includes('your_mongodb_atlas_connection_string')) {
        console.error('❌ MONGODB_URI is not set or is still a placeholder. Please update your .env file.');
        process.exit(1);
    }

    try {
        await mongoose.connect(uri);
        console.log('✅ Connected to MongoDB Atlas');

        // 1. Migrate Users
        const usersFile = path.join(__dirname, 'data', 'users.json');
        if (fs.existsSync(usersFile)) {
            const users = JSON.parse(fs.readFileSync(usersFile, 'utf8'));
            for (const u of users) {
                await User.findOneAndUpdate({ username: u.username }, u, { upsert: true });
            }
            console.log(`✅ Migrated ${users.length} users`);
        }

        // 2. Migrate Players
        for (const p of defaults.players) {
            await Player.findOneAndUpdate({ id: p.id }, p, { upsert: true });
        }
        console.log(`✅ Migrated ${defaults.players.length} players`);

        // 3. Migrate Alumni
        for (const a of defaults.alumni) {
            await Alumni.findOneAndUpdate({ id: a.id }, a, { upsert: true });
        }
        console.log(`✅ Migrated ${defaults.alumni.length} alumni`);

        // 4. Migrate Matches
        for (const m of defaults.matches) {
            await Match.findOneAndUpdate({ id: m.id }, m, { upsert: true });
        }
        console.log(`✅ Migrated ${defaults.matches.length} matches`);

        // 5. Migrate Points
        for (const pt of defaults.pointsTable) {
            await Point.findOneAndUpdate({ id: pt.id }, pt, { upsert: true });
        }
        console.log(`✅ Migrated ${defaults.pointsTable.length} points`);

        console.log('🎉 Migration complete!');
        process.exit(0);
    } catch (err) {
        console.error('❌ Migration failed:', err);
        process.exit(1);
    }
}

migrate();
