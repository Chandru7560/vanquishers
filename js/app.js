/* =====================================================
   VANQUISHERS - Main Application Router & Controller
   ===================================================== */

const App = {
  currentPage: 'home',

  // ====== Icons ======
  Icons: {
    home: `<svg class="icon" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
    alumni: `<svg class="icon" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
    players: `<svg class="icon" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>`,
    matches: `<svg class="icon" viewBox="0 0 24 24"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>`,
    points: `<svg class="icon" viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
    auction: `<svg class="icon" viewBox="0 0 24 24"><path d="m14 13 5 5"></path><path d="m16 19 2-2"></path><path d="M8.7 14.7l-4.3-4.4a3.1 3.1 0 0 1 4.4-4.4l4.4 4.3a3.1 3.1 0 0 1-4.4 4.4z"></path><path d="m2 22 5-5"></path></svg>`,
    passwords: `<svg class="icon" viewBox="0 0 24 24"><path d="M21 2l-2 2"></path><circle cx="7" cy="17" r="5"></circle><path d="M11 13l9-9"></path><path d="m15 5 2 2"></path><path d="m18 8 2 2"></path></svg>`,
    logout: `<svg class="icon" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>`,
    menu: `<svg class="icon" viewBox="0 0 24 24"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`,
    search: `<svg class="icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
    plus: `<svg class="icon" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,
    edit: `<svg class="icon" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`,
    trash: `<svg class="icon" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>`,
    camera: `<svg class="icon" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>`,
    music: `<svg class="icon" viewBox="0 0 24 24"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>`,
    file: `<svg class="icon" viewBox="0 0 24 24"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>`,
    check: `<svg class="icon" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    x: `<svg class="icon" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
    medal: `<svg class="icon" viewBox="0 0 24 24"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"></path><path d="M11 12 5.12 2.2"></path><path d="m13 12 5.88-9.8"></path><path d="M8 7h8"></path><circle cx="12" cy="17" r="5"></circle><path d="M12 18v-2h-.5"></path></svg>`,
    location: `<svg class="icon" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
    star: `<svg class="icon" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
    settings: `<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
    rocket: `<svg class="icon" viewBox="0 0 24 24"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.5-1 1-4c2 1 3 3 4 4z"></path><path d="M15 9h5c-1-2-3-3-4-4z"></path></svg>`,
    package: `<svg class="icon" viewBox="0 0 24 24"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
    award: `<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
    dollar: `<svg class="icon" viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
    shield: `<svg class="icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
    info: `<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`,
    mail: `<svg class="icon" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
    calendar: `<svg class="icon" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
    arrowLeft: `<svg class="icon" viewBox="0 0 24 24"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`,
    arrowRight: `<svg class="icon" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,
    circle: `<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle></svg>`,
    gavel: `<svg class="icon" viewBox="0 0 24 24"><path d="m14 13 5 5"></path><path d="m16 19 2-2"></path><path d="M8.7 14.7l-4.3-4.4a3.1 3.1 0 0 1 4.4-4.4l4.4 4.3a3.1 3.1 0 0 1-4.4 4.4z"></path><path d="m2 22 5-5"></path></svg>`,
    timer: `<svg class="icon" viewBox="0 0 24 24"><path d="M10 2h4"></path><path d="M12 14v-4"></path><path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-8 7Z"></path><path d="M9 7l-5 1.5"></path></svg>`,
    minus: `<svg class="icon" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,
    achievements: `<svg class="icon" viewBox="0 0 24 24"><path d="M8 21h8"></path><path d="M12 17v4"></path><path d="M7 4h10"></path><path d="M17 4v8a5 5 0 0 1-10 0V4"></path><path d="M12 12V4"></path><path d="M17 7h3a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-3"></path><path d="M7 7H4a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h3"></path></svg>`
  },

  // ====== Initialize ======
  init() {
    if (!VanquishersData.isLoggedIn()) {
      this.showLogin();
      return;
    }
    this.showDashboard();
  },

  // ====== Navigation ======
  navigate(page) {
    this.currentPage = page;
    // Update active nav
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    const activeNav = document.querySelector(`.nav-item[data-page="${page}"]`);
    if (activeNav) activeNav.classList.add('active');

    // Update page title
    const titles = {
      home: `${this.Icons.home} Home`,
      alumni: `${this.Icons.alumni} Alumni List`,
      players: `${this.Icons.players} Team Players`,
      matches: `${this.Icons.matches} Matches`,
      points: `${this.Icons.points} Points Table`,
      auction: `VPL Auction`,
      memories: `${this.Icons.camera} Memories`,
      achievements: `${this.Icons.star} Team Achievements`,
      passwords: `${this.Icons.passwords} Password Management`
    };
    document.getElementById('pageTitle').innerHTML = titles[page] || 'Home';

    // Render page
    const content = document.getElementById('pageContent');
    content.style.background = '';
    content.style.color = '';
    content.style.padding = '';
    content.style.animation = 'none';
    content.offsetHeight; // Force reflow
    content.style.animation = 'fade-in 0.4s ease';

    switch (page) {
      case 'home': this.renderHome(content); break;
      case 'alumni': this.renderAlumni(content); break;
      case 'players': this.renderPlayers(content); break;
      case 'matches': this.renderMatches(content); break;
      case 'points': this.renderPoints(content); break;
      case 'auction': this.renderAuctionPage(content); break;
      case 'memories': this.renderMemoriesGallery(content); break;
      case 'achievements': this.renderAchievementsPage(content); break;
      case 'passwords': this.renderPasswordManagement(content); break;
      default: this.renderHome(content);
    }

    // Close mobile sidebar
    document.querySelector('.sidebar')?.classList.remove('open');
    document.querySelector('.sidebar-overlay')?.classList.remove('show');
  },

  // ====== Login Page ======
  async showLogin() {
    document.body.innerHTML = `
      <div class="login-page">
        <div class="login-bg-particles">
          <div class="orb"></div>
          <div class="orb"></div>
          <div class="orb"></div>
        </div>
        <div class="login-card">
          <div class="login-logo">
            <img src="assets/logo.png" alt="Vanquishers Logo" />
            <h1>Vanquishers</h1>
            <p>Ball Badminton Team</p>
          </div>
          <form class="login-form" id="loginForm">
            <div class="form-group">
              <label>Username</label>
              <input type="text" id="loginUser" placeholder="Enter username" autocomplete="off" />
            </div>
            <div class="form-group">
              <label>Password</label>
              <div class="password-input-wrapper">
                <input type="password" id="loginPass" placeholder="Enter password" />
                <button type="button" class="password-toggle" id="passwordToggle" title="Toggle Password Visibility">
                  <svg viewBox="0 0 24 24" id="toggleIcon">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
              </div>
            </div>
            <div class="form-group captcha-group">
              <label>Verify you're human</label>
              <div class="captcha-box">
                <div class="captcha-question" id="captchaQuestion">Loading...</div>
                <button type="button" class="captcha-refresh" id="captchaRefresh" title="Get new CAPTCHA">
                <img src="assets/refresh.png" alt="Reload" />
              </button>
              </div>
              <input type="number" id="captchaAnswer" placeholder="Your answer" autocomplete="off" />
              <input type="hidden" id="captchaId" />
            </div>
            <button type="submit" class="login-btn" id="loginBtn">Sign In</button>
            <div class="login-error" id="loginError">Invalid username or password</div>
          </form>
        </div>
      </div>
    `;

    // Load CAPTCHA
    await this.loadCaptcha();

    document.getElementById('captchaRefresh').addEventListener('click', () => this.loadCaptcha());

    document.getElementById('passwordToggle').addEventListener('click', () => {
      const passInput = document.getElementById('loginPass');
      const toggleIcon = document.getElementById('toggleIcon');
      const isPassword = passInput.type === 'password';

      passInput.type = isPassword ? 'text' : 'password';

      // Update icon
      if (isPassword) {
        toggleIcon.innerHTML = `
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
      `;
      } else {
        toggleIcon.innerHTML = `
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      `;
      }
    });

    document.getElementById('loginForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const user = document.getElementById('loginUser').value.trim().toLowerCase();
      const pass = document.getElementById('loginPass').value;
      const captchaId = document.getElementById('captchaId').value;
      const captchaAnswer = document.getElementById('captchaAnswer').value.trim();
      const btn = document.getElementById('loginBtn');
      const errorEl = document.getElementById('loginError');

      if (!captchaAnswer) {
        errorEl.textContent = 'Please solve the CAPTCHA';
        errorEl.classList.add('show');
        setTimeout(() => errorEl.classList.remove('show'), 3000);
        return;
      }

      btn.textContent = 'Signing in...';
      btn.disabled = true;

      const result = await VanquishersData.login(user, pass, captchaId, captchaAnswer);

      if (!result.success) {
        errorEl.textContent = result.error;
        errorEl.classList.add('show');
        btn.textContent = 'Sign In';
        btn.disabled = false;
        // Refresh CAPTCHA on failed attempt
        await this.loadCaptcha();
        document.getElementById('captchaAnswer').value = '';
        setTimeout(() => errorEl.classList.remove('show'), 3000);
        return;
      }

      this.showDashboard();
    });
  },

  async loadCaptcha() {
    const data = await VanquishersData.getCaptcha();
    document.getElementById('captchaQuestion').textContent = data.question;
    document.getElementById('captchaId').value = data.sessionId;
    document.getElementById('captchaAnswer').value = '';
  },

  // ====== Dashboard Layout ======
  showDashboard() {
    document.body.innerHTML = `
      <div class="app-container">
        <div class="sidebar-overlay" id="sidebarOverlay"></div>
        <aside class="sidebar" id="sidebar">
          <div class="sidebar-header">
            <img src="assets/logo.png" alt="Logo" />
            <div>
              <div class="brand-name">VANQUISHERS</div>
              <div class="brand-sub">Ball Badminton</div>
            </div>
          </div>
          <nav class="sidebar-nav">
            <div class="nav-section-title">Main Menu</div>
            <div class="nav-item active" data-page="home" onclick="App.navigate('home')">
              <span class="nav-icon">${this.Icons.home}</span>
              <span>Home</span>
            </div>
            <div class="nav-item" data-page="alumni" onclick="App.navigate('alumni')">
              <span class="nav-icon">${this.Icons.alumni}</span>
              <span>Alumni List</span>
            </div>
            <div class="nav-item" data-page="memories" onclick="App.navigate('memories')">
              <span class="nav-icon">${this.Icons.camera}</span>
              <span>Memories</span>
            </div>
            <div class="nav-item" data-page="achievements" onclick="App.navigate('achievements')">
              <span class="nav-icon">${this.Icons.star}</span>
              <span>Achievements</span>
            </div>
            <div class="nav-item" data-page="players" onclick="App.navigate('players')">
              <span class="nav-icon">${this.Icons.players}</span>
              <span>Team Players</span>
            </div>
            <div class="nav-section-title">Competition</div>
            <div class="nav-item" data-page="matches" onclick="App.navigate('matches')">
              <span class="nav-icon">${this.Icons.matches}</span>
              <span>Matches</span>
              <span class="nav-badge" id="liveMatchBadge"></span>
            </div>
            <div class="nav-item" data-page="points" onclick="App.navigate('points')">
              <span class="nav-icon">${this.Icons.points}</span>
              <span>Points Table</span>
            </div>
            <div class="nav-section-title">Auction</div>
            <div class="nav-item" data-page="auction" onclick="App.navigate('auction')">
              <span class="nav-icon">${this.Icons.auction}</span>
              <span>VPL Auction</span>
              <span class="nav-badge auction-badge" style="background:var(--accent-gold);color:#000">NEW</span>
            </div>
            ${VanquishersData.getUser().role === 'admin' ? `
            <div class="nav-section-title">Admin</div>
            <div class="nav-item" data-page="passwords" onclick="App.navigate('passwords')">
              <span class="nav-icon">${this.Icons.passwords}</span>
              <span>Passwords</span>
            </div>
            ` : ''}
          </nav>
          <div class="sidebar-footer">
            <button class="logout-btn" onclick="App.handleLogout()">
              <span>${this.Icons.logout}</span>
              <span>Sign Out</span>
            </button>
          </div>
        </aside>
        <main class="main-content">
          <header class="top-header">
            <div class="header-left">
              <button class="menu-toggle" id="menuToggle" onclick="App.toggleSidebar()">${this.Icons.menu}</button>
              <h1 class="page-title" id="pageTitle">${this.Icons.home} Home</h1>
            </div>
            <div class="header-right" style="position: relative;">
              <div class="user-badge" onclick="App.toggleUserMenu()" title="Profile Menu">
                <div class="avatar">${VanquishersData.getUser().user?.[0] || 'U'}</div>
                <span class="user-name">${VanquishersData.getUser().user || 'User'}</span>
              </div>
              <div class="user-dropdown" id="userDropdown">
                <div class="dropdown-item" onclick="App.handleLogout()">
                  ${this.Icons.logout} Sign Out
                </div>
              </div>
            </div>
          </header>
          <div class="page-content" id="pageContent"></div>
        </main>
      </div>
    `;

    // Update live match badge
    const ongoing = VanquishersData.getAll('matches').filter(m => m.status === 'ongoing').length;
    const badge = document.getElementById('liveMatchBadge');
    if (badge) badge.textContent = ongoing > 0 ? `${ongoing} LIVE` : '';

    // Sidebar overlay click Close
    document.getElementById('sidebarOverlay')?.addEventListener('click', () => this.toggleSidebar());

    // Close user dropdown when clicking outside
    window.addEventListener('click', (e) => {
      const dropdown = document.getElementById('userDropdown');
      const badge = document.querySelector('.user-badge');
      if (dropdown && dropdown.classList.contains('show') && !dropdown.contains(e.target) && !badge.contains(e.target)) {
        dropdown.classList.remove('show');
      }
    });

    this.navigate('home');
  },

  toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('sidebarOverlay').classList.toggle('show');
  },

  toggleUserMenu() {
    document.getElementById('userDropdown').classList.toggle('show');
  },

  handleLogout() {
    VanquishersData.logout();
    this.showLogin();
  },

  // ====== Toast Notification ======
  showToast(message, type = 'success') {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  },

  // ====== HOME PAGE ======
  renderHome(container) {
    const stats = VanquishersData.getStats();
    const recentMatches = VanquishersData.getAll('matches')
      .filter(m => m.status === 'completed')
      .slice(-3)
      .reverse();

    container.innerHTML = `
      <div class="home-hero">
        <img src="assets/logo.png" alt="Vanquishers" class="hero-logo" />
        <div class="hero-text">
          <h1>Welcome to <span>VANQUISHERS</span></h1>
          <p>The official ball badminton team management portal. Track matches, manage players, and dominate the court!</p>
        </div>
      </div>

      <div class="stats-grid">
        <div class="stat-card" onclick="App.navigate('players')">
          <div class="stat-icon cyan">${this.Icons.players}</div>
          <div class="stat-value">${stats.totalPlayers}</div>
          <div class="stat-label">Team Players</div>
        </div>
        <div class="stat-card" onclick="App.navigate('matches')">
          <div class="stat-icon magenta">${this.Icons.matches}</div>
          <div class="stat-value">${stats.totalMatches}</div>
          <div class="stat-label">Matches</div>
        </div>
        <div class="stat-card" onclick="App.navigate('achievements')">
          <div class="stat-icon gold">${this.Icons.star}</div>
          <div class="stat-value">${VanquishersData.getAll('achievements').length}</div>
          <div class="stat-label">Team Achievements</div>
        </div>
      </div>

      <div class="section-header">
        <h2 style="color: #ffffff">Recent Results</h2>
        <div class="view-all" onclick="App.navigate('matches')">View All Matches ${this.Icons.arrowRight}</div>
      </div>

      <div class="matches-grid">
        ${recentMatches.length > 0
          ? recentMatches.map(m => this.renderMatchCard(m)).join('')
          : `<div class="empty-state">
               <div class="empty-icon">${this.Icons.matches}</div>
               <p>No recent matches found</p>
             </div>`
        }
      </div>
    `;
  },

  // ====== ALUMNI PAGE ======
  renderAlumni(container) {
    const isAdmin = VanquishersData.getUser().role === 'admin';
    container.innerHTML = `
      <div class="page-toolbar">
        <div class="search-bar">
          <input type="text" id="alumniSearch" placeholder="Search batch..." oninput="App.filterBatches()" />
        </div>
        ${isAdmin ? `<button class="btn btn-primary" onclick="App.showAlumniModal()">${this.Icons.plus} Add Alumni</button>` : ''}
      </div>
      <div class="batch-grid" id="batchGrid">
        ${this.generateBatchCards()}
      </div>
    `;
  },

  generateBatchCards() {
    let html = '';
    for (let year = 2010; year <= 2029; year++) {
      const count = VanquishersData.getAll('alumni').filter(a => parseInt(a.batchYear) === year).length;
      html += `
        <div class="batch-card" onclick="App.viewBatch(${year})">
          <div class="batch-number">${year}</div>
          <div class="batch-info">${count} Alumni</div>
          <div class="batch-arrow">${this.Icons.arrowRight}</div>
        </div>
      `;
    }
    return html;
  },

  filterBatches() {
    const q = document.getElementById('alumniSearch').value.toLowerCase();
    document.querySelectorAll('.batch-card').forEach(card => {
      const year = card.querySelector('.batch-number').textContent;
      card.style.display = year.includes(q) ? '' : 'none';
    });
  },

  viewBatch(year) {
    const alumni = VanquishersData.getAll('alumni').filter(a => parseInt(a.batchYear) === year);
    const isAdmin = VanquishersData.getUser().role === 'admin';

    const content = document.getElementById('pageContent');
    content.innerHTML = `
      <div class="page-toolbar">
        <button class="btn btn-secondary" onclick="App.navigate('alumni')">${this.Icons.arrowLeft} Back to Batches</button>
        <h2 style="margin-left:16px;color:#ffffff">Batch ${year}</h2>
        <div style="margin-left:auto; display:flex; gap:12px;">
          ${isAdmin ? `<button class="btn btn-primary" onclick="App.showAlumniModal(null, ${year})">${this.Icons.plus} Add to Batch</button>` : ''}
        </div>
      </div>
      <div class="alumni-grid">
        ${alumni.map(a => this.renderAlumniCard(a)).join('')}
      </div>
      ${alumni.length === 0 ? `<div class="empty-state"><div class="empty-icon">${this.Icons.alumni}</div><p>No alumni details for this batch yet</p></div>` : ''}
    `;
  },

  renderAlumniCard(a) {
    const isAdmin = VanquishersData.getUser().role === 'admin';
    const currentUser = VanquishersData.getUser();
    const isSelf = currentUser.user === a.name && parseInt(currentUser.batchYear) === a.batchYear;
    const canEditPhoto = isAdmin || isSelf;

    const initials = a.name.split(' ').map(n => n[0]).join('').substring(0, 2);
    return `
      <div class="alumni-card">
        <div class="alumni-photo-container ${canEditPhoto ? 'editable' : ''}" onclick="${canEditPhoto ? `document.getElementById('photoInput_alumni_${a.id}').click()` : ''}">
          ${a.photo ? `<img src="${a.photo}" class="alumni-photo" />` : `<div class="alumni-avatar">${initials}</div>`}
          ${canEditPhoto ? `
            <div class="photo-edit-overlay">${this.Icons.camera}</div>
            <input type="file" id="photoInput_alumni_${a.id}" style="display:none" accept="image/*" onchange="App.handlePhotoUpload('alumni', ${a.id}, this)" />
          ` : ''}
        </div>
        <div class="alumni-name">${a.name}</div>
        <div class="alumni-batch">Batch ${a.batchYear}</div>
        <div class="alumni-card-actions">
          ${isAdmin ? `
          <button class="btn btn-secondary btn-small" onclick="App.showAlumniModal(${a.id})">${this.Icons.edit} Edit</button>
          <button class="btn btn-danger btn-small" onclick="App.deleteAlumni(${a.id})">${this.Icons.trash}</button>
          ` : `<div style="height:32px"></div>`}
        </div>
      </div>
    `;
  },

  // ====== ALUMNI MEMORIES GALLERY ======
  renderMemoriesGallery(container) {
    const memories = VanquishersData.getAllMemories();
    container.innerHTML = `
      <div class="gallery-wrapper">
        <div class="gallery-toolbar" style="margin-bottom: 24px;">
           <h2 style="color:#ffffff; display:flex; align-items:center; gap:12px;">
             ${this.Icons.camera} Memories
           </h2>
        </div>
        
        <div class="memories-grid gallery-grid">
          ${memories.length > 0 ? memories.map(m => this.renderGalleryItem(m)).join('') : `
            <div class="empty-state">
              <div class="empty-icon" style="color:#ffffff;">${this.Icons.camera}</div>
              <p style="color:#ffffff;">No memories uploaded yet. Click the + icon to add!</p>
            </div>
          `}
        </div>

        <!-- Floating Action Button (Google Drive Style) -->
        <div class="fab-container">
          <div class="upload-popup-menu" id="globalUploadMenu">
            <div class="menu-item" onclick="App.triggerGlobalUpload('file')">
              <span class="menu-icon">${this.Icons.file}</span>
              <span>File upload</span>
            </div>
            <div class="menu-item" onclick="App.showToast('New folder feature coming soon!')">
              <span class="menu-icon">${this.Icons.plus}</span>
              <span>New folder</span>
            </div>
          </div>
          <button class="btn-fab" onclick="App.toggleGlobalUploadMenu()" title="Add New">
             ${this.Icons.plus}
          </button>
          <input type="file" id="globalMemoryInput" multiple accept="image/*,video/*,audio/*" style="display:none" onchange="App.handleGlobalUpload()" />
        </div>
      </div>
    `;
  },

  renderGalleryItem(mem) {
    const canEdit = VanquishersData.isLoggedIn();
    const ext = mem.name.split('.').pop().toLowerCase();
    const isImage = ['png', 'jpg', 'jpeg', 'gif', 'webp', 'heic', 'heif', 'bmp', 'svg'].includes(ext);
    const isVideo = ['mp4', 'mov', 'webm', 'avi', 'mkv', 'm4v'].includes(ext);
    const isAudio = ['mp3', 'm4a', 'aac', 'wav', 'ogg', 'flac'].includes(ext);

    let preview = '';
    if (isImage) {
      preview = `<img src="${mem.data}" alt="${mem.name}" class="memory-preview-img" />`;
    } else if (isVideo) {
      preview = `<video src="${mem.data}" class="memory-preview-video" preload="metadata"></video><div class="video-overlay">${this.Icons.camera}</div>`;
    } else if (isAudio) {
      preview = `<div class="memory-audio-icon-gallery">${this.Icons.music}</div>`;
    } else {
      preview = `<div class="memory-file-icon">${this.Icons.file}</div>`;
    }

    return `
      <div class="memory-item gallery-item" onclick="App.showMemoriesModal('${mem.alumniId}')">
        <div class="memory-preview" onclick="event.stopPropagation(); App.viewMemoryFullscreen('${mem.alumniId}', ${mem.id})" style="cursor:pointer" title="View Fullscreen">${preview}</div>
        <div class="memory-info">
          <span class="memory-name" title="${mem.name}">${mem.name.length > 15 ? mem.name.substring(0, 13) + '...' : mem.name}</span>
          <span class="memory-author">${mem.alumniName}</span>
          <span class="memory-date">${new Date(mem.addedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</span>
        </div>
        ${canEdit ? `
        <div class="memory-actions global-actions">
           <button class="btn btn-secondary btn-small" onclick="event.stopPropagation(); App.editMemory('${mem.alumniId}', ${mem.id})">${this.Icons.edit}</button>
           <button class="btn btn-danger btn-small" onclick="event.stopPropagation(); App.deleteMemory('${mem.alumniId}', ${mem.id})">${this.Icons.trash}</button>
        </div>
        ` : ''}
      </div>
    `;
  },

  toggleGlobalUploadMenu() {
    const menu = document.getElementById('globalUploadMenu');
    if (menu) menu.classList.toggle('show');
  },

  triggerGlobalUpload(type) {
    if (type === 'file') {
      document.getElementById('globalMemoryInput').click();
    }
    this.toggleGlobalUploadMenu();
  },

  handleGlobalUpload() {
    const input = document.getElementById('globalMemoryInput');
    const files = input.files;
    if (files.length === 0) return;

    // Direct upload to 'general'
    this.processMemoryFiles('general', files);
  },

  viewMemoryFullscreen(alumniId, memoryId) {
    let memory;
    if (alumniId === 'general') {
       const store = VanquishersData._getMemoriesStore();
       memory = (store['general'] || []).find(m => m.id === memoryId);
    } else {
       memory = VanquishersData.getAlumniMemories(alumniId).find(m => m.id === memoryId);
    }
    if (!memory) return;

    const overlay = document.createElement('div');
    overlay.className = 'fullscreen-viewer-overlay';
    
    // Close on background click
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('show');
        setTimeout(() => overlay.remove(), 300);
      }
    });

    const closeBtn = document.createElement('button');
    closeBtn.className = 'fullscreen-close';
    closeBtn.innerHTML = this.Icons.x;
    closeBtn.onclick = () => {
       overlay.classList.remove('show');
       setTimeout(() => overlay.remove(), 300);
    };

    const header = document.createElement('div');
    header.className = 'fullscreen-header';
    header.innerHTML = `<div class="fullscreen-header-title">${memory.name}</div>`;

    let content = '';
    const isImage = memory.type.startsWith('image/');
    const isVideo = memory.type.startsWith('video/');
    const isAudio = memory.type.startsWith('audio/');

    if (isImage) {
      content = `<img src="${memory.data}" alt="${memory.name}" class="fullscreen-content" />`;
    } else if (isVideo) {
      content = `<video src="${memory.data}" controls autoplay class="fullscreen-content"></video>`;
    } else if (isAudio) {
      content = `
        <div class="fullscreen-audio-container fullscreen-content">
           <div style="font-size: 64px; color: var(--accent-cyan);">${this.Icons.music}</div>
           <audio src="${memory.data}" controls autoplay style="width: 100%;"></audio>
        </div>
      `;
    } else {
      content = `
        <div class="fullscreen-audio-container fullscreen-content">
           <div style="font-size: 64px; color: var(--text-muted);">${this.Icons.file}</div>
           <p style="color: white; margin-top: 10px;">${memory.name}</p>
           <a href="${memory.data}" download="${memory.name}" class="btn btn-primary" style="margin-top:20px;">Download File</a>
        </div>
      `;
    }

    overlay.innerHTML = content;
    overlay.appendChild(closeBtn);
    overlay.appendChild(header);

    document.body.appendChild(overlay);
    // Trigger paint before adding class for smooth animation
    requestAnimationFrame(() => {
       overlay.classList.add('show');
    });
  },

  deleteAlumni(id) {
    if (confirm('Are you sure you want to delete this alumni? This action cannot be undone.')) {
      VanquishersData.remove('alumni', id);
      this.showToast('Alumni deleted successfully!');
      this.navigate('alumni'); // Refresh the alumni list
    }
  },

  showMemoriesModal(alumniId) {
    let alumniName = 'General';
    if (alumniId !== 'general') {
       const alumni = VanquishersData.getAll('alumni').find(a => a.id === alumniId);
       if (!alumni) return;
       alumniName = alumni.name;
    }
    
    const memories = VanquishersData.getAlumniMemories(alumniId);
    // Allow any logged-in user to upload and edit
    const canEdit = VanquishersData.isLoggedIn();

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'memoriesModal';

    const renderMemoryItem = (mem) => {
      const ext = mem.name.split('.').pop().toLowerCase();
      const isImage = ['png', 'jpg', 'jpeg', 'gif', 'webp', 'heic', 'heif', 'bmp', 'svg'].includes(ext);
      const isVideo = ['mp4', 'mov', 'webm', 'avi', 'mkv', 'm4v'].includes(ext);
      const isAudio = ['mp3', 'm4a', 'aac', 'wav', 'ogg', 'flac'].includes(ext);

      let preview = '';
      if (isImage) {
        preview = `<img src="${mem.data}" alt="${mem.name}" class="memory-preview-img" />`;
      } else if (isVideo) {
        preview = `<video src="${mem.data}" class="memory-preview-video" controls preload="metadata"></video>`;
      } else if (isAudio) {
        preview = `<div class="memory-audio-wrap"><div class="memory-audio-icon">${this.Icons.music}</div><audio src="${mem.data}" controls preload="metadata" class="memory-audio-player"></audio></div>`;
      } else {
        preview = `<div class="memory-file-icon">${this.Icons.file} ${mem.name}</div>`;
      }

      return `
        <div class="memory-item" data-id="${mem.id}">
          <div class="memory-preview" onclick="App.viewMemoryFullscreen('${alumniId}', ${mem.id})" style="cursor:pointer" title="View Fullscreen">${preview}</div>
          <div class="memory-info">
            <span class="memory-name" title="${mem.name}">${mem.name.length > 20 ? mem.name.substring(0, 18) + '...' : mem.name}</span>
            <span class="memory-date">${new Date(mem.addedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
          </div>
          ${canEdit ? `
            <div class="memory-actions global-actions">
              <button class="btn btn-secondary btn-small" onclick="event.stopPropagation(); App.editMemory('${alumniId}', ${mem.id})" title="Edit">${this.Icons.edit}</button>
              <button class="btn btn-danger btn-small" onclick="event.stopPropagation(); App.deleteMemory('${alumniId}', ${mem.id})" title="Delete">${this.Icons.trash}</button>
            </div>
          ` : ''}
        </div>
      `;
    };

    overlay.innerHTML = `
      <div class="modal memories-modal">
        <div class="modal-header">
          <h3>${this.Icons.camera} Memories — ${alumniName}</h3>
          <div class="modal-header-actions">
            ${canEdit ? `
              <button class="btn btn-primary btn-round" onclick="document.getElementById('memoryFileInput').click()" title="Add Memory">
                ${this.Icons.plus}
              </button>
              <input type="file" id="memoryFileInput" multiple accept="image/*,video/*,audio/*,.heic,.heif,.mov,.m4a,.aac,.mp3,.mp4,.wav" style="display:none" onchange="App.handleMemoryUpload('${alumniId}')" />
            ` : ''}
            <button class="modal-close" onclick="document.getElementById('memoriesModal').remove()">${this.Icons.x}</button>
          </div>
        </div>
        <div class="modal-body">
          <div class="memories-grid" id="memoriesGrid">
          ${memories.length > 0 ? memories.map(renderMemoryItem).join('') : `<div class="memories-empty"><p>${canEdit ? 'No memories yet. Click the + icon to upload photos, videos, or audio!' : 'No memories yet for this batch.'}</p></div>`}
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    // Clean modal removal on overlay click
    overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
  },

  handleMemoryUpload(alumniId) {
    const input = document.getElementById('memoryFileInput');
    if (input && input.files && input.files.length > 0) {
      this.processMemoryFiles(alumniId, input.files);
    }
  },

  processMemoryFiles(alumniId, files) {
    let processed = 0;
    const total = files.length;

    Array.from(files).forEach(file => {
      // Limit to 15MB per file before compression
      if (file.size > 15 * 1024 * 1024) {
        this.showToast(`${file.name} is too large (max 15MB per file)`, 'error');
        processed++;
        if (processed === total) this.showMemoriesModal(alumniId);
        return;
      }

      if (file.type.startsWith('image/')) {
        this.compressImage(file, (base64) => {
          this._saveMemoryWithData(alumniId, file.name, file.type, base64, () => {
             processed++;
             if (processed === total) this._finishMemoryUpload(alumniId, total);
          });
        });
      } else {
        const reader = new FileReader();
        reader.onload = (e) => {
           this._saveMemoryWithData(alumniId, file.name, file.type, e.target.result, () => {
             processed++;
             if (processed === total) this._finishMemoryUpload(alumniId, total);
           });
        };
        reader.readAsDataURL(file);
      }
    });
  },

  _saveMemoryWithData(alumniId, name, type, data, callback) {
     const memory = { name, type, data };
     const result = VanquishersData.addMemory(alumniId, memory);
     if (!result) {
       this.showToast('Storage is full! Cannot save more memories.', 'error');
     }
     callback();
  },
  editMemory(alumniId, memoryId) {
    const memories = VanquishersData.getAlumniMemories(alumniId);
    const memory = memories.find(m => m.id === memoryId);
    if (!memory) return;

    const newName = prompt('Enter new name for this memory:', memory.name);
    if (newName && newName.trim() && newName !== memory.name) {
      VanquishersData.updateMemory(alumniId, memoryId, { name: newName.trim() });
      document.getElementById('memoriesModal')?.remove();
      this.showMemoriesModal(alumniId);
      this.showToast('Memory renamed');
    }
  },

  _finishMemoryUpload(alumniId, total) {
     document.getElementById('memoriesModal')?.remove();
     this.showMemoriesModal(alumniId);
     this.showToast(`${total} file(s) uploaded!`);
  },

  deleteMemory(alumniId, memoryId) {
    if (confirm('Delete this memory?')) {
      VanquishersData.removeMemory(alumniId, memoryId);
      document.getElementById('memoriesModal')?.remove();
      this.showMemoriesModal(alumniId);
      this.showToast('Memory deleted');
    }
  },


  handlePhotoUpload(type, id, input) {
    if (input.files && input.files[0]) {
      this.processPhotoFile(type, id, input.files[0]);
    }
  },

  processPhotoFile(type, id, file) {
    if (file.size > 15 * 1024 * 1024) {
      this.showToast('Photo is too large (max 15MB)', 'error');
      return;
    }

    this.compressImage(file, (base64) => {
      VanquishersData.update(type, id, { photo: base64 });
      this.showToast('Profile photo updated!');
      // Refresh current view
      if (this.currentPage === 'players') this.navigate('players');
      else if (this.currentPage === 'alumni') {
        const alumni = VanquishersData.getAll('alumni').find(a => a.id === id);
        if (alumni) this.viewBatch(alumni.batchYear);
      }
    });
  },

  compressImage(file, callback) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 1200;
        let width = img.width;
        let height = img.height;

        if (width > MAX_WIDTH) {
          height = Math.round((height * MAX_WIDTH) / width);
          width = MAX_WIDTH;
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        // Compress to JPEG with 0.7 quality
        const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
        callback(dataUrl);
      };
    };
  },

  filterAlumni() {
    const q = document.getElementById('alumniSearch').value.toLowerCase();
    document.querySelectorAll('.alumni-card').forEach(card => {
      const name = card.dataset.name;
      const batch = card.dataset.batch;
      card.style.display = (name.includes(q) || batch.includes(q)) ? '' : 'none';
    });
  },

  showAlumniModal(id = null, defaultBatch = null) {
    const alumni = id ? VanquishersData.getAll('alumni').find(a => a.id === id) : null;
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'alumniModal';
    overlay.innerHTML = `
      <div class="modal">
        <div class="modal-header">
          <h3>${alumni ? 'Edit' : 'Add'} Alumni</h3>
          <button class="modal-close" onclick="document.getElementById('alumniModal').remove()">${this.Icons.x}</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>Full Name</label>
            <input type="text" id="alumniName" value="${alumni?.name || ''}" placeholder="Enter name" />
          </div>
          <div class="form-group">
            <label>Batch Year (2010-2029)</label>
            <input type="number" id="alumniBatch" value="${alumni?.batchYear || defaultBatch || ''}" min="2010" max="2029" placeholder="e.g. 2020" />
          </div>
          <div class="form-group">
            <label>Photo URL</label>
            <input type="text" id="alumniPhoto" value="${alumni?.photo || ''}" placeholder="URL to photo" />
          </div>
          <div class="form-group">
            <label>Position</label>
            <select id="alumniPosition">
              <option value="Attacker" ${alumni?.position?.includes('Attacker') ? 'selected' : ''}>Attacker</option>
              <option value="Defender" ${alumni?.position?.includes('Defender') ? 'selected' : ''}>Defender</option>
              <option value="All-Rounder" ${alumni?.position?.includes('All-Rounder') ? 'selected' : ''}>All-Rounder</option>
              <option value="Server" ${alumni?.position?.includes('Server') ? 'selected' : ''}>Server</option>
              <option value="Captain - Attacker" ${alumni?.position === 'Captain - Attacker' ? 'selected' : ''}>Captain - Attacker</option>
              <option value="Captain - Server" ${alumni?.position === 'Captain - Server' ? 'selected' : ''}>Captain - Server</option>
            </select>
          </div>
          <div class="form-group">
            <label>Achievements</label>
            <input type="text" id="alumniAchievements" value="${alumni?.achievements || ''}" placeholder="e.g. State Champion 2020" />
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" onclick="document.getElementById('alumniModal').remove()">Cancel</button>
          <button class="btn btn-primary" onclick="App.saveAlumni(${id || 'null'})">${alumni ? 'Update' : 'Add'} Alumni</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
  },

  saveAlumni(id) {
    const name = document.getElementById('alumniName').value.trim();
    const batchYear = parseInt(document.getElementById('alumniBatch').value);
    const photo = document.getElementById('alumniPhoto').value.trim();
    const position = document.getElementById('alumniPosition').value;
    const achievements = document.getElementById('alumniAchievements').value.trim();

    if (!name || !batchYear) { this.showToast('Please fill all required fields', 'error'); return; }

    if (id) {
      VanquishersData.update('alumni', id, { name, batchYear, position, achievements, photo });
      this.showToast('Alumni updated successfully');
    } else {
      VanquishersData.add('alumni', { name, batchYear, position, achievements, photo });
      this.showToast('Alumni added successfully');
    }
    document.getElementById('alumniModal').remove();
    this.viewBatch(batchYear);
  },

  deleteAlumni(id) {
    if (confirm('Are you sure you want to remove this alumni?')) {
      const batch = VanquishersData.getAll('alumni').find(a => a.id === id)?.batchYear;
      VanquishersData.remove('alumni', id);
      this.showToast('Alumni removed');
      if (batch) this.viewBatch(batch);
      else this.navigate('alumni');
    }
  },

  // ====== PLAYERS PAGE ======
  renderPlayers(container) {
    const players = VanquishersData.getAll('players').filter(p => p.batchYear >= 2026 && p.batchYear <= 2029);
    const isAdmin = VanquishersData.getUser().role === 'admin';
    container.innerHTML = `
      <div class="page-toolbar">
        <div class="search-bar">
          <input type="text" id="playerSearch" placeholder="Search players..." oninput="App.filterPlayers()" />
        </div>
        ${isAdmin ? `<button class="btn btn-primary" onclick="App.showPlayerModal()">${this.Icons.plus} Add Player</button>` : ''}
      </div>
      <div class="players-grid" id="playersGrid">
        ${players.map(p => this.renderPlayerCard(p)).join('')}
      </div>
      ${players.length === 0 ? `<div class="empty-state"><div class="empty-icon">${this.Icons.players}</div><p>No players found for batches 2026-2029</p></div>` : ''}
    `;
  },

  renderPlayerCard(p) {
    const isAdmin = VanquishersData.getUser().role === 'admin';
    const currentUser = VanquishersData.getUser();
    const isSelf = currentUser.user === p.name && parseInt(currentUser.batchYear) === p.batchYear;
    const canEditPhoto = isAdmin || isSelf;

    const initials = p.name.split(' ').map(n => n[0]).join('').substring(0, 2);

    return `
      <div class="player-card" data-name="${p.name.toLowerCase()}" data-pos="${p.position.toLowerCase()}">
        <div class="player-photo-container ${canEditPhoto ? 'editable' : ''}" onclick="${canEditPhoto ? `document.getElementById('photoInput_player_${p.id}').click()` : ''}">
          ${p.photo ? `<img src="${p.photo}" class="player-photo" />` : `<div class="player-avatar">${initials}</div>`}
          ${canEditPhoto ? `
            <div class="photo-edit-overlay">${this.Icons.camera}</div>
            <input type="file" id="photoInput_player_${p.id}" style="display:none" accept="image/*" onchange="App.handlePhotoUpload('players', ${p.id}, this)" />
          ` : ''}
        </div>
        <div class="player-name">${p.name}</div>
        <div class="player-role">Batch ${p.batchYear}</div>
        ${isAdmin ? `
        <div class="card-actions">
          <button class="btn btn-secondary btn-small" onclick="App.showPlayerModal(${p.id})">${this.Icons.edit} Edit</button>
          <button class="btn btn-danger btn-small" onclick="App.deletePlayer(${p.id})">${this.Icons.trash}</button>
        </div>` : ''}
      </div>
    `;
  },

  filterPlayers() {
    const q = document.getElementById('playerSearch').value.toLowerCase();
    document.querySelectorAll('.player-card').forEach(card => {
      const name = card.dataset.name;
      const pos = card.dataset.pos;
      card.style.display = (name.includes(q) || pos.includes(q)) ? '' : 'none';
    });
  },

  showPlayerModal(id = null) {
    const player = id ? VanquishersData.getAll('players').find(p => p.id === id) : null;
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'playerModal';
    overlay.innerHTML = `
      <div class="modal">
        <div class="modal-header">
          <h3>${player ? 'Edit' : 'Add'} Player</h3>
          <button class="modal-close" onclick="document.getElementById('playerModal').remove()">${this.Icons.x}</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>Full Name</label>
            <input type="text" id="playerName" value="${player?.name || ''}" placeholder="Enter name" />
          </div>
          <div class="form-group">
            <label>Position</label>
            <select id="playerPosition">
              <option value="Attacker" ${player?.position === 'Attacker' ? 'selected' : ''}>Attacker</option>
              <option value="Defender" ${player?.position === 'Defender' ? 'selected' : ''}>Defender</option>
              <option value="All-Rounder" ${player?.position === 'All-Rounder' ? 'selected' : ''}>All-Rounder</option>
              <option value="Server" ${player?.position === 'Server' ? 'selected' : ''}>Server</option>
            </select>
          </div>
          <div class="form-group">
            <label>Batch Year</label>
            <input type="number" id="playerBatch" value="${player?.batchYear || ''}" placeholder="e.g. 2023" />
          </div>
          <div class="form-group">
            <label>Phone Number</label>
            <input type="tel" id="playerPhone" value="${player?.phone || ''}" placeholder="Enter phone number" />
          </div>
          <div class="form-group">
            <label>Matches Played</label>
            <input type="number" id="playerMatches" value="${player?.matches || 0}" placeholder="0" />
          </div>
          <div class="form-group">
            <label>Wins</label>
            <input type="number" id="playerWins" value="${player?.wins || 0}" placeholder="0" />
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" onclick="document.getElementById('playerModal').remove()">Cancel</button>
          <button class="btn btn-primary" onclick="App.savePlayer(${id || 'null'})">${player ? 'Update' : 'Add'} Player</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
  },

  savePlayer(id) {
    const name = document.getElementById('playerName').value.trim();
    const position = document.getElementById('playerPosition').value;
    const batchYear = parseInt(document.getElementById('playerBatch').value);
    const phone = document.getElementById('playerPhone').value.trim();
    const matches = parseInt(document.getElementById('playerMatches').value) || 0;
    const wins = parseInt(document.getElementById('playerWins').value) || 0;

    if (!name || !batchYear) { this.showToast('Please fill all required fields', 'error'); return; }

    if (id) {
      VanquishersData.update('players', id, { name, position, batchYear, phone, matches, wins });
      this.showToast('Player updated successfully');
    } else {
      VanquishersData.add('players', { name, position, batchYear, phone, matches, wins });
      this.showToast('Player added successfully');
    }
    document.getElementById('playerModal').remove();
    this.navigate('players');
  },

  deletePlayer(id) {
    if (confirm('Are you sure you want to remove this player?')) {
      VanquishersData.remove('players', id);
      this.showToast('Player removed');
      this.navigate('players');
    }
  },

  // ====== MATCHES PAGE ======

  renderMatches(container) {
    const isAdmin = VanquishersData.getUser().role === 'admin';
    const categories = [
      { id: 'vpl', title: 'VPL', type: 'VPL' },
      { id: 'alumni', title: 'Alumni Meet Matches', type: 'Alumni Meet' },
      { id: 'zone', title: 'Zone Matches', type: 'Zone' },
      { id: 'interzone', title: 'Interzone Matches', type: 'Interzone' },
      { id: 'cm-trophy', title: 'CM Trophy', type: 'CM Trophy' },
    ];

    container.innerHTML = `
      <div class="page-toolbar">
        <h2 style="color:#ffffff">Select Tournament</h2>
        ${isAdmin ? `<button class="btn btn-primary" onclick="App.showMatchModal()">${this.Icons.plus} New Match</button>` : ''}
      </div>

      <div class="matches-selection-grid">
        ${categories.map(cat => `
          <div class="selection-card" onclick="App.viewMatchCategory('${cat.type}')">
            <div class="selection-card-icon">${this.Icons.matches}</div>
            <div class="selection-card-title">${cat.title}</div>
            <div class="selection-card-arrow">${this.Icons.arrowRight}</div>
          </div>
        `).join('')}
      </div>
    `;
  },

  viewMatchCategory(type, status = null) {
    const matches = VanquishersData.getAll('matches').filter(m => m.type === type);
    const container = document.getElementById('pageContent');
    const isAdmin = VanquishersData.getUser().role === 'admin';

    // Categories that only show completed matches
    const completedOnly = ['Zone', 'Interzone', 'CM Trophy'].includes(type);

    // Default status: 'ongoing' for VPL/Alumni, 'completed' for others
    if (!status) {
      status = completedOnly ? 'completed' : 'ongoing';
    }

    const filteredMatches = matches.filter(m => m.status === status);

    container.innerHTML = `
      <div class="page-toolbar">
        <button class="btn btn-secondary" onclick="App.navigate('matches')">${this.Icons.arrowLeft} Back</button>
        <h2 style="margin-left:16px; color:var(--text-bright)">${type}</h2>
        ${isAdmin ? `<button class="btn btn-primary" style="margin-left:auto" onclick="App.showMatchModal(null, '${type}')">${this.Icons.plus} New Match</button>` : ''}
      </div>

      ${!completedOnly ? `
      <div class="match-status-selector">
          <button class="status-oval ${status === 'upcoming' ? 'active' : ''}" onclick="App.viewMatchCategory('${type}', 'upcoming')">${this.Icons.calendar} Upcoming</button>
          <button class="status-oval ${status === 'ongoing' ? 'active' : ''}" onclick="App.viewMatchCategory('${type}', 'ongoing')">${this.Icons.circle} Ongoing</button>
          <button class="status-oval ${status === 'completed' ? 'active' : ''}" onclick="App.viewMatchCategory('${type}', 'completed')">${this.Icons.check} Completed</button>
      </div>
      ` : ''}

      <div class="matches-grid">
        ${filteredMatches.length > 0
        ? filteredMatches.map(m => this.renderMatchCard(m)).join('')
        : `<div class="empty-state"><div class="empty-icon">${this.Icons.matches}</div><p>No ${status} matches found in ${type}</p></div>`}
      </div>
    `;
  },


  renderMatchCard(m) {
    const badgeClass = m.status === 'ongoing' ? 'live' : m.status === 'upcoming' ? 'upcoming' : 'completed';
    const badgeText = m.status === 'ongoing' ? 'LIVE' : m.status === 'upcoming' ? 'UPCOMING' : 'COMPLETED';
    const winner = m.status === 'completed' ? (m.scoreA > m.scoreB ? m.teamA : m.scoreB > m.scoreA ? m.teamB : 'Draw') : '';
    const isAdmin = VanquishersData.getUser().role === 'admin';

    return `
      <div class="match-card">
        <div class="match-header">
          <span class="match-date">${this.Icons.calendar} ${new Date(m.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })} ${m.set ? '• ' + m.set : ''}</span>
          <span class="match-badge ${badgeClass}">${badgeText}</span>
        </div>
        <div class="match-teams">
          <div class="team-block">
            <div class="team-name">${m.teamA}</div>
            <div class="team-score">${m.status !== 'upcoming' ? m.scoreA : '-'}</div>
          </div>
          <div class="vs-divider">VS</div>
          <div class="team-block">
            <div class="team-name">${m.teamB}</div>
            <div class="team-score">${m.status !== 'upcoming' ? m.scoreB : '-'}</div>
          </div>
        </div>
        <div class="match-venue">
          ${this.Icons.location} ${m.venue}
          ${winner ? `<br><span style="color: var(--accent-gold); font-weight: 600;">${this.Icons.award} Winner: ${winner}</span>` : ''}
        </div>
        ${isAdmin ? `
        <div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:8px;justify:center;">
          ${['ongoing', 'completed'].includes(m.status) ? `<button class="btn btn-primary btn-small" onclick="App.renderScoreSheet(${m.id})">${this.Icons.points} Score Sheet</button>` : ''}
          ${['ongoing', 'completed'].includes(m.status) ? `<button class="btn btn-secondary btn-small" onclick="App.showScoreModal(${m.id})">Update Status</button>` : ''}
          <button class="btn btn-secondary btn-small" onclick="App.showMatchModal(${m.id})">${this.Icons.edit} Edit</button>
          <button class="btn btn-danger btn-small" onclick="App.deleteMatch(${m.id})">${this.Icons.trash}</button>
        </div>` : `
        <div style="margin-top:12px;display:flex;flex-wrap:wrap;gap:8px;justify:center;">
          ${['ongoing', 'completed'].includes(m.status) ? `<button class="btn btn-primary btn-small" onclick="App.renderScoreSheet(${m.id})">${this.Icons.points} Score Sheet</button>` : ''}
        </div>`}
      </div>
    `;
  },


  showMatchModal(id = null, defaultType = null) {
    const match = id ? VanquishersData.getAll('matches').find(m => m.id === id) : null;
    const type = match ? match.type : (defaultType || 'VPL');
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'matchModal';
    overlay.innerHTML = `
      <div class="modal">
        <div class="modal-header">
          <h3>${match ? 'Edit' : 'Create'} Match</h3>
          <button class="modal-close" onclick="document.getElementById('matchModal').remove()">${this.Icons.x}</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>Tournament / Category</label>
            <select id="matchType" onchange="App.updateMatchModalTeams(this.value)">
              <option value="VPL" ${type === 'VPL' ? 'selected' : ''}>VPL</option>
              <option value="Alumni Meet" ${type === 'Alumni Meet' ? 'selected' : ''}>Alumni Meet</option>
              <option value="Zone" ${type === 'Zone' ? 'selected' : ''}>Zone</option>
              <option value="Interzone" ${type === 'Interzone' ? 'selected' : ''}>Interzone</option>
              <option value="CM Trophy" ${type === 'CM Trophy' ? 'selected' : ''}>CM Trophy</option>
            </select>
          </div>
          <div class="form-group" id="teamAContainer">
            <label>Team A</label>
            <input type="text" id="matchTeamA" value="${match?.teamA || 'Vanquishers'}" placeholder="Team A name" />
          </div>
          <div class="form-group" id="teamBContainer">
            <label>Team B</label>
            <input type="text" id="matchTeamB" value="${match?.teamB || ''}" placeholder="Team B name" />
          </div>
          <div class="form-group">
            <label>Status</label>
            <select id="matchStatus">
              <option value="upcoming" ${match?.status === 'upcoming' ? 'selected' : (['Zone', 'Interzone', 'CM Trophy'].includes(type) && !match ? '' : (type === 'VPL' && !match ? 'selected' : ''))}>Upcoming</option>
              <option value="ongoing" ${match?.status === 'ongoing' ? 'selected' : ''}>Ongoing</option>
              <option value="completed" ${match?.status === 'completed' ? 'selected' : (['Zone', 'Interzone', 'CM Trophy'].includes(type) && !match ? 'selected' : '')}>Completed</option>
            </select>
          </div>
          <div class="form-group">
            <label>Date</label>
            <input type="date" id="matchDate" value="${match?.date || ''}" />
          </div>
          <div class="form-group">
            <label>Venue</label>
            <input type="text" id="matchVenue" value="${match?.venue || ''}" placeholder="Match venue" />
          </div>
          <div class="form-group">
            <label>Score A</label>
            <input type="number" id="matchScoreA" value="${match?.scoreA || 0}" />
          </div>
          <div class="form-group">
            <label>Score B</label>
            <input type="number" id="matchScoreB" value="${match?.scoreB || 0}" />
          </div>
          <div class="form-group">
            <label>Set / Round</label>
            <input type="text" id="matchSet" value="${match?.set || ''}" placeholder="e.g. Set 1, Final" />
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" onclick="document.getElementById('matchModal').remove()">Cancel</button>
          <button class="btn btn-primary" onclick="App.saveMatch(${id || 'null'})">${match ? 'Update' : 'Create'} Match</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
    
    // Initialize based on type
    this.updateMatchModalTeams(type, match?.teamA, match?.teamB);
  },

  updateMatchModalTeams(type, valA = '', valB = '') {
    const auction = VanquishersData.getAuction();
    const hasAuctionTeams = auction && auction.completed && auction.teams && auction.teams.length > 0;
    
    const containerA = document.getElementById('teamAContainer');
    const containerB = document.getElementById('teamBContainer');
    if (!containerA || !containerB) return;

    if (type === 'Alumni Meet' && hasAuctionTeams) {
      const options = auction.teams.map(t => `<option value="${t.name}" ${valA === t.name || valB === t.name ? 'selected' : ''}>${t.name}</option>`).join('');
      containerA.innerHTML = `
        <label>Team A (Auction Team)</label>
        <select id="matchTeamA" class="form-input" style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid rgba(0,0,0,0.1);">
          ${options}
        </select>
      `;
      containerB.innerHTML = `
        <label>Team B (Auction Team)</label>
        <select id="matchTeamB" class="form-input" style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid rgba(0,0,0,0.1);">
          ${options}
        </select>
      `;
      // Set values specifically
      if (valA) document.getElementById('matchTeamA').value = valA;
      if (valB) document.getElementById('matchTeamB').value = valB;
    } else {
      containerA.innerHTML = `
        <label>Team A</label>
        <input type="text" id="matchTeamA" class="form-input" value="${valA || (type === 'VPL' ? 'Vanquishers' : '')}" placeholder="Team A name" style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid rgba(0,0,0,0.1);" />
      `;
      containerB.innerHTML = `
        <label>Team B</label>
        <input type="text" id="matchTeamB" class="form-input" value="${valB}" placeholder="Team B name" style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid rgba(0,0,0,0.1);" />
      `;
    }
  },

  showScoreModal(id) {
    const match = VanquishersData.getAll('matches').find(m => m.id === id);
    if (!match) return;
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'scoreModal';
    overlay.innerHTML = `
      <div class="modal">
        <div class="modal-header">
          <h3>Update Score</h3>
          <button class="modal-close" onclick="document.getElementById('scoreModal').remove()">${this.Icons.x}</button>
        </div>
        <div class="modal-body">
          <h3 style="text-align:center;margin-bottom:20px;color:var(--text-secondary)">${match.teamA} vs ${match.teamB}</h3>
          <div class="form-group-row" style="display:flex;gap:16px;">
            <div class="form-group" style="flex:1">
              <label>${match.teamA} Score</label>
              <input type="number" id="scoreA" value="${match.scoreA}" min="0" />
            </div>
            <div class="form-group" style="flex:1">
              <label>${match.teamB} Score</label>
              <input type="number" id="scoreB" value="${match.scoreB}" min="0" />
            </div>
          </div>
          <div class="form-group">
            <label>Current Set</label>
            <input type="text" id="scoreSet" value="${match.set}" placeholder="e.g. Set 2" />
          </div>
          <div class="form-group">
            <label>Mark as</label>
            <select id="scoreStatus">
              <option value="ongoing">Still Ongoing</option>
              <option value="completed">Match Completed</option>
            </select>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" onclick="document.getElementById('scoreModal').remove()">Cancel</button>
          <button class="btn btn-primary" onclick="App.updateScore(${id})">Update</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
  },

  updateScore(id) {
    const scoreA = Math.max(0, parseInt(document.getElementById('scoreA').value) || 0);
    const scoreB = Math.max(0, parseInt(document.getElementById('scoreB').value) || 0);
    const set = document.getElementById('scoreSet').value;
    const status = document.getElementById('scoreStatus').value;

    const success = VanquishersData.updateMatchScore(id, scoreA, scoreB, set, status);
    if (success) {
      document.getElementById('scoreModal').remove();
      this.renderMatches();
      this.showToast('Score updated successfully');
    }
  },

  // ====== LIVE SCORE SHEET ======
  renderScoreSheet(id) {
    const match = VanquishersData.getAll('matches').find(m => m.id === id);
    if (!match) return;
    const isAdmin = VanquishersData.getUser().role === 'admin';

    // Initialize set data if missing
    if (!match.sets || match.sets.length === 0) {
      match.sets = [
        { scoreA: 0, scoreB: 0, teamAStrike: [], teamBStrike: [], timeouts: { teamA: false, teamB: false } },
        { scoreA: 0, scoreB: 0, teamAStrike: [], teamBStrike: [], timeouts: { teamA: false, teamB: false } },
        { scoreA: 0, scoreB: 0, teamAStrike: [], teamBStrike: [], timeouts: { teamA: false, teamB: false } }
      ];
      match.currentSet = 1;
      VanquishersData.update('matches', id, { sets: match.sets, currentSet: match.currentSet });
    }

    const setIdx = (match.currentSet || 1) - 1;
    const set = match.sets[setIdx];
    const container = document.getElementById('pageContent');
    document.getElementById('pageTitle').innerHTML = `${this.Icons.points} ${isAdmin ? 'Live Score' : 'Score Sheet'}: ${match.teamA} vs ${match.teamB}`;

    container.innerHTML = `
      <div class="score-sheet-header">
        <button class="btn btn-secondary" onclick="App.navigate('matches')">← Back to Matches</button>
        <div class="set-selector">
          <button class="tab-btn ${match.currentSet === 1 ? 'active' : ''}" onclick="App.switchSet(${id}, 1)">Set 1</button>
          <button class="tab-btn ${match.currentSet === 2 ? 'active' : ''}" onclick="App.switchSet(${id}, 2)">Set 2</button>
          <button class="tab-btn ${match.currentSet === 3 ? 'active' : ''}" onclick="App.switchSet(${id}, 3)">Set 3</button>
        </div>
      </div>

      <div class="score-board">
        <div class="team-score-card">
          <div class="team-name">${match.teamA}</div>
          <div class="score-controls-wrapper" style="display:flex; align-items:center; justify-content:center; gap:16px;">
            ${isAdmin ? `<button class="btn btn-secondary btn-icon" onclick="App.adjustScore(${id}, 'teamA', -1)">${this.Icons.minus || '-'}</button>` : ''}
            <div class="big-score" id="scoreA_Display">${set.scoreA}</div>
            ${isAdmin ? `<button class="btn btn-secondary btn-icon" onclick="App.adjustScore(${id}, 'teamA', 1)">${this.Icons.plus || '+'}</button>` : ''}
          </div>
          ${isAdmin ? `<button class="btn btn-warning btn-small" id="timeoutA_Btn" onclick="App.startTimeout(${id}, 'teamA')" ${set.timeouts.teamA ? 'disabled' : ''}>
            ${set.timeouts.teamA ? 'Timeout Used' : this.Icons.timer + ' Timeout'}
          </button>` : ''}
        </div>
        <div class="vs-circle">VS</div>
        <div class="team-score-card">
          <div class="team-name">${match.teamB}</div>
          <div class="score-controls-wrapper" style="display:flex; align-items:center; justify-content:center; gap:16px;">
            ${isAdmin ? `<button class="btn btn-secondary btn-icon" onclick="App.adjustScore(${id}, 'teamB', -1)">${this.Icons.minus || '-'}</button>` : ''}
            <div class="big-score" id="scoreB_Display">${set.scoreB}</div>
            ${isAdmin ? `<button class="btn btn-secondary btn-icon" onclick="App.adjustScore(${id}, 'teamB', 1)">${this.Icons.plus || '+'}</button>` : ''}
          </div>
          ${isAdmin ? `<button class="btn btn-warning btn-small" id="timeoutB_Btn" onclick="App.startTimeout(${id}, 'teamB')" ${set.timeouts.teamB ? 'disabled' : ''}>
            ${set.timeouts.teamB ? 'Timeout Used' : this.Icons.timer + ' Timeout'}
          </button>` : ''}
        </div>
      </div>

      ${isAdmin ? `
      <div class="admin-match-controls" style="display:flex; justify-content:center; gap:16px; margin-bottom: 24px;">
        <button class="btn btn-primary" onclick="App.finishSet(${id})" ${set.scoreA < 30 && set.scoreB < 30 ? 'disabled' : ''}>${this.Icons.check} Set Won</button>
        <button class="btn btn-danger" onclick="App.finishMatch(${id})">${this.Icons.award} Match Won</button>
      </div>` : ''}

      ${isAdmin ? `<div class="timeout-overlay" id="timeoutOverlay">
        <div class="timeout-content">
          <h2 id="timeoutTitle">TIMEOUT</h2>
          <div class="timeout-timer" id="timeoutTimer">03:00</div>
          <p>Please change sides if applicable.</p>
          <button class="btn btn-primary" onclick="App.stopTimeout()">End Timeout</button>
        </div>
      </div>` : ''}

      <div class="score-grids-container">
        <div class="team-grid-wrapper">
          <h3>${match.teamA} Points</h3>
          <div class="score-grid team-a-grid">
            ${this.generatePointsGrid(id, 'teamA', set.teamAStrike, !isAdmin)}
          </div>
        </div>
        <div class="team-grid-wrapper">
          <h3>${match.teamB} Points</h3>
          <div class="score-grid team-b-grid">
            ${this.generatePointsGrid(id, 'teamB', set.teamBStrike, !isAdmin)}
          </div>
        </div>
      </div>

      <div class="side-change-alert" id="sideChangeAlert">
        SIDE CHANGE! (Points: <span id="sideChangePoints"></span>)
      </div>

      <div class="side-change-alert" id="setWinnerAlert" style="background: var(--accent-magenta); color: white; box-shadow: 0 0 50px rgba(124, 58, 237, 0.5);">
        <span id="setWinnerName"></span> WON THE SET!
      </div>
    `;
    this.checkSideChange(set.scoreA, set.scoreB);
  },

  generatePointsGrid(matchId, team, struckArr, readOnly = false) {
    let html = '';
    for (let i = 1; i <= 40; i++) {
      const isStruck = struckArr.includes(i);
      if (readOnly) {
        html += `<div class="point-num ${isStruck ? 'struck' : ''}" style="${!isStruck ? 'cursor:default;' : ''}">${i}</div>`;
      } else {
        html += `<div class="point-num ${isStruck ? 'struck' : ''}" onclick="${!isStruck ? `App.awardPoint(${matchId}, '${team}', ${i})` : ''}">${i}</div>`;
      }
    }
    return html;
  },

  awardPoint(matchId, team, point) {
    const match = VanquishersData.getAll('matches').find(m => m.id === matchId);
    const setIdx = (match.currentSet || 1) - 1;
    const set = match.sets[setIdx];

    if (team === 'teamA') {
      const idx = set.teamAStrike.indexOf(point);
      if (idx === -1) {
        set.teamAStrike.push(point);
      } else {
        set.teamAStrike.splice(idx, 1);
      }
      set.scoreA = set.teamAStrike.length > 0 ? Math.max(0, ...set.teamAStrike) : 0;
    } else {
      const idx = set.teamBStrike.indexOf(point);
      if (idx === -1) {
        set.teamBStrike.push(point);
      } else {
        set.teamBStrike.splice(idx, 1);
      }
      set.scoreB = set.teamBStrike.length > 0 ? Math.max(0, ...set.teamBStrike) : 0;
    }

    VanquishersData.update('matches', matchId, { sets: match.sets });
    this.renderScoreSheet(matchId);
    this.checkSideChange(set.scoreA, set.scoreB);
  },

  adjustScore(matchId, team, delta) {
    const match = VanquishersData.getAll('matches').find(m => m.id === matchId);
    const setIdx = (match.currentSet || 1) - 1;
    const set = match.sets[setIdx];

    if (team === 'teamA') {
      const oldScore = set.scoreA;
      set.scoreA = Math.max(0, set.scoreA + delta);
      // Sync with grid: if increased, strike new point; if decreased, remove point
      if (delta > 0 && !set.teamAStrike.includes(set.scoreA)) {
        set.teamAStrike.push(set.scoreA);
      } else if (delta < 0) {
        set.teamAStrike = set.teamAStrike.filter(p => p <= set.scoreA);
      }
    } else {
      const oldScore = set.scoreB;
      set.scoreB = Math.max(0, set.scoreB + delta);
      // Sync with grid
      if (delta > 0 && !set.teamBStrike.includes(set.scoreB)) {
        set.teamBStrike.push(set.scoreB);
      } else if (delta < 0) {
        set.teamBStrike = set.teamBStrike.filter(p => p <= set.scoreB);
      }
    }

    VanquishersData.update('matches', matchId, { sets: match.sets });
    this.renderScoreSheet(matchId);
    this.checkSideChange(set.scoreA, set.scoreB);
  },

  finishSet(matchId) {
    const match = VanquishersData.getAll('matches').find(m => m.id === matchId);
    if (!match) return;

    // Create selection modal
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'setWinnerModal';
    overlay.innerHTML = `
      <div class="modal-content" style="max-width: 400px; text-align: center;">
        <div class="modal-header">
          <h3>Which team won this set?</h3>
        </div>
        <div class="modal-body" style="display:flex; flex-direction: column; gap: 12px; margin: 20px 0;">
          <button class="btn btn-primary" onclick="App.awardSetResult(${matchId}, 'teamA')">${match.teamA} Won</button>
          <button class="btn btn-primary" onclick="App.awardSetResult(${matchId}, 'teamB')">${match.teamB} Won</button>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" onclick="document.getElementById('setWinnerModal').remove()">Cancel</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
  },

  awardSetResult(matchId, winningTeam) {
    const match = VanquishersData.getAll('matches').find(m => m.id === matchId);
    if (!match) return;

    const winnerName = winningTeam === 'teamA' ? match.teamA : match.teamB;
    const currentSetNum = match.currentSet || 1;
    const nextSet = currentSetNum + 1;

    document.getElementById('setWinnerModal').remove();

    if (nextSet > 3) {
      this.finishMatch(matchId);
    } else {
      VanquishersData.update('matches', matchId, { currentSet: nextSet });
      this.showSetWinnerAlert(winnerName);
      setTimeout(() => {
        this.renderScoreSheet(matchId);
      }, 3000);
    }
  },

  showSetWinnerAlert(winnerName) {
    const alert = document.getElementById('setWinnerAlert');
    if (!alert) return;
    document.getElementById('setWinnerName').textContent = winnerName;
    alert.classList.add('show');
    setTimeout(() => alert.classList.remove('show'), 5000);
  },

  finishMatch(matchId) {
    const match = VanquishersData.getAll('matches').find(m => m.id === matchId);
    if (!match) return;

    if (confirm('Mark this match as completed?')) {
      // Calculate final score based on sets won
      let setsA = 0;
      let setsB = 0;
      match.sets.forEach(s => {
        if (s.scoreA > s.scoreB) setsA++;
        else if (s.scoreB > s.scoreA) setsB++;
      });

      VanquishersData.update('matches', matchId, {
        status: 'completed',
        scoreA: setsA,
        scoreB: setsB
      });
      this.showToast('Match completed successfully');
      this.navigate('matches');
    }
  },

  checkSideChange(scoreA, scoreB) {
    const maxScore = Math.max(scoreA, scoreB);
    const sideChangePoints = [9, 18, 27];
    const alert = document.getElementById('sideChangeAlert');
    if (!alert) return;

    if (sideChangePoints.includes(maxScore)) {
      document.getElementById('sideChangePoints').textContent = maxScore;
      alert.classList.add('show');
      setTimeout(() => alert.classList.remove('show'), 5000);
    }
  },

  switchSet(matchId, setNum) {
    VanquishersData.update('matches', matchId, { currentSet: setNum });
    this.renderScoreSheet(matchId);
  },

  timeoutInterval: null,
  startTimeout(id, team) {
    const match = VanquishersData.getAll('matches').find(m => m.id === id);
    const setIdx = (match.currentSet || 1) - 1;
    match.sets[setIdx].timeouts[team] = true;
    VanquishersData.update('matches', id, { sets: match.sets });

    const overlay = document.getElementById('timeoutOverlay');
    const timerDisplay = document.getElementById('timeoutTimer');
    const title = document.getElementById('timeoutTitle');
    const teamName = team === 'teamA' ? match.teamA : match.teamB;

    title.textContent = `TIMEOUT: ${teamName}`;
    overlay.classList.add('show');

    let timeLeft = 180;
    timerDisplay.textContent = '03:00';

    if (this.timeoutInterval) clearInterval(this.timeoutInterval);
    this.timeoutInterval = setInterval(() => {
      timeLeft--;
      const mins = Math.floor(timeLeft / 60);
      const secs = timeLeft % 60;
      timerDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
      if (timeLeft <= 0) this.stopTimeout();
    }, 1000);
  },

  stopTimeout() {
    clearInterval(this.timeoutInterval);
    document.getElementById('timeoutOverlay').classList.remove('show');
    const match = VanquishersData.getAll('matches').find(m => m.status === 'ongoing');
    if (match) this.renderScoreSheet(match.id);
  },

  saveMatch(id) {
    const teamA = document.getElementById('matchTeamA').value.trim();
    const teamB = document.getElementById('matchTeamB').value.trim();
    const date = document.getElementById('matchDate').value;
    const venue = document.getElementById('matchVenue').value.trim();
    const status = document.getElementById('matchStatus').value;
    const scoreA = Math.max(0, parseInt(document.getElementById('matchScoreA').value) || 0);
    const scoreB = Math.max(0, parseInt(document.getElementById('matchScoreB').value) || 0);
    const set = document.getElementById('matchSet').value.trim();
    const type = document.getElementById('matchType').value;

    if (!teamA || !teamB || !date) { this.showToast('Please fill all required fields', 'error'); return; }

    if (id) {
      VanquishersData.update('matches', id, { teamA, teamB, date, venue, status, scoreA, scoreB, set, type });
      this.showToast('Match updated');
    } else {
      VanquishersData.add('matches', { teamA, teamB, date, venue, status, scoreA, scoreB, set, type });
      this.showToast('Match created');
    }
    document.getElementById('matchModal').remove();
    this.navigate('matches');
  },

  deleteMatch(id) {
    if (confirm('Delete this match?')) {
      VanquishersData.remove('matches', id);
      this.showToast('Match deleted');
      this.navigate('matches');
    }
  },

  // ====== POINTS TABLE PAGE ======
  renderPoints(container, type = null) {
    container.style.background = '#000000';
    container.style.color = '#ffffff';
    container.style.minHeight = 'calc(100vh - var(--header-height))';
    container.style.padding = '24px';
    const isAdmin = VanquishersData.getUser().role === 'admin';
    const categories = [
      { id: 'vpl', title: 'VPL', type: 'VPL' },
      { id: 'alumni', title: 'Alumni Meet Matches', type: 'Alumni Meet' },
      { id: 'zone', title: 'Zone Matches', type: 'Zone' },
      { id: 'interzone', title: 'Interzone Matches', type: 'Interzone' },
      { id: 'cm', title: 'CM Trophy', type: 'CM Trophy' }
    ];

    if (!type) {
      container.innerHTML = `
        <div class="page-toolbar">
          <h2 style="color:#ffffff">Select Tournament Standings</h2>
        </div>
        <div class="matches-selection-grid">
          ${categories.map(cat => `
            <div class="selection-card" style="background: #ffffff; color: #000000; border-color: rgba(0,0,0,0.1)" onclick="App.renderPoints(document.getElementById('pageContent'), '${cat.type}')">
              <div class="selection-card-icon" style="background: rgba(0,0,0,0.05); color: #000000;">${this.Icons.points}</div>
              <div class="selection-card-title" style="color:#000000">${cat.title}</div>
              <div class="selection-card-arrow" style="color: rgba(0,0,0,0.4)">${this.Icons.arrowRight}</div>
            </div>
          `).join('')}
        </div>
      `;
      return;
    }

    const allPoints = VanquishersData.getAll('points');
    const points = allPoints.filter(p => p.type === type).sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      return parseFloat(b.nrr) - parseFloat(a.nrr);
    });

    container.innerHTML = `
      <div class="page-toolbar">
        <button class="btn btn-secondary" onclick="App.navigate('points')">${this.Icons.arrowLeft} Back</button>
        <h2 style="margin-left:16px; font-size:20px; color:#ffffff">${type} Standings</h2>
        ${isAdmin ? `<button class="btn btn-primary" style="margin-left:auto" onclick="App.showPointsModal(null, '${type}')">+ Add Team</button>` : ''}
      </div>
      <div class="table-responsive">
        <table class="points-table">
          <thead>
            <tr>
              <th>Pos</th>
              <th>Team</th>
              <th>P</th>
              <th>W</th>
              <th>L</th>
              <th>D</th>
              <th>Pts</th>
              <th>NRR</th>
              ${isAdmin ? '<th>Actions</th>' : ''}
            </tr>
          </thead>
          <tbody>
            ${points.map((t, i) => `
              <tr style="--row-color: ${t.color}">
                <td><div class="rank-badge">${i + 1}</div></td>
                <td>
                  <div class="team-identity">
                    <div class="team-dot" style="background:${t.color}"></div>
                    <span>${t.team}</span>
                  </div>
                </td>
                <td>${t.played}</td>
                <td class="text-green">${t.won}</td>
                <td class="text-red">${t.lost}</td>
                <td>${t.draw}</td>
                <td class="text-bright"><strong>${t.points}</strong></td>
                <td class="text-cyan">${t.nrr}</td>
                ${isAdmin ? `
                <td>
                  <div class="action-btns">
                    <button class="btn-icon" onclick="App.showPointsModal(${t.id}, '${type}')" title="Edit">${this.Icons.edit}</button>
                    <button class="btn-icon danger" onclick="App.deletePointsTeam(${t.id}, '${type}')" title="Delete">${this.Icons.trash}</button>
                  </div>
                </td>
                ` : ''}
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      ${points.length === 0 ? `<div class="empty-state"><div class="empty-icon">${this.Icons.points}</div><p>No teams in the ${type} standings</p></div>` : ''}
    `;
  },

  showPointsModal(id = null, currentType = null) {
    const team = id ? VanquishersData.getAll('points').find(t => t.id === id) : null;
    const colors = ['#00e5ff', '#e040fb', '#ffd740', '#69f0ae', '#ff9100', '#ff5252', '#ba68c8', '#78909c', '#40c4ff', '#ff6e40'];
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'pointsModal';
    overlay.innerHTML = `
      <div class="modal">
        <div class="modal-header">
          <h3>${team ? 'Edit' : 'Add'} Team</h3>
          <button class="modal-close" onclick="document.getElementById('pointsModal').remove()">${this.Icons.x}</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>Team Name</label>
            <input type="text" id="ptTeam" value="${team?.team || ''}" placeholder="Team name" />
          </div>
          <div class="form-group-row" style="display:flex;gap:12px;">
            <div class="form-group" style="flex:1">
              <label>Played</label>
              <input type="number" id="ptPlayed" value="${team?.played || 0}" min="0" />
            </div>
            <div class="form-group" style="flex:1">
              <label>Won</label>
              <input type="number" id="ptWon" value="${team?.won || 0}" min="0" />
            </div>
            <div class="form-group" style="flex:1">
              <label>Lost</label>
              <input type="number" id="ptLost" value="${team?.lost || 0}" min="0" />
            </div>
            <div class="form-group" style="flex:1">
              <label>Draw</label>
              <input type="number" id="ptDraw" value="${team?.draw || 0}" min="0" />
            </div>
          </div>
          <div class="form-group-row" style="display:flex;gap:12px;">
            <div class="form-group" style="flex:1">
              <label>Points</label>
              <input type="number" id="ptPoints" value="${team?.points || 0}" step="1" />
            </div>
            <div class="form-group" style="flex:1">
              <label>NRR</label>
              <input type="text" id="ptNrr" value="${team?.nrr || '0.00'}" placeholder="+0.00" />
            </div>
          </div>
          <div class="form-group">
            <label>Tournament / Category</label>
            <select id="ptType">
              <option value="VPL" ${(team?.type || currentType) === 'VPL' ? 'selected' : ''}>VPL</option>
              <option value="Alumni Meet" ${(team?.type || currentType) === 'Alumni Meet' ? 'selected' : ''}>Alumni Meet</option>
              <option value="Zone" ${(team?.type || currentType) === 'Zone' ? 'selected' : ''}>Zone</option>
              <option value="Interzone" ${(team?.type || currentType) === 'Interzone' ? 'selected' : ''}>Interzone</option>
              <option value="CM Trophy" ${(team?.type || currentType) === 'CM Trophy' ? 'selected' : ''}>CM Trophy</option>
            </select>
          </div>
          <div class="form-group">
            <label>Team Color</label>
            <select id="ptColor">
              ${colors.map(c => `<option value="${c}" ${team?.color === c ? 'selected' : ''} style="background:${c};color:#000">${c}</option>`).join('')}
            </select>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" onclick="document.getElementById('pointsModal').remove()">Cancel</button>
          <button class="btn btn-primary" onclick="App.savePointsTeam(${id || 'null'}, '${currentType || ''}')">${team ? 'Update' : 'Add'}</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
  },

  savePointsTeam(id, redirectType = null) {
    const team = document.getElementById('ptTeam').value.trim();
    const played = Math.max(0, parseInt(document.getElementById('ptPlayed').value) || 0);
    const won = Math.max(0, parseInt(document.getElementById('ptWon').value) || 0);
    const lost = Math.max(0, parseInt(document.getElementById('ptLost').value) || 0);
    const draw = Math.max(0, parseInt(document.getElementById('ptDraw').value) || 0);
    const points = Math.max(0, parseInt(document.getElementById('ptPoints').value) || 0);
    const nrr = document.getElementById('ptNrr').value.trim() || '0.00';
    const color = document.getElementById('ptColor').value;
    const type = document.getElementById('ptType').value;

    if (!team) { this.showToast('Please enter team name', 'error'); return; }

    if (id) {
      VanquishersData.update('points', id, { team, played, won, lost, draw, points, nrr, color, type });
      this.showToast('Team updated');
    } else {
      VanquishersData.add('points', { team, played, won, lost, draw, points, nrr, color, type });
      this.showToast('Team added');
    }
    document.getElementById('pointsModal').remove();
    this.renderPoints(document.getElementById('pageContent'), type);
  },

  deletePointsTeam(id, currentType) {
    if (confirm('Remove this team from standings?')) {
      VanquishersData.remove('points', id);
      this.showToast('Team removed');
      this.renderPoints(document.getElementById('pageContent'), currentType);
    }
  },

  // ====== VPL AUCTION ======
  renderAuctionPage(container) {
    const auction = VanquishersData.getAuction();
    if (auction && auction.completed) {
      this.renderAuctionCompleted(container);
    } else if (auction && auction.started) {
      this.renderAuction(container);
    } else {
      this.renderAuctionSetup(container);
    }
  },

  renderAuctionSetup(container) {
    const isAdmin = VanquishersData.getUser().role === 'admin';
    const existingAuction = VanquishersData.getAuction();
    const hasExisting = existingAuction && existingAuction.teams && existingAuction.teams.length > 0;

    container.innerHTML = `
      <div class="auction-setup-page">
        <div style="background: #ffffff; padding: 30px; border-radius: 16px; margin-bottom: 30px; border: 1px solid rgba(0,0,0,0.08); text-align: center;">
          <h1 style="font-size: 32px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; margin: 15px 0 10px;">
            <span style="color: #1a1a2e;">VPL</span> <span style="color: var(--primary-color);">AUCTION</span>
          </h1>
        </div>
        ${isAdmin ? `
        ${hasExisting ? `
        <div class="auction-setup-card" style="background:#e8f5e9; border:1px solid #a5d6a7; color:#1a1a2e; margin-bottom:20px;">
          <h2 style="color:#2e7d32;">Auction In Progress</h2>
          <p style="color:#444; margin:10px 0 16px;">You have an ongoing auction with <strong>${existingAuction.teams.length} teams</strong> and <strong>${existingAuction.pool?.length || 0} unassigned players</strong>. Resume where you left off.</p>
          <button class="btn btn-primary" onclick="App.auctionResume()" style="background:#2e7d32; border-color:#2e7d32;">
            Resume Auction
          </button>
        </div>` : ''}
        <div class="auction-setup-card" style="background:#ffffff; color:#1a1a2e;">
          <h2 style="color:#1a1a2e;">Team Setup</h2>
          <div class="form-group">
            <label style="color:#444;">Number of Teams (2-20)</label>
            <input type="number" id="auctionTeamCount" min="2" max="20" value="3" oninput="App.generateTeamInputs()" />
          </div>
          <div id="teamInputsContainer"></div>
          <button class="btn btn-primary auction-start-btn" onclick="App.startManualAssignment()" style="margin-top:20px;">
            Start Auction
          </button>
        </div>` : `
        <div class="auction-setup-card" style="background:#ffffff; color:#1a1a2e;">
            <p style="color:#444;">No teams generated yet. Ask the admin to create them!</p>
          </div>
        </div>`}
      </div>
    `;

    if (isAdmin) this.generateTeamInputs();
  },

  auctionResume() {
    const auction = VanquishersData.getAuction();
    if (auction) {
      auction.started = true;
      VanquishersData.saveAuction(auction);
    }
    this.navigate('auction');
  },

  generateTeamInputs() {
    const count = parseInt(document.getElementById('auctionTeamCount').value) || 3;
    const clamped = Math.max(2, Math.min(20, count));
    const container = document.getElementById('teamInputsContainer');
    if (!container) return;
    const teamColors = ['#00e5ff', '#e040fb', '#ffd740', '#69f0ae', '#ff9100', '#ff5252', '#ba68c8', '#40c4ff', '#ff6e40', '#b388ff', '#84ffff', '#f4ff81', '#ff80ab', '#a7ffeb', '#ffd180', '#ea80fc', '#80d8ff', '#ccff90', '#ff9e80', '#b9f6ca'];
    let html = '<div class="team-inputs-grid">';
    for (let i = 0; i < clamped; i++) {
      html += `
        <div class="team-input-card" style="border-color:${teamColors[i]}">
          <div class="team-input-dot" style="background:${teamColors[i]}">${i + 1}</div>
          <input type="text" id="teamName_${i}" placeholder="Team ${i + 1} name" class="team-name-input" />
        </div>
      `;
    }
    html += '</div>';
    container.innerHTML = html;
  },

  startManualAssignment() {
    const count = Math.max(2, Math.min(20, parseInt(document.getElementById('auctionTeamCount').value) || 3));
    const teamColors = ['#00e5ff', '#e040fb', '#ffd740', '#69f0ae', '#ff9100', '#ff5252', '#ba68c8', '#40c4ff', '#ff6e40', '#b388ff', '#84ffff', '#f4ff81', '#ff80ab', '#a7ffeb', '#ffd180', '#ea80fc', '#80d8ff', '#ccff90', '#ff9e80', '#b9f6ca'];
    const teams = [];
    
    for (let i = 0; i < count; i++) {
      const name = document.getElementById(`teamName_${i}`)?.value.trim() || `Team ${i + 1}`;
      teams.push({ id: Math.random().toString(36).substr(2, 9), name, players: [], color: teamColors[i], capacity: 20 });
    }

    const alumni = [...VanquishersData.getAll('alumni')].map(p => ({ ...p, status: 'pending' }));
    if (alumni.length === 0) {
      this.showToast('No players found in the Alumni List!', 'error');
      return;
    }

    const auctionState = {
      started: true,
      completed: false,
      teams: teams,
      pool: alumni
    };
    
    VanquishersData.saveAuction(auctionState);
    this.showToast('Manual Assignment Board Started!');
    this.navigate('auction');
  },

  assignPlayerToTeam(playerId, teamName) {
    if (!teamName) return;
    const auction = VanquishersData.getAuction();
    if (!auction) return;
    
    // Find player in pool
    // Use == to handle potential type mismatch (number vs string)
    const playerIndex = auction.pool.findIndex(p => String(p.id) === String(playerId));
    if (playerIndex === -1) {
      console.error('Player not found in pool', playerId);
      return;
    }
    
    // Find target team
    const team = auction.teams.find(t => t.name === teamName);
    if (!team) return;

    const player = auction.pool[playerIndex];
    if (player.status !== 'pending') {
      this.showToast('Player already assigned!', 'error');
      return;
    }

    player.status = 'sold';
    player.soldTo = teamName;
    team.players.push({ ...player });
    
    VanquishersData.saveAuction(auction);
    this.showToast(`Assigned ${player.name} to ${team.name}`);
    this.navigate('auction');
  },

  // ====== Pool Management ======
  showPoolPlayerModal(index = null) {
    const pool = JSON.parse(localStorage.getItem('vanq_auction_pool') || '[]');
    const player = index !== null ? pool[index] : null;
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'poolPlayerModal';
    overlay.innerHTML = `
      <div class="modal">
        <div class="modal-header">
          <h3>${player ? this.Icons.edit : this.Icons.plus} ${player ? 'Edit' : 'Add'} Pool Player</h3>
          <button class="modal-close" onclick="document.getElementById('poolPlayerModal').remove()">${this.Icons.x}</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>Player Name</label>
            <input type="text" id="poolPlayerName" value="${player?.name || ''}" placeholder="Enter player name" />
          </div>
          <div class="form-group">
            <label>Position</label>
            <select id="poolPlayerPosition">
              <option value="Front Player" ${player?.position === 'Front Player' ? 'selected' : ''}>Front Player</option>
              <option value="Back Player" ${player?.position === 'Back Player' ? 'selected' : ''}>Back Player</option>
              <option value="Center Player" ${player?.position === 'Center Player' ? 'selected' : ''}>Center Player</option>
            </select>
          </div>
          <div class="form-group">
            <label>Batch Year</label>
            <input type="number" id="poolPlayerBatch" value="${player?.batchYear || 2024}" placeholder="e.g. 2024" />
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" onclick="document.getElementById('poolPlayerModal').remove()">Cancel</button>
          <button class="btn btn-primary" onclick="App.savePoolPlayer(${index !== null ? index : -1})">${player ? 'Update' : 'Add'} Player</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
  },

  savePoolPlayer(index) {
    const name = document.getElementById('poolPlayerName').value.trim();
    const position = document.getElementById('poolPlayerPosition').value;
    const batchYear = parseInt(document.getElementById('poolPlayerBatch').value) || 2024;
    if (!name) { this.showToast('Please enter a player name', 'error'); return; }

    const pool = JSON.parse(localStorage.getItem('vanq_auction_pool') || '[]');
    if (index >= 0 && index < pool.length) {
      // Edit existing
      pool[index].name = name;
      pool[index].position = position;
      pool[index].batchYear = batchYear;
      this.showToast('Player updated!');
    } else {
      // Add new
      pool.push({
        id: `c_${Date.now()}`,
        name,
        position,
        batchYear,
        source: 'custom',
        status: 'pending'
      });
      this.showToast('Player added to pool!');
    }
    localStorage.setItem('vanq_auction_pool', JSON.stringify(pool));
    document.getElementById('poolPlayerModal').remove();
    this.navigate('auction');
  },

  removePoolPlayer(index) {
    const pool = JSON.parse(localStorage.getItem('vanq_auction_pool') || '[]');
    if (index < 0 || index >= pool.length) return;
    if (confirm(`Remove ${pool[index].name} from the pool?`)) {
      pool.splice(index, 1);
      localStorage.setItem('vanq_auction_pool', JSON.stringify(pool));
      this.showToast('Player removed from pool');
      this.navigate('auction');
    }
  },

  resetAuctionPool() {
    if (confirm('Reset pool to default players + alumni list?')) {
      const defaultPool = VanquishersData.getAuctionPool();
      localStorage.setItem('vanq_auction_pool', JSON.stringify(defaultPool));
      this.showToast('Pool reset to defaults!');
      this.navigate('auction');
    }
  },

  renderAuction(container) {
    const auction = VanquishersData.getAuction();
    if (!auction || !auction.teams) return;
    const isAdmin = VanquishersData.getUser().role === 'admin';

    const allTeamsReady = auction.teams.every(t => t.players.length >= 7);
    const endAuctionBtnStyle = allTeamsReady 
      ? 'background: var(--danger-color); color: #fff; border: 1px solid var(--danger-color); cursor: pointer;' 
      : 'background: rgba(255, 82, 82, 0.05); color: rgba(255, 82, 82, 0.4); border: 1px solid rgba(255, 82, 82, 0.2); cursor: not-allowed; opacity: 0.7;';

    container.innerHTML = `
      <div class="auction-board">
        <div class="auction-top-bar" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px;">
          <div style="display:flex; align-items:center; gap:15px;">
            ${isAdmin ? `<button class="btn btn-secondary btn-small" onclick="App.auctionBack()" style="display:flex;align-items:center;gap:6px;">${this.Icons.arrowLeft} Back</button>` : ''}
            <div class="auction-live-badge">${this.Icons.circle} LIVE AUCTION</div>
            ${isAdmin ? `<button class="btn btn-danger btn-small" style="${endAuctionBtnStyle}" onclick="App.auctionReset()" title="${allTeamsReady ? 'End Auction' : 'All teams must have at least 7 players to end'}">${this.Icons.logout} End Auction</button>` : ''}
          </div>
          <div class="auction-stats-mini" style="display:flex; align-items:center; gap:8px; color:var(--text-secondary);">
            ${this.Icons.package} <span>${auction.pool?.filter(p => p.status === 'pending').length || 0} Unassigned</span>
          </div>
        </div>

        <div class="auction-teams-panel">
          <div class="auction-teams-list" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:20px;">
            ${auction.teams.map(t => `
              <div class="auction-team-card" style="--team-color:${t.color || '#00e5ff'}">
                <div class="atc-header" style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 12px; margin-bottom: 12px; display:flex; gap:12px; align-items:center;">
                  <div class="atc-dot" style="background:${t.color || '#00e5ff'}">${t.name.charAt(0).toUpperCase()}</div>
                  <div class="atc-info">
                    <div class="atc-name" style="font-size: 18px;">${t.name}</div>
                    <div class="atc-count" style="color: var(--text-muted); font-size: 12px;">${t.players.length} / ${t.capacity} players</div>
                  </div>
                </div>
                <div class="atc-squad" style="max-height: 250px; overflow-y: auto; padding-right:8px;">
                  ${t.players.length > 0 ? t.players.map(p => `
                    <div class="atc-player-chip" style="display:flex; justify-content:space-between; padding: 10px; background: rgba(255,255,255,0.05); margin-bottom: 8px; border-radius: 6px;">
                      <span style="font-weight:600;">${p.name} <span style="opacity:0.6;font-size:12px;font-weight:400;margin-left:8px;">${p.position || ''}</span></span>
                      <span style="color:var(--text-muted); font-size:12px; white-space:nowrap;">Batch ${p.batchYear}</span>
                    </div>
                  `).join('') : '<div class="atc-empty">No players assigned</div>'}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        ${auction.pool && auction.pool.length > 0 ? `
        <div class="auction-pool-panel" style="margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
          <h3 style="color:#4fc3f7;">Alumni Pool (${auction.pool.filter(p => p.status === 'pending').length} Unassigned)</h3>
          <div class="auction-pool-list" style="display:grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 15px; margin-top:20px;">
            ${auction.pool.map(p => {
              const isAssigned = p.status === 'sold';
              return `
              <div class="unassigned-player-card" style="background: #ffffff; border: 1px solid rgba(0,0,0,0.08); padding: 12px 16px; border-radius: 8px; display:flex; justify-content:space-between; align-items:center; ${isAssigned ? 'opacity: 0.5; filter: blur(0.5px); pointer-events: none;' : ''}">
                <div class="player-info">
                  <div style="font-size:15px; font-weight:600; margin-bottom:4px; color:#1a1a2e;">${p.name} ${isAssigned ? `<span style="color:var(--primary-color); font-size:10px; margin-left:5px;">[${p.soldTo}]</span>` : ''}</div>
                  <div style="font-size:12px; color:#666;">${p.position || 'Player'} • Batch ${p.batchYear}</div>
                </div>
                ${isAdmin && !isAssigned ? `
                <div class="assign-action">
                  <select class="form-input" style="padding: 6px; font-size: 13px; min-width: 120px;" onchange="App.assignPlayerToTeam('${p.id}', this.value)">
                    <option value="">Assign to...</option>
                    ${auction.teams.filter(t => t.players.length < t.capacity).map(t => `<option value="${t.name}">${t.name}</option>`).join('')}
                  </select>
                </div>
                ` : isAssigned ? `
                <div style="font-size: 11px; color: var(--primary-color); font-weight: bold;">ASSIGNED</div>
                ` : ''}
              </div>`;
            }).join('')}
          </div>
        </div>
        ` : `
        <div class="auction-completed" style="margin-top:40px;">
          <div class="auction-completed-icon">${this.Icons.check}</div>
          <h2>Assignment Complete!</h2>
          <p>All players have been assigned to teams.</p>
        </div>
        `}
      </div>
    `;
  },

  auctionBack() {
    // Pause the auction by setting started=false but keeping all team/pool data intact
    const auction = VanquishersData.getAuction();
    if (auction) {
      auction.started = false;
      VanquishersData.saveAuction(auction);
    }
    this.navigate('auction');
  },

  auctionBid(increment) {
    const auction = VanquishersData.getAuction();
    if (!auction || auction.completed) return;
    const teamSelect = document.getElementById('auctionSellTeam');
    const teamName = teamSelect ? teamSelect.value : '';
    if (!teamName) {
      this.showToast('Select a team to bid for', 'error');
      return;
    }
    const team = auction.teams.find(t => t.name === teamName);
    if (!team) return;
    const newBid = auction.currentBid + increment;
    if (newBid > team.purse) {
      this.showToast(`${teamName} doesn't have enough purse!`, 'error');
      return;
    }
    auction.currentBid = newBid;
    auction.currentBidTeam = teamName;
    VanquishersData.saveAuction(auction);

    // Animate bid
    const bidEl = document.getElementById('bidAmount');
    const bidTeamEl = document.getElementById('bidTeamLabel');
    if (bidEl) {
      bidEl.textContent = newBid;
      bidEl.classList.remove('bid-pop');
      void bidEl.offsetWidth;
      bidEl.classList.add('bid-pop');
    }
    if (bidTeamEl) bidTeamEl.textContent = teamName;
  },

  auctionSellPlayer() {
    const auction = VanquishersData.getAuction();
    if (!auction || auction.completed) return;
    const teamName = auction.currentBidTeam;
    if (!teamName) {
      this.showToast('No team has bid yet! Place a bid first.', 'error');
      return;
    }
    const team = auction.teams.find(t => t.name === teamName);
    if (!team || team.purse < auction.currentBid) {
      this.showToast('Insufficient purse!', 'error');
      return;
    }
    // Sell player
    const activePlayer = auction.pool.find(p => p.status === 'pending');
    if (!activePlayer) return;
    activePlayer.status = 'sold';
    activePlayer.soldTo = teamName;
    activePlayer.soldPrice = auction.currentBid;
    team.purse -= auction.currentBid;
    team.players.push({ name: activePlayer.name, price: auction.currentBid, id: activePlayer.id });

    // Move to next
    const nextPending = auction.pool.find(p => p.status === 'pending');
    if (!nextPending) {
      auction.completed = true;
    }
    auction.currentBid = 4;
    auction.currentBidTeam = '';
    VanquishersData.saveAuction(auction);
    this.showToast(`${activePlayer.name} SOLD to ${teamName} for ${activePlayer.soldPrice} units!`);
    this.renderAuction(document.getElementById('pageContent'));
  },

  auctionEditPlayer() {
    const auction = VanquishersData.getAuction();
    if (!auction || auction.completed) return;
    const activePlayer = auction.pool.find(p => p.status === 'pending');
    if (!activePlayer) return;
    const newName = prompt('Edit player name:', activePlayer.name);
    if (newName && newName.trim()) {
      activePlayer.name = newName.trim();
      VanquishersData.saveAuction(auction);
      this.showToast('Player name updated!');
      this.renderAuction(document.getElementById('pageContent'));
    }
  },

  auctionRemovePlayer() {
    const auction = VanquishersData.getAuction();
    if (!auction || auction.completed) return;
    const activePlayer = auction.pool.find(p => p.status === 'pending');
    if (!activePlayer) return;
    if (confirm(`Remove ${activePlayer.name} from auction?`)) {
      activePlayer.status = 'removed';
      const nextPending = auction.pool.find(p => p.status === 'pending');
      if (!nextPending) {
        auction.completed = true;
      }
      auction.currentBid = 4;
      auction.currentBidTeam = '';
      VanquishersData.saveAuction(auction);
      this.showToast(`${activePlayer.name} removed from auction`);
      this.renderAuction(document.getElementById('pageContent'));
    }
  },

  auctionReset() {
    const auction = VanquishersData.getAuction();
    if (!auction) return;

    // Check minimum players (7)
    const teamsUnderMin = auction.teams.filter(t => t.players.length < 7);
    if (teamsUnderMin.length > 0) {
      const teamNames = teamsUnderMin.map(t => t.name).join(', ');
      this.showToast(`Minimum 7 players required! Check: ${teamNames}`, 'error');
      return;
    }

    if (confirm('End the auction? Teams and assignments will be saved and shown as final results.')) {
      auction.completed = true;
      auction.started = false;
      VanquishersData.saveAuction(auction);
      this.showToast('Auction ended! Results are now live.');
      this.navigate('auction');
    }
  },

  renderAuctionCompleted(container) {
    const auction = VanquishersData.getAuction();
    const isAdmin = VanquishersData.getUser().role === 'admin';
    if (!auction || !auction.teams) return;

    const teamColors = ['#00e5ff','#e040fb','#ffd740','#69f0ae','#ff9100','#ff5252','#ba68c8','#40c4ff','#ff6e40','#b388ff'];

    container.innerHTML = `
      <div style="max-width:1100px; margin:0 auto;">
        <!-- Header -->
        <div style="background:#ffffff; border-radius:16px; padding:28px 32px; margin-bottom:28px; border:1px solid rgba(0,0,0,0.08); text-align:center;">
          <h1 style="font-size:30px; font-weight:800; letter-spacing:2px; text-transform:uppercase; margin:0 0 6px;">
            <span style="color:#1a1a2e;">VPL</span> <span style="color:var(--primary-color);">AUCTION</span>
          </h1>
          <p style="color:#4fc3f7; font-size:14px; font-weight:600; letter-spacing:1px; text-transform:uppercase; margin:0;">Final Team Rosters</p>
        </div>

        <!-- Teams Grid -->
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:20px;">
          ${auction.teams.map((t, i) => `
            <div style="background:#ffffff; border-radius:14px; border:1px solid rgba(0,0,0,0.08); overflow:hidden;">
              <!-- Team Header -->
              <div style="background:${t.color || teamColors[i % teamColors.length]}; padding:18px 20px; display:flex; align-items:center; gap:14px;">
                <div style="width:44px; height:44px; border-radius:50%; background:rgba(255,255,255,0.25); display:flex; align-items:center; justify-content:center; font-size:20px; font-weight:800; color:#fff;">${t.name.charAt(0).toUpperCase()}</div>
                <div>
                  <div style="font-size:18px; font-weight:800; color:#fff;">${t.name}</div>
                  <div style="font-size:12px; color:rgba(255,255,255,0.8);">${t.players.length} / ${t.capacity} players</div>
                </div>
              </div>
              <!-- Player List -->
              <div style="padding:14px 18px;">
                ${t.players.length > 0
                  ? t.players.map((p, idx) => `
                    <div style="display:flex; align-items:center; gap:12px; padding:10px 0; border-bottom:1px solid rgba(0,0,0,0.05);">
                      <div style="width:28px; height:28px; border-radius:50%; background:${t.color || teamColors[i % teamColors.length]}22; color:${t.color || teamColors[i % teamColors.length]}; font-size:12px; font-weight:700; display:flex; align-items:center; justify-content:center; flex-shrink:0;">${idx + 1}</div>
                      <div>
                        <div style="font-size:14px; font-weight:600; color:#1a1a2e;">${p.name}</div>
                        <div style="font-size:11px; color:#888;">${p.position || 'Player'} • Batch ${p.batchYear || ''}</div>
                      </div>
                    </div>`).join('')
                  : `<div style="text-align:center; padding:20px; color:#aaa; font-size:13px;">No players assigned</div>`
                }
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Admin Reset Button -->
        ${isAdmin ? `
        <div style="margin-top:32px; display:flex; justify-content:center; gap:16px;">
          <button class="btn btn-secondary" onclick="App.auctionResetFull()" style="opacity:0.7;">Reset & Start New Auction</button>
        </div>` : ''}
      </div>
    `;
  },

  auctionResetFull() {
    if (confirm('This will clear all team data and start fresh. Are you sure?')) {
      VanquishersData.resetAuction();
      this.showToast('Auction reset!');
      this.navigate('auction');
    }
  },

  // ====== PASSWORD MANAGEMENT (Admin Only) ======
  async renderPasswordManagement(container) {
    if (VanquishersData.getUser().role !== 'admin') {
      container.innerHTML = `<div class="empty-state"><div class="empty-icon">${this.Icons.passwords}</div><p>Admin access required</p></div>`;
      return;
    }

    container.innerHTML = '<div class="loading-state"><p>Loading users...</p></div>';
    const users = await VanquishersData.getAllUsers();
    const players = users.filter(u => u.role === 'player');

    container.innerHTML = `
      <div class="page-toolbar">
        <div class="search-bar">
          <span class="search-icon">${this.Icons.search}</span>
          <input type="text" id="pwdSearch" placeholder="Search users..." oninput="App.filterPasswordUsers()" />
        </div>
        <div style="color:var(--text-secondary);font-size:14px">
          <span style="color:var(--accent-cyan);font-weight:600">${players.length}</span> registered players
        </div>
      </div>
      <div class="pwd-users-grid" id="pwdUsersGrid">
        ${players.map(u => `
          <div class="pwd-user-card" data-name="${u.displayName.toLowerCase()}" data-batch="${u.batchYear}">
            <div class="pwd-user-avatar">${u.displayName.split(' ').map(n => n[0]).join('').substring(0, 2)}</div>
            <div class="pwd-user-info">
              <div class="pwd-user-name">${u.displayName}</div>
              <div class="pwd-user-details">
                <span>@${u.username}</span>
                <span>• Batch ${u.batchYear}</span>
              </div>
              <div class="pwd-user-email">${u.email ? `${this.Icons.mail} ` + u.email : `${this.Icons.x} No email`}</div>
            </div>
            <button class="btn btn-secondary btn-small" onclick="App.showChangePasswordModal('${u.username}', '${u.displayName}')">
              ${this.Icons.passwords} Change
            </button>
          </div>
        `).join('')}
      </div>
    `;
  },

  filterPasswordUsers() {
    const q = document.getElementById('pwdSearch').value.toLowerCase();
    document.querySelectorAll('.pwd-user-card').forEach(card => {
      const name = card.dataset.name;
      const batch = card.dataset.batch;
      card.style.display = (name.includes(q) || batch.includes(q)) ? '' : 'none';
    });
  },

  showChangePasswordModal(username, displayName) {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'changePwdModal';
    overlay.innerHTML = `
      <div class="modal">
        <div class="modal-header">
          <h3>${this.Icons.passwords} Change Password</h3>
          <button class="modal-close" onclick="document.getElementById('changePwdModal').remove()">${this.Icons.x}</button>
        </div>
        <div class="modal-body">
          <p style="color:var(--text-secondary);margin-bottom:16px">Changing password for <strong style="color:var(--accent-cyan)">${displayName}</strong> (@${username})</p>
          <div class="form-group">
            <label>New Password (min 6 characters)</label>
            <input type="password" id="newPwdInput" placeholder="Enter new password" />
          </div>
          <div class="form-group">
            <label>Confirm Password</label>
            <input type="password" id="confirmPwdInput" placeholder="Confirm new password" />
          </div>
          <div class="login-error" id="pwdError" style="display:none"></div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" onclick="document.getElementById('changePwdModal').remove()">Cancel</button>
          <button class="btn btn-primary" id="savePwdBtn" onclick="App.savePasswordChange('${username}')">Update Password</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
    document.getElementById('newPwdInput').focus();
  },

  async savePasswordChange(username) {
    const newPwd = document.getElementById('newPwdInput').value;
    const confirmPwd = document.getElementById('confirmPwdInput').value;
    const errorEl = document.getElementById('pwdError');
    const btn = document.getElementById('savePwdBtn');

    if (!newPwd || newPwd.length < 6) {
      errorEl.textContent = 'Password must be at least 6 characters';
      errorEl.style.display = 'block';
      return;
    }
    if (newPwd !== confirmPwd) {
      errorEl.textContent = 'Passwords do not match';
      errorEl.style.display = 'block';
      return;
    }

    btn.textContent = 'Updating...';
    btn.disabled = true;

    const result = await VanquishersData.changePassword(username, newPwd);
    if (result.success) {
      document.getElementById('changePwdModal').remove();
      this.showToast(`Password updated successfully! ${this.Icons.check}`);
    } else {
      errorEl.textContent = result.error;
      errorEl.style.display = 'block';
      btn.textContent = 'Update Password';
      btn.disabled = false;
    }
  },

  // ====== TEAM ACHIEVEMENTS PAGE ======
  renderAchievementsPage(container) {
    const achievements = VanquishersData.getAll('achievements');
    const isAdmin = VanquishersData.getUser().role === 'admin';

    container.innerHTML = `
      <div class="section-container">
        <div class="section-header">
          <h2 style="color: #ffffff">Team Achievements</h2>
          ${isAdmin ? `<button class="btn btn-primary" onclick="App.showAchievementModal()">${this.Icons.plus} Add Achievement</button>` : ''}
        </div>

        <div class="achievements-grid" style="display:grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap:24px; margin-top:20px;">
          ${achievements.length > 0 
            ? achievements.map(a => this.renderAchievementCard(a, isAdmin)).join('')
            : `<div class="empty-state">
                  <div class="empty-icon">${this.Icons.star}</div>
                  <p>No achievements added yet</p>
               </div>`
          }
        </div>
      </div>
    `;
  },

  renderAchievementCard(a, isAdmin) {
    return `
      <div class="glass-card achievement-card" style="position:relative; overflow:hidden;">
        <div class="stat-icon gold" style="margin-bottom:16px;">${this.Icons.star}</div>
        <h3 style="margin-bottom:8px; color:var(--text-primary);">${a.title}</h3>
        <p style="color:var(--text-secondary); line-height:1.6;">${a.description}</p>
        ${isAdmin ? `
          <div class="admin-actions" style="margin-top:20px; display:flex; gap:12px;">
            <button class="btn btn-secondary btn-small" onclick="App.showAchievementModal(${a.id})">${this.Icons.edit} Edit</button>
            <button class="btn btn-danger btn-small" onclick="App.deleteAchievement(${a.id})">${this.Icons.trash}</button>
          </div>
        ` : ''}
      </div>
    `;
  },

  showAchievementModal(id = null) {
    if (VanquishersData.getUser().role !== 'admin') {
      this.showToast('Access denied');
      return;
    }
    const achievement = id ? VanquishersData.getAll('achievements').find(a => a.id === id) : null;
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'achievementModal';
    overlay.innerHTML = `
      <div class="modal">
        <div class="modal-header">
          <h3>${id ? 'Edit Achievement' : 'Add Achievement'}</h3>
          <button class="modal-close" onclick="document.getElementById('achievementModal').remove()">${this.Icons.x}</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>Match Name / Title</label>
            <input type="text" id="achTitle" value="${achievement ? achievement.title : ''}" placeholder="e.g. VPL 2026 Winner" />
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea id="achDesc" rows="4" placeholder="Describe the achievement...">${achievement ? achievement.description : ''}</textarea>
          </div>
          <button class="btn btn-primary full-width" onclick="App.saveAchievement(${id})">Save Achievement</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
  },

  saveAchievement(id = null) {
    if (VanquishersData.getUser().role !== 'admin') {
      this.showToast('Access denied');
      return;
    }
    const title = document.getElementById('achTitle').value.trim();
    const description = document.getElementById('achDesc').value.trim();

    if (!title || !description) {
      this.showToast('Please fill in all fields');
      return;
    }

    if (id) {
      VanquishersData.update('achievements', id, { title, description });
      this.showToast('Achievement updated');
    } else {
      VanquishersData.add('achievements', { title, description });
      this.showToast('Achievement added');
    }

    document.getElementById('achievementModal').remove();
    this.renderAchievementsPage(document.getElementById('pageContent'));
  },

  deleteAchievement(id) {
    if (VanquishersData.getUser().role !== 'admin') {
      this.showToast('Access denied');
      return;
    }
    if (confirm('Are you sure you want to delete this achievement?')) {
      VanquishersData.remove('achievements', id);
      this.showToast('Achievement removed');
      this.renderAchievementsPage(document.getElementById('pageContent'));
    }
  }
};

// ====== Start App ======
document.addEventListener('DOMContentLoaded', () => App.init());
