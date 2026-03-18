/* =====================================================
   VANQUISHERS - Data Layer
   Cloud API Integrated - MongoDB Backed
   ===================================================== */

const VanquishersData = {
  // Base URL for the API
  API_BASE: '', // Use relative paths for unified deployment

  // Internal cache to support synchronous UI expectations
  _cache: {
    players: [],
    alumni: [],
    matches: [],
    points: [],
    memories: {}, // Cache by alumniId
    auction: null
  },

  // ====== Initialize Data ======
  async init() {
    console.log('🔄 Initializing Cloud Data...');
    try {
      // Fetch core data in parallel
      const [players, alumni, matches, points] = await Promise.all([
        this.fetchData('players'),
        this.fetchData('alumni'),
        this.fetchData('matches'),
        this.fetchData('points')
      ]);

      this._cache.players = players;
      this._cache.alumni = alumni;
      this._cache.matches = matches;
      this._cache.points = points;

      console.log('✅ Cloud Data Synchronized');
      // Dispatch event to notify UI that data is ready
      window.dispatchEvent(new CustomEvent('vanq_data_ready'));
      return true;
    } catch (err) {
      console.error('❌ Failed to initialize cloud data:', err);
      // Fallback to empty arrays if backend is down
      return false;
    }
  },

  async fetchData(key) {
    try {
      const res = await fetch(`${this.API_BASE}/api/${key}`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return await res.json();
    } catch (e) {
      console.error(`Error fetching ${key}:`, e);
      return [];
    }
  },

  // ====== Generic CRUD (Internal Cache + Backend Sync) ======
  getAll(key) {
    return this._cache[key] || [];
  },

  async add(key, item) {
    const token = localStorage.getItem('vanq_token');
    try {
      const res = await fetch(`${this.API_BASE}/api/${key}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(item)
      });
      const newItem = await res.json();
      if (res.ok) {
        this._cache[key].push(newItem);
        return newItem;
      }
      throw new Error(newItem.error || 'Failed to add item');
    } catch (e) {
      console.error(`Error adding to ${key}:`, e);
      return null;
    }
  },

  async update(key, id, updates) {
    const token = localStorage.getItem('vanq_token');
    try {
      const res = await fetch(`${this.API_BASE}/api/${key}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(updates)
      });
      const updatedItem = await res.json();
      if (res.ok) {
        const idx = this._cache[key].findIndex(i => i.id === id);
        if (idx !== -1) this._cache[key][idx] = updatedItem;
        return updatedItem;
      }
      throw new Error(updatedItem.error || 'Failed to update item');
    } catch (e) {
      console.error(`Error updating ${key}:`, e);
      return null;
    }
  },

  async remove(key, id) {
    const token = localStorage.getItem('vanq_token');
    try {
      const res = await fetch(`${this.API_BASE}/api/${key}/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        this._cache[key] = this._cache[key].filter(i => i.id !== id);
        return true;
      }
    } catch (e) {
      console.error(`Error removing from ${key}:`, e);
    }
    return false;
  },

  // ====== Auth (JWT-based) ======
  async login(username, password) {
    try {
      const res = await fetch(`${this.API_BASE}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
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

  async getAuction() {
    try {
      const res = await fetch(`${this.API_BASE}/api/auction`);
      return await res.json();
    } catch (e) {
      return null;
    }
  },

  async saveAuction(data) {
    const token = localStorage.getItem('vanq_token');
    try {
      await fetch(`${this.API_BASE}/api/auction`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
      });
    } catch (e) {
      console.error('Error saving auction:', e);
    }
  },

  // ====== Memories ======
  async getAlumniMemories(alumniId) {
    try {
      const res = await fetch(`${this.API_BASE}/api/memories/${alumniId}`);
      return await res.json();
    } catch (e) {
      return [];
    }
  },

  async addMemory(alumniId, memory) {
    try {
      const res = await fetch(`${this.API_BASE}/api/memories`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...memory, alumniId })
      });
      return await res.json();
    } catch (e) {
      return null;
    }
  },

  async getBatchMemories(year) {
    const all = await this.getAllMemories();
    const alumni = this.getAll('alumni').filter(a => parseInt(a.batchYear) === year);
    const alumniIds = alumni.map(a => String(a.id));
    return all.filter(m => alumniIds.includes(String(m.alumniId)));
  },

  async getAllMemories() {
    return []; // Placeholder
  },

  async updateMatchScore(id, scoreA, scoreB, set, status) {
    return this.update('matches', id, { scoreA, scoreB, set, status });
  }
};

// Initialize data on load
VanquishersData.init();
