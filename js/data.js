/* =====================================================
   VANQUISHERS - Data Layer
   localStorage-backed CRUD data management
   ===================================================== */

const VanquishersData = {
  // Update this URL to your Render backend URL when deployed
  API_BASE: window.location.hostname === 'localhost' ? '' : 'https://your-backend-url.onrender.com',

  // ====== Default Data ======
  defaults: {
    players: [
      // Batch 2026
      { id: 15, name: "Sampath", position: "All-Rounder", batchYear: 2026, phone: "", matches: 0, wins: 0 },
      { id: 16, name: "Vignesh", position: "All-Rounder", batchYear: 2026, phone: "", matches: 0, wins: 0 },
      { id: 17, name: "Bharani", position: "All-Rounder", batchYear: 2026, phone: "", matches: 0, wins: 0 },
      { id: 18, name: "Jenson", position: "All-Rounder", batchYear: 2026, phone: "", matches: 0, wins: 0 },
      // Batch 2027
      { id: 1, name: "Rajesh", position: "All-Rounder", batchYear: 2027, phone: "", matches: 0, wins: 0 },
      { id: 2, name: "Muthu", position: "All-Rounder", batchYear: 2027, phone: "", matches: 0, wins: 0 },
      { id: 3, name: "Naveen", position: "All-Rounder", batchYear: 2027, phone: "", matches: 0, wins: 0 },
      { id: 4, name: "Chandru", position: "All-Rounder", batchYear: 2027, phone: "", matches: 0, wins: 0 },
      // Batch 2028
      { id: 5, name: "Kasi Annamalai", position: "All-Rounder", batchYear: 2028, phone: "", matches: 0, wins: 0 },
      { id: 6, name: "Kannan", position: "All-Rounder", batchYear: 2028, phone: "", matches: 0, wins: 0 },
      { id: 7, name: "Santhosh", position: "All-Rounder", batchYear: 2028, phone: "", matches: 0, wins: 0 },
      { id: 8, name: "Ganapathy", position: "All-Rounder", batchYear: 2028, phone: "", matches: 0, wins: 0 },
      { id: 9, name: "Sriram", position: "All-Rounder", batchYear: 2028, phone: "", matches: 0, wins: 0 },
      { id: 10, name: "Navaneesh", position: "All-Rounder", batchYear: 2028, phone: "", matches: 0, wins: 0 },
      // Batch 2029
      { id: 11, name: "Somesh", position: "All-Rounder", batchYear: 2029, phone: "", matches: 0, wins: 0 },
      { id: 12, name: "Ramakrishnan", position: "All-Rounder", batchYear: 2029, phone: "", matches: 0, wins: 0 },
      { id: 13, name: "Dhavamani", position: "All-Rounder", batchYear: 2029, phone: "", matches: 0, wins: 0 },
      { id: 14, name: "Sakthi", position: "All-Rounder", batchYear: 2029, phone: "", matches: 0, wins: 0 },
      { id: 19, name: "Bala Narain", position: "All-Rounder", batchYear: 2029, phone: "", matches: 0, wins: 0 }
    ],
    alumni: [
      // Batch 2010
      { id: 1, name: "Karthik", batchYear: 2010, position: "", achievements: "", photo: "" },
      { id: 2, name: "Kamaraj", batchYear: 2010, position: "", achievements: "", photo: "" },
      // Batch 2011
      { id: 3, name: "Muthu", batchYear: 2011, position: "", achievements: "", photo: "" },
      { id: 4, name: "Yashwanth", batchYear: 2011, position: "", achievements: "", photo: "" },
      { id: 5, name: "Arun", batchYear: 2011, position: "", achievements: "", photo: "" },
      // Batch 2012
      { id: 6, name: "Ram", batchYear: 2012, position: "", achievements: "", photo: "" },
      { id: 7, name: "Vijayendran", batchYear: 2012, position: "", achievements: "", photo: "" },
      { id: 8, name: "Hariharasudhan", batchYear: 2012, position: "", achievements: "", photo: "" },
      // Batch 2013
      { id: 9, name: "Siva", batchYear: 2013, position: "", achievements: "", photo: "" },
      { id: 10, name: "Prem", batchYear: 2013, position: "", achievements: "", photo: "" },
      { id: 11, name: "Aravinth", batchYear: 2013, position: "", achievements: "", photo: "" },
      { id: 12, name: "Rajavel", batchYear: 2013, position: "", achievements: "", photo: "" },
      { id: 13, name: "Alex", batchYear: 2013, position: "", achievements: "", photo: "" },
      { id: 14, name: "Muthu Alagappan", batchYear: 2013, position: "", achievements: "", photo: "" },
      // Batch 2014
      { id: 15, name: "Vignesh", batchYear: 2014, position: "", achievements: "", photo: "" },
      { id: 16, name: "Vijayan", batchYear: 2014, position: "", achievements: "", photo: "" },
      { id: 17, name: "Aravinth Prasadth", batchYear: 2014, position: "", achievements: "", photo: "" },
      { id: 18, name: "Durga Prasadh", batchYear: 2014, position: "", achievements: "", photo: "" },
      { id: 19, name: "Aravinthan", batchYear: 2014, position: "", achievements: "", photo: "" },
      { id: 20, name: "Vinoth", batchYear: 2014, position: "", achievements: "", photo: "" },
      // Batch 2015
      { id: 21, name: "Sreeni", batchYear: 2015, position: "", achievements: "", photo: "" },
      { id: 22, name: "Ameesh", batchYear: 2015, position: "", achievements: "", photo: "" },
      { id: 23, name: "Karthi", batchYear: 2015, position: "", achievements: "", photo: "" },
      { id: 24, name: "Senthil", batchYear: 2015, position: "", achievements: "", photo: "" },
      { id: 25, name: "Sreeni (TVS)", batchYear: 2015, position: "", achievements: "", photo: "" },
      { id: 26, name: "Prem Kumar", batchYear: 2015, position: "", achievements: "", photo: "" },
      { id: 27, name: "Blessto", batchYear: 2015, position: "", achievements: "", photo: "" },
      // Batch 2016
      { id: 28, name: "Dhinesh", batchYear: 2016, position: "", achievements: "", photo: "" },
      { id: 29, name: "Sugumar", batchYear: 2016, position: "", achievements: "", photo: "" },
      { id: 30, name: "Mugilan", batchYear: 2016, position: "", achievements: "", photo: "" },
      // Batch 2017
      { id: 31, name: "Logesh", batchYear: 2017, position: "", achievements: "", photo: "" },
      { id: 32, name: "Puvi", batchYear: 2017, position: "", achievements: "", photo: "" },
      { id: 33, name: "Naveen", batchYear: 2017, position: "", achievements: "", photo: "" },
      { id: 34, name: "Godwin", batchYear: 2017, position: "", achievements: "", photo: "" },
      { id: 35, name: "Seetha", batchYear: 2017, position: "", achievements: "", photo: "" },
      { id: 36, name: "Kumaresan", batchYear: 2017, position: "", achievements: "", photo: "" },
      { id: 37, name: "Praveen", batchYear: 2017, position: "", achievements: "", photo: "" },
      // Batch 2018
      { id: 38, name: "Vicky", batchYear: 2018, position: "", achievements: "", photo: "" },
      { id: 39, name: "Antony", batchYear: 2018, position: "", achievements: "", photo: "" },
      { id: 40, name: "Tamil", batchYear: 2018, position: "", achievements: "", photo: "" },
      { id: 41, name: "Hari", batchYear: 2018, position: "", achievements: "", photo: "" },
      { id: 42, name: "Rahman", batchYear: 2018, position: "", achievements: "", photo: "" },
      // Batch 2019
      { id: 43, name: "Avinash", batchYear: 2019, position: "", achievements: "", photo: "" },
      { id: 44, name: "Aanath", batchYear: 2019, position: "", achievements: "", photo: "" },
      { id: 45, name: "Vijay", batchYear: 2019, position: "", achievements: "", photo: "" },
      { id: 46, name: "Bala Haraish", batchYear: 2019, position: "", achievements: "", photo: "" },
      { id: 47, name: "Praveen", batchYear: 2019, position: "", achievements: "", photo: "" },
      { id: 48, name: "Mani", batchYear: 2019, position: "", achievements: "", photo: "" },
      // Batch 2020
      { id: 49, name: "Siva", batchYear: 2020, position: "", achievements: "", photo: "" },
      { id: 50, name: "Bharathan", batchYear: 2020, position: "", achievements: "", photo: "" },
      { id: 51, name: "Ashok", batchYear: 2020, position: "", achievements: "", photo: "" },
      { id: 52, name: "Jagadheesh", batchYear: 2020, position: "", achievements: "", photo: "" },
      { id: 53, name: "Hari", batchYear: 2020, position: "", achievements: "", photo: "" },
      { id: 54, name: "Saravana", batchYear: 2020, position: "", achievements: "", photo: "" },
      // Batch 2021
      { id: 55, name: "Mayil Raj", batchYear: 2021, position: "", achievements: "", photo: "" },
      { id: 56, name: "Ram Prasanth", batchYear: 2021, position: "", achievements: "", photo: "" },
      { id: 57, name: "Pradeep Kumar", batchYear: 2021, position: "", achievements: "", photo: "" },
      { id: 58, name: "Vignesh", batchYear: 2021, position: "", achievements: "", photo: "" },
      { id: 59, name: "Karthikeyan", batchYear: 2021, position: "", achievements: "", photo: "" },
      { id: 60, name: "Udhaya Kumar", batchYear: 2021, position: "", achievements: "", photo: "" },
      { id: 61, name: "Waran Kumar", batchYear: 2021, position: "", achievements: "", photo: "" },
      { id: 62, name: "Keerthinathan", batchYear: 2021, position: "", achievements: "", photo: "" },
      // Batch 2022
      { id: 63, name: "Arun", batchYear: 2022, position: "", achievements: "", photo: "" },
      { id: 64, name: "Ramkumar", batchYear: 2022, position: "", achievements: "", photo: "" },
      { id: 65, name: "Anbumani", batchYear: 2022, position: "", achievements: "", photo: "" },
      { id: 66, name: "Dharbanesh", batchYear: 2022, position: "", achievements: "", photo: "" },
      { id: 67, name: "Kathir", batchYear: 2022, position: "", achievements: "", photo: "" },
      // Batch 2023
      { id: 68, name: "Prashanth", batchYear: 2023, position: "", achievements: "", photo: "" },
      { id: 69, name: "Hari Hara Priyan", batchYear: 2023, position: "", achievements: "", photo: "" },
      { id: 70, name: "Surya", batchYear: 2023, position: "", achievements: "", photo: "" },
      { id: 71, name: "Ashin", batchYear: 2023, position: "", achievements: "", photo: "" },
      { id: 72, name: "Vignesh", batchYear: 2023, position: "", achievements: "", photo: "" },
      { id: 73, name: "Mohan", batchYear: 2023, position: "", achievements: "", photo: "" },
      { id: 74, name: "Kishore", batchYear: 2023, position: "", achievements: "", photo: "" },
      { id: 75, name: "Murali Manohar", batchYear: 2023, position: "", achievements: "", photo: "" },
      { id: 76, name: "Logesh", batchYear: 2023, position: "", achievements: "", photo: "" },
      // Batch 2024
      { id: 77, name: "Dinesh Kumar", batchYear: 2024, position: "", achievements: "", photo: "" },
      { id: 78, name: "Hemachandran", batchYear: 2024, position: "", achievements: "", photo: "" },
      { id: 79, name: "Ram Sabarish", batchYear: 2024, position: "", achievements: "", photo: "" },
      { id: 80, name: "Mvs Raja", batchYear: 2024, position: "", achievements: "", photo: "" },
      // Batch 2025
      { id: 81, name: "Varun", batchYear: 2025, position: "", achievements: "", photo: "" },
      { id: 82, name: "Hemachandran G M", batchYear: 2025, position: "", achievements: "", photo: "" },
      { id: 83, name: "Thanus", batchYear: 2025, position: "", achievements: "", photo: "" },
      { id: 84, name: "Aswin", batchYear: 2025, position: "", achievements: "", photo: "" },
      { id: 85, name: "Sanjay", batchYear: 2025, position: "", achievements: "", photo: "" },
      // Batch 2026
      { id: 86, name: "Sampath", batchYear: 2026, position: "", achievements: "", photo: "" },
      { id: 87, name: "Vignesh", batchYear: 2026, position: "", achievements: "", photo: "" },
      { id: 88, name: "Bharani", batchYear: 2026, position: "", achievements: "", photo: "" },
      { id: 89, name: "Jenson", batchYear: 2026, position: "", achievements: "", photo: "" },
      // Batch 2027
      { id: 90, name: "Rajesh", batchYear: 2027, position: "", achievements: "", photo: "" },
      { id: 91, name: "Muthu", batchYear: 2027, position: "", achievements: "", photo: "" },
      { id: 92, name: "Naveen", batchYear: 2027, position: "", achievements: "", photo: "" },
      { id: 93, name: "Chandru", batchYear: 2027, position: "", achievements: "", photo: "" },
      // Batch 2028
      { id: 94, name: "Kasi Annamalai", batchYear: 2028, position: "", achievements: "", photo: "" },
      { id: 95, name: "Kannan", batchYear: 2028, position: "", achievements: "", photo: "" },
      { id: 96, name: "Santhosh", batchYear: 2028, position: "", achievements: "", photo: "" },
      { id: 97, name: "Ganapathy", batchYear: 2028, position: "", achievements: "", photo: "" },
      { id: 98, name: "Sriram", batchYear: 2028, position: "", achievements: "", photo: "" },
      { id: 99, name: "Navaneesh", batchYear: 2028, position: "", achievements: "", photo: "" },
      // Batch 2029
      { id: 100, name: "Somesh", batchYear: 2029, position: "", achievements: "", photo: "" },
      { id: 101, name: "Ramakrishnan", batchYear: 2029, position: "", achievements: "", photo: "" },
      { id: 102, name: "Dhavamani", batchYear: 2029, position: "", achievements: "", photo: "" },
      { id: 103, name: "Sakthi", batchYear: 2029, position: "", achievements: "", photo: "" },
      { id: 104, name: "Bala Narain", batchYear: 2029, position: "", achievements: "", photo: "" }
    ],
    matches: [
      {
        id: 1, teamA: "Vanquishers", teamB: "Thunder Kings", scoreA: 21, scoreB: 15, date: "2026-02-18", venue: "City Sports Complex", status: "ongoing", set: "Set 2", type: "VPL",
        currentSet: 2,
        sets: [
          { scoreA: 40, scoreB: 35, teamAStrike: Array.from({ length: 40 }, (_, i) => i + 1), teamBStrike: Array.from({ length: 35 }, (_, i) => i + 1), timeouts: { teamA: true, teamB: true } },
          { scoreA: 21, scoreB: 15, teamAStrike: Array.from({ length: 21 }, (_, i) => i + 1), teamBStrike: Array.from({ length: 15 }, (_, i) => i + 1), timeouts: { teamA: false, teamB: false } },
          { scoreA: 0, scoreB: 0, teamAStrike: [], teamBStrike: [], timeouts: { teamA: false, teamB: false } }
        ]
      },
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
  },

  // ====== Initialize Data ======
  init() {
    if (!localStorage.getItem('vanq_initialized')) {
      // First time setup: Set all defaults
      localStorage.setItem('vanq_alumni', JSON.stringify(this.defaults.alumni));
      localStorage.setItem('vanq_players', JSON.stringify(this.defaults.players));
      localStorage.setItem('vanq_matches', JSON.stringify(this.defaults.matches));
      localStorage.setItem('vanq_points', JSON.stringify(this.defaults.pointsTable));
      localStorage.setItem('vanq_achievements', JSON.stringify(this.defaults.achievements || []));
      localStorage.setItem('vanq_initialized', 'true');
    }
  },

  // ====== Generic CRUD ======
  getAll(key) {
    return JSON.parse(localStorage.getItem(`vanq_${key}`) || '[]');
  },

  save(key, data) {
    localStorage.setItem(`vanq_${key}`, JSON.stringify(data));
  },

  add(key, item) {
    const items = this.getAll(key);
    item.id = items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1;
    items.push(item);
    this.save(key, items);
    return item;
  },

  update(key, id, updates) {
    const items = this.getAll(key);
    const index = items.findIndex(i => i.id === id);
    if (index !== -1) {
      items[index] = { ...items[index], ...updates };
      this.save(key, items);
      return items[index];
    }
    return null;
  },

  remove(key, id) {
    const items = this.getAll(key).filter(i => i.id !== id);
    this.save(key, items);
  },

  // ====== Auth (JWT-based with CAPTCHA) ======
  async getCaptcha() {
    try {
      const res = await fetch(`${this.API_BASE}/api/captcha`);
      return await res.json();
    } catch (e) {
      return { sessionId: '', question: 'Error loading CAPTCHA' };
    }
  },

  async login(username, password, captchaId, captchaAnswer) {
    try {
      const res = await fetch(`${this.API_BASE}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, captchaId, captchaAnswer })
      });
      const data = await res.json();
      if (!res.ok) return { success: false, error: data.error };
      localStorage.setItem('vanq_token', data.token);
      localStorage.setItem('vanq_auth', JSON.stringify({ user: data.user.displayName, role: data.user.role, batchYear: data.user.batchYear, loggedIn: true }));
      return { success: true };
    } catch (e) {
      return { success: false, error: 'Network error. Please try again.' };
    }
  },

  async changePassword(targetUsername, newPassword) {
    const token = localStorage.getItem('vanq_token');
    try {
      const res = await fetch(`${this.API_BASE}/api/change-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ targetUsername, newPassword })
      });
      const data = await res.json();
      if (!res.ok) return { success: false, error: data.error };
      return { success: true, message: data.message };
    } catch (e) {
      return { success: false, error: 'Network error.' };
    }
  },

  async getAllUsers() {
    const token = localStorage.getItem('vanq_token');
    try {
      const res = await fetch(`${this.API_BASE}/api/users`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (!res.ok) return [];
      return await res.json();
    } catch (e) {
      return [];
    }
  },

  isLoggedIn() {
    const token = localStorage.getItem('vanq_token');
    if (!token) return false;
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp * 1000 > Date.now();
    } catch (e) {
      return false;
    }
  },

  logout() {
    localStorage.removeItem('vanq_auth');
    localStorage.removeItem('vanq_token');
  },

  getUser() {
    return JSON.parse(localStorage.getItem('vanq_auth') || '{}');
  },

  // ====== Stats ======
  getStats() {
    const players = this.getAll('players');
    const matches = this.getAll('matches');
    const completed = matches.filter(m => m.status === 'completed');
    const wins = completed.filter(m => m.scoreA > m.scoreB).length;
    const upcoming = matches.filter(m => m.status === 'upcoming').length;
    const ongoing = matches.filter(m => m.status === 'ongoing').length;
    return {
      totalPlayers: players.length,
      totalMatches: completed.length,
      wins: wins,
      upcomingMatches: upcoming,
      ongoingMatches: ongoing
    };
  },

  // ====== Auction ======
  getAuctionPool() {
    const players = this.getAll('players').map(p => ({
      id: `p_${p.id}`, name: p.name, position: p.position, batchYear: p.batchYear, source: 'player', status: 'pending'
    }));
    const alumni = this.getAll('alumni').map(a => ({
      id: `a_${a.id}`, name: a.name, position: a.position, batchYear: a.batchYear, source: 'alumni', status: 'pending'
    }));
    return [...players, ...alumni];
  },

  getAuction() {
    return JSON.parse(localStorage.getItem('vanq_auction') || 'null');
  },

  saveAuction(data) {
    localStorage.setItem('vanq_auction', JSON.stringify(data));
  },

  resetAuction() {
    localStorage.removeItem('vanq_auction');
  },

  // ====== Memories ======
  _getMemoriesStore() {
    return JSON.parse(localStorage.getItem('vanq_memories') || '{}');
  },

  _saveMemoriesStore(store) {
    localStorage.setItem('vanq_memories', JSON.stringify(store));
  },

  getAlumniMemories(alumniId) {
    const store = this._getMemoriesStore();
    return store[alumniId] || [];
  },

  addMemory(alumniId, memory) {
    const store = this._getMemoriesStore();
    if (!store[alumniId]) store[alumniId] = [];
    memory.id = Date.now();
    memory.addedAt = new Date().toISOString();
    store[alumniId].push(memory);
    try {
      this._saveMemoriesStore(store);
      return memory;
    } catch (e) {
      // localStorage quota exceeded
      store[alumniId].pop();
      return null;
    }
  },

  removeMemory(alumniId, memoryId) {
    const store = this._getMemoriesStore();
    if (store[alumniId]) {
      store[alumniId] = store[alumniId].filter(m => m.id !== memoryId);
      this._saveMemoriesStore(store);
    }
  },

  updateMemory(alumniId, memoryId, updates) {
    const store = this._getMemoriesStore();
    if (store[alumniId]) {
      const idx = store[alumniId].findIndex(m => m.id === memoryId);
      if (idx !== -1) {
        store[alumniId][idx] = { ...store[alumniId][idx], ...updates };
        this._saveMemoriesStore(store);
        return true;
      }
    }
    return false;
  },

  getBatchMemories(year) {
    const alumni = this.getAll('alumni').filter(a => parseInt(a.batchYear) === year);
    const store = this._getMemoriesStore();
    let batchMemories = [];
    alumni.forEach(a => {
      const memories = store[a.id] || [];
      memories.forEach(m => {
        batchMemories.push({ ...m, alumniId: a.id, alumniName: a.name });
      });
    });
    // Sort by most recent
    return batchMemories.sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt));
  },

  getAllMemories() {
    const store = this._getMemoriesStore();
    const alumni = this.getAll('alumni');
    let allMemories = [];
    alumni.forEach(a => {
      const memories = store[a.id] || [];
      memories.forEach(m => {
        allMemories.push({ ...m, alumniId: a.id, alumniName: a.name });
      });
    });
    // Add general memories
    if (store['general']) {
      store['general'].forEach(m => {
        allMemories.push({ ...m, alumniId: 'general', alumniName: 'General' });
      });
    }
    // Sort by most recent
    return allMemories.sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt));
  },

  updateMatchScore(id, scoreA, scoreB, set, status) {
    return this.update('matches', id, { scoreA, scoreB, set, status });
  }
};

// Initialize data on load
VanquishersData.init();
