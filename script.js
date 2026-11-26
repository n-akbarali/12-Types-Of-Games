document.addEventListener("DOMContentLoaded", () => {
  const STORAGE_KEY = "vexel_arcade_studio_v3";
  const THEME_KEY = "vexel_arcade_theme_v3";

  const GAMES = [
    {
      id: "ttt",
      title: "Neon Tic-Tac-Toe",
      category: "strategy",
      categoryLabel: "Strategy",
      icon: "fa-hashtag",
      tone: "tone-cyan",
      desc: "Outsmart a tactical AI or challenge a friend on a glowing 3x3 arena.",
      bestType: "wins",
      hint: "Click any empty cell to place your mark. Switch between Smart AI and 2P Local anytime."
    },
    {
      id: "wordcipher",
      title: "Word Cipher",
      category: "word",
      categoryLabel: "Word & Code",
      icon: "fa-font",
      tone: "tone-violet",
      desc: "Crack a hidden 5-letter tech or arcade word in six precision attempts.",
      bestType: "wins",
      hint: "Type on your physical keyboard or tap the keys below. Press Enter to submit a 5-letter guess."
    },
    {
      id: "memory",
      title: "Cyber Memory Matrix",
      category: "puzzle",
      categoryLabel: "Puzzle",
      icon: "fa-brain",
      tone: "tone-mint",
      desc: "Flip 3D neon tiles and lock every matching icon pair in minimal moves.",
      bestType: "low_moves",
      hint: "Mismatched pairs stay visible until you click your next card, keeping play fast and timer-free."
    },
    {
      id: "cracker",
      title: "Number Cracker",
      category: "word",
      categoryLabel: "Word & Code",
      icon: "fa-lock-open",
      tone: "tone-amber",
      desc: "Deduce the secret unique-digit vault code using Mint and Amber signal dots.",
      bestType: "low_tries",
      hint: "Mint dot = right digit in right spot. Amber dot = right digit in wrong spot. No repeated digits."
    },
    {
      id: "lightsout",
      title: "Lights Out Grid",
      category: "puzzle",
      categoryLabel: "Puzzle",
      icon: "fa-lightbulb",
      tone: "tone-cyan",
      desc: "Shut down every neon node on the 5x5 matrix using orthogonal cross-toggles.",
      bestType: "low_moves",
      hint: "Clicking a node flips itself and its up, down, left, and right neighbors. Turn all 25 nodes off."
    },
    {
      id: "g2048",
      title: "2048 Neon Core",
      category: "arcade",
      categoryLabel: "Arcade",
      icon: "fa-cubes",
      tone: "tone-violet",
      desc: "Slide and fuse matching power cells until you forge the legendary 2048 core.",
      bestType: "high_score",
      hint: "Use Arrow keys, WASD, or the on-screen D-Pad to slide and merge matching numbers."
    },
    {
      id: "sliding",
      title: "Sliding 15-Puzzle",
      category: "puzzle",
      categoryLabel: "Puzzle",
      icon: "fa-table-cells",
      tone: "tone-mint",
      desc: "Shift numbered tiles into ascending order across solvable 3x3 or 4x4 grids.",
      bestType: "low_moves",
      hint: "Click any tile adjacent to the empty slot to slide it. Green tiles are in their final position."
    },
    {
      id: "mines",
      title: "Cyber Minesweeper",
      category: "arcade",
      categoryLabel: "Arcade",
      icon: "fa-bomb",
      tone: "tone-rose",
      desc: "Clear 54 safe sectors across an 8x8 minefield with guaranteed safe first click.",
      bestType: "wins",
      hint: "Left-click to reveal a sector. Right-click or toggle Flag Mode to mark hidden mines."
    },
    {
      id: "c4",
      title: "Connect Four Arena",
      category: "strategy",
      categoryLabel: "Strategy",
      icon: "fa-circle-dot",
      tone: "tone-amber",
      desc: "Drop neon discs into a 7x6 gravity grid and align four in a row to dominate.",
      bestType: "wins",
      hint: "Hover any column to preview your drop, then click to release your disc."
    },
    {
      id: "hangman",
      title: "Hangman Vault",
      category: "word",
      categoryLabel: "Word & Code",
      icon: "fa-shield-halved",
      tone: "tone-rose",
      desc: "Decode secret words across Coding, Cars, Space, and Gaming before your shield breaks.",
      bestType: "wins",
      hint: "Click letters or use your keyboard. Every wrong letter fractures one of the 6 shield segments."
    },
    {
      id: "rpsls",
      title: "RPSLS Duel",
      category: "arcade",
      categoryLabel: "Arcade",
      icon: "fa-hand-spock",
      tone: "tone-cyan",
      desc: "First-to-5 tactical duel featuring Rock, Paper, Scissors, Lizard, and Spock.",
      bestType: "wins",
      hint: "Each hand beats two others and loses to two others. First side to 5 points takes the match."
    },
    {
      id: "mastermind",
      title: "Color Mastermind",
      category: "strategy",
      categoryLabel: "Strategy",
      icon: "fa-palette",
      tone: "tone-violet",
      desc: "Crack a 4-slot sequence from 6 neon pigments within 10 deductive rounds.",
      bestType: "low_tries",
      hint: "Tap pigments to fill slots, click a filled slot to clear it, then press Check Sequence."
    }
  ];

  const BADGES = [
    { id: "first_win", name: "First Blood", desc: "Win your first arcade match", icon: "fa-award" },
    { id: "five_wins", name: "Rising Pilot", desc: "Accumulate 5 total wins", icon: "fa-star" },
    { id: "explorer", name: "Explorer", desc: "Play 4 different mini-games", icon: "fa-compass" },
    { id: "completionist", name: "Studio Master", desc: "Try all 12 arcade titles", icon: "fa-crown" },
    { id: "streak_3", name: "Hot Streak", desc: "Reach a 3-win streak", icon: "fa-fire" },
    { id: "xp_500", name: "Neon Surge", desc: "Earn 500 or more total XP", icon: "fa-bolt" },
    { id: "wordsmith", name: "Cipher Breaker", desc: "Win Word Cipher or Hangman", icon: "fa-key" },
    { id: "tactician", name: "Grid Tactician", desc: "Win Tic-Tac-Toe or Connect 4", icon: "fa-chess" },
    { id: "puzzle_pro", name: "Logic Core", desc: "Win Lights Out, Sliding, or Mines", icon: "fa-microchip" },
    { id: "high_roller", name: "Core 512", desc: "Score 512+ in 2048 Neon Core", icon: "fa-gem" }
  ];

  const WORD_CIPHER_BANK = [
    { word: "PIXEL", clue: "Smallest glowing dot on a digital screen" },
    { word: "LOGIC", clue: "Structured reasoning behind every algorithm" },
    { word: "CYBER", clue: "Relating to computers and digital networks" },
    { word: "LASER", clue: "Focused beam of coherent neon light" },
    { word: "STACK", clue: "Last-in, first-out data structure" },
    { word: "ARRAY", clue: "Ordered list storing indexed items in JS" },
    { word: "SCOPE", clue: "Region where a variable can be accessed" },
    { word: "EVENT", clue: "User action like a click or key press" },
    { word: "QUERY", clue: "Selector lookup or database request" },
    { word: "VALUE", clue: "Data held inside a variable or input" },
    { word: "TOKEN", clue: "Digital key used for auth or parsing" },
    { word: "CACHE", clue: "High-speed memory for quick data reuse" },
    { word: "NODES", clue: "Connected elements in the DOM tree" },
    { word: "FRAME", clue: "Single rendered image in an animation" },
    { word: "STYLE", clue: "Visual rules controlling layout and color" },
    { word: "INPUT", clue: "HTML field capturing user text or numbers" },
    { word: "SHIFT", clue: "Array method removing the first element" },
    { word: "SLICE", clue: "Copies a segment of an array or string" },
    { word: "INDEX", clue: "Zero-based position inside an array" },
    { word: "ROUTE", clue: "Navigation path leading to a view" },
    { word: "PROXY", clue: "Intermediary server handling web requests" },
    { word: "SPARK", clue: "Sudden flash of electrical energy" },
    { word: "PRISM", clue: "Crystal splitting light into neon colors" },
    { word: "ORBIT", clue: "Curved path around a planet or star" },
    { word: "PULSE", clue: "Rhythmic beat of light or signal" },
    { word: "NEXUS", clue: "Central hub linking multiple systems" },
    { word: "QUEST", clue: "Adventure mission with a final reward" },
    { word: "ARENA", clue: "Competitive stage for head-to-head duels" },
    { word: "SCORE", clue: "Numeric points earned during a match" },
    { word: "LEVEL", clue: "Stage of difficulty or player rank" },
    { word: "GUILD", clue: "Organized team of dedicated gamers" },
    { word: "SWORD", clue: "Classic melee blade in RPG titles" },
    { word: "TURBO", clue: "Forced-induction boost for high speed" },
    { word: "DRIFT", clue: "Controlled sideways slide around corners" },
    { word: "BOOST", clue: "Sudden surge in acceleration or power" },
    { word: "NITRO", clue: "High-octane racing speed injection" },
    { word: "TRACK", clue: "Circuit built for high-speed racing" },
    { word: "FLAME", clue: "Blazing trail behind an exhaust pipe" },
    { word: "STORM", clue: "Intense electric weather phenomenon" },
    { word: "VAULT", clue: "Heavily locked chamber guarding secrets" }
  ];

  const HANGMAN_BANK = [
    { word: "JAVASCRIPT", cat: "Coding" },
    { word: "FUNCTION", cat: "Coding" },
    { word: "VARIABLE", cat: "Coding" },
    { word: "BROWSER", cat: "Coding" },
    { word: "COMPILER", cat: "Coding" },
    { word: "TERMINAL", cat: "Coding" },
    { word: "DATABASE", cat: "Coding" },
    { word: "PROTOCOL", cat: "Coding" },
    { word: "FRONTEND", cat: "Coding" },
    { word: "COBALT", cat: "Cars" },
    { word: "MALIBU", cat: "Cars" },
    { word: "MUSTANG", cat: "Cars" },
    { word: "PORSCHE", cat: "Cars" },
    { word: "FERRARI", cat: "Cars" },
    { word: "TURBINE", cat: "Cars" },
    { word: "SPOILER", cat: "Cars" },
    { word: "CHASSIS", cat: "Cars" },
    { word: "GEARBOX", cat: "Cars" },
    { word: "NEBULA", cat: "Space" },
    { word: "GALAXY", cat: "Space" },
    { word: "ASTEROID", cat: "Space" },
    { word: "ECLIPSE", cat: "Space" },
    { word: "GRAVITY", cat: "Space" },
    { word: "QUASAR", cat: "Space" },
    { word: "HORIZON", cat: "Space" },
    { word: "CAPSULE", cat: "Space" },
    { word: "METEOR", cat: "Space" },
    { word: "ARCADE", cat: "Gaming" },
    { word: "CONSOLE", cat: "Gaming" },
    { word: "CONTROLLER", cat: "Gaming" },
    { word: "CHAMPION", cat: "Gaming" },
    { word: "DUNGEON", cat: "Gaming" },
    { word: "HEADSHOT", cat: "Gaming" },
    { word: "RESPAWN", cat: "Gaming" },
    { word: "JOYSTICK", cat: "Gaming" }
  ];

  const MEMORY_ICONS = [
    "fa-microchip",
    "fa-bolt",
    "fa-shield-halved",
    "fa-rocket",
    "fa-atom",
    "fa-satellite",
    "fa-gem",
    "fa-fire"
  ];

  const RPSLS_ITEMS = [
    { id: "rock", label: "Rock", icon: "fa-hand-back-fist" },
    { id: "paper", label: "Paper", icon: "fa-hand" },
    { id: "scissors", label: "Scissors", icon: "fa-hand-scissors" },
    { id: "lizard", label: "Lizard", icon: "fa-hand-lizard" },
    { id: "spock", label: "Spock", icon: "fa-hand-spock" }
  ];

  const RPSLS_RULES = {
    rock: { scissors: "Rock crushes Scissors", lizard: "Rock crushes Lizard" },
    paper: { rock: "Paper covers Rock", spock: "Paper disproves Spock" },
    scissors: { paper: "Scissors cuts Paper", lizard: "Scissors decapitates Lizard" },
    lizard: { spock: "Lizard poisons Spock", paper: "Lizard eats Paper" },
    spock: { scissors: "Spock smashes Scissors", rock: "Spock vaporizes Rock" }
  };

  const MASTERMIND_NAMES = ["Cyan", "Violet", "Mint", "Amber", "Rose", "Pearl"];

  const createDefaultState = () => {
    const records = {};
    for (let i = 0; i < GAMES.length; i++) {
      records[GAMES[i].id] = null;
    }
    return {
      pilot: {
        tag: "Pilot_01",
        age: 16,
        avatar: "fa-user-astronaut"
      },
      xp: 0,
      played: 0,
      wins: 0,
      streak: 0,
      bestStreak: 0,
      playedGames: [],
      badges: [],
      records: records
    };
  };

  let appState = createDefaultState();
  let currentView = "hub";
  let activeGameId = null;
  let searchQuery = "";
  let activeCategory = "all";
  let selectedAvatarDraft = "fa-user-astronaut";
  let resetPending = false;

  const tttState = { board: [], turn: "X", ai: true, over: false, winLine: [] };
  const wcState = { secret: "", clue: "", showClue: false, guesses: [], current: "", over: false, won: false };
  const memState = { size: 16, cards: [], flipped: [], mismatch: [], moves: 0, pairs: 0, over: false };
  const ncState = { digits: 4, secret: "", log: [], over: false, won: false };
  const loState = { grid: [], moves: 0, par: 0, over: false };
  const g2048State = { board: [], score: 0, over: false, milestones: [] };
  const slState = { size: 4, tiles: [], moves: 0, over: false };
  const msState = { board: [], started: false, flagMode: false, flags: 0, over: false, won: false };
  const c4State = { board: [], turn: 1, ai: true, over: false, winCells: [], hoverCol: -1 };
  const hmState = { word: "", cat: "", guessed: [], wrong: 0, over: false, won: false };
  const rpsState = { pScore: 0, cpuScore: 0, draws: 0, pMove: null, cpuMove: null, winner: "", ruleText: "Choose your opening hand to begin.", over: false };
  const mmState = { unique: true, secret: [], current: [null, null, null, null], log: [], over: false, won: false };

  const elBrandHome = document.getElementById("brand-home-btn");
  const elNavHub = document.getElementById("nav-hub-btn");
  const elNavRecords = document.getElementById("nav-records-btn");
  const elHeaderXp = document.getElementById("header-xp");
  const elHeaderRank = document.getElementById("header-rank");
  const elThemeBtn = document.getElementById("theme-toggle-btn");
  const elThemeIcon = document.getElementById("theme-toggle-icon");
  const elOpenProfileBtn = document.getElementById("open-profile-btn");
  const elHeroProfileBtn = document.getElementById("hero-profile-btn");
  const elHeaderAvatar = document.getElementById("header-avatar-icon");
  const elHeaderTag = document.getElementById("header-gamer-tag");

  const elViewHub = document.getElementById("view-hub");
  const elViewStage = document.getElementById("view-stage");
  const elViewRecords = document.getElementById("view-records");

  const elRandomBtn = document.getElementById("random-game-btn");
  const elHeroXp = document.getElementById("hero-xp");
  const elHeroRank = document.getElementById("hero-rank");
  const elHeroWins = document.getElementById("hero-wins");
  const elHeroBadges = document.getElementById("hero-badges");
  const elSearchInput = document.getElementById("game-search-input");
  const elSearchClear = document.getElementById("search-clear-btn");
  const elCategoryFilters = document.getElementById("category-filters");
  const elGamesGrid = document.getElementById("games-grid");
  const elHubEmpty = document.getElementById("hub-empty-state");
  const elResetFiltersBtn = document.getElementById("reset-filters-btn");

  const elBackToHub = document.getElementById("back-to-hub-btn");
  const elStageIcon = document.getElementById("stage-game-icon");
  const elStageTitle = document.getElementById("stage-game-title");
  const elStageCategory = document.getElementById("stage-game-category");
  const elStageBest = document.getElementById("stage-game-best");
  const elStageRestart = document.getElementById("stage-restart-btn");
  const elStageControls = document.getElementById("stage-controls");
  const elStageStatus = document.getElementById("stage-status");
  const elStageWorkspace = document.getElementById("stage-workspace");
  const elStageHint = document.getElementById("stage-hint");

  const elRecordsAvatar = document.getElementById("records-avatar-icon");
  const elRecordsName = document.getElementById("records-pilot-name");
  const elRecordsRank = document.getElementById("records-rank-badge");
  const elRecordsAge = document.getElementById("records-pilot-age");
  const elRecordsXpLabel = document.getElementById("records-xp-label");
  const elRecordsXpPercent = document.getElementById("records-xp-percent");
  const elRecordsXpFill = document.getElementById("records-xp-fill");
  const elStatXp = document.getElementById("stat-total-xp");
  const elStatPlayed = document.getElementById("stat-games-played");
  const elStatWins = document.getElementById("stat-total-wins");
  const elStatStreak = document.getElementById("stat-best-streak");
  const elRecordsGrid = document.getElementById("records-grid");
  const elBadgesProgress = document.getElementById("badges-progress-text");
  const elBadgesGrid = document.getElementById("badges-grid");
  const elResetProgressBtn = document.getElementById("reset-progress-btn");
  const elResetCancelBtn = document.getElementById("reset-cancel-btn");
  const elResetFeedback = document.getElementById("reset-feedback");

  const elProfileModal = document.getElementById("profile-modal");
  const elCloseProfileBtn = document.getElementById("close-profile-btn");
  const elCancelProfileBtn = document.getElementById("cancel-profile-btn");
  const elProfileForm = document.getElementById("profile-form");
  const elProfileTagInput = document.getElementById("profile-tag-input");
  const elProfileAgeInput = document.getElementById("profile-age-input");
  const elAvatarPicker = document.getElementById("avatar-picker");
  const elProfileError = document.getElementById("profile-error-msg");
  const elToastContainer = document.getElementById("toast-container");

  const saveState = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
  };

  const loadState = () => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (parsed && parsed.pilot && parsed.records) {
      appState = parsed;
      for (let i = 0; i < GAMES.length; i++) {
        const gid = GAMES[i].id;
        if (appState.records[gid] === undefined) {
          appState.records[gid] = null;
        }
      }
      if (!appState.playedGames) appState.playedGames = [];
      if (!appState.badges) appState.badges = [];
    }
  };

  const applyTheme = (mode) => {
    if (mode === "light") {
      document.body.classList.add("light-theme");
      elThemeIcon.className = "fa-solid fa-moon";
    } else {
      document.body.classList.remove("light-theme");
      elThemeIcon.className = "fa-solid fa-sun";
    }
    localStorage.setItem(THEME_KEY, mode);
  };

  const loadTheme = () => {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "light") {
      applyTheme("light");
    } else {
      applyTheme("dark");
    }
  };

  const showToast = (message, tone) => {
    const typeClass = tone === "warn" ? "toast-warn" : (tone === "info" ? "toast-info" : "toast-success");
    const iconClass = tone === "warn" ? "fa-triangle-exclamation" : (tone === "info" ? "fa-circle-info" : "fa-bolt");
    const toast = document.createElement("div");
    toast.className = "toast " + typeClass;
    toast.innerHTML = "<i class=\"fa-solid " + iconClass + "\"></i><span>" + message + "</span>";
    toast.addEventListener("click", () => {
      toast.remove();
    });
    if (elToastContainer.children.length >= 3) {
      elToastContainer.firstChild.remove();
    }
    elToastContainer.appendChild(toast);
  };

  const getRankInfo = (xp) => {
    if (xp >= 1500) {
      return { name: "Grandmaster", next: "Max Rank", target: 1500, pct: 100 };
    } else if (xp >= 700) {
      return { name: "Tactician", next: "Grandmaster", target: 1500, pct: Math.floor(((xp - 700) / 800) * 100) };
    } else if (xp >= 250) {
      return { name: "Challenger", next: "Tactician", target: 700, pct: Math.floor(((xp - 250) / 450) * 100) };
    }
    return { name: "Rookie", next: "Challenger", target: 250, pct: Math.floor((xp / 250) * 100) };
  };

  const getGameById = (id) => {
    return GAMES.find((g) => g.id === id);
  };

  const formatBestValue = (game, val) => {
    if (val === null || val === undefined) return "No record";
    switch (game.bestType) {
      case "wins":
        return val + (val === 1 ? " Win" : " Wins");
      case "low_moves":
        return val + " Moves";
      case "low_tries":
        return val + (val === 1 ? " Try" : " Tries");
      case "high_score":
        return val + " Pts";
      default:
        return String(val);
    }
  };

  const unlockBadge = (id) => {
    if (!appState.badges.includes(id)) {
      appState.badges.push(id);
      const badgeObj = BADGES.find((b) => b.id === id);
      if (badgeObj) {
        showToast("Badge Unlocked: " + badgeObj.name, "success");
      }
    }
  };

  const evaluateBadges = () => {
    if (appState.wins >= 1) unlockBadge("first_win");
    if (appState.wins >= 5) unlockBadge("five_wins");
    if (appState.playedGames.length >= 4) unlockBadge("explorer");
    if (appState.playedGames.length >= 12) unlockBadge("completionist");
    if (appState.bestStreak >= 3) unlockBadge("streak_3");
    if (appState.xp >= 500) unlockBadge("xp_500");
    if ((appState.records.wordcipher && appState.records.wordcipher > 0) || (appState.records.hangman && appState.records.hangman > 0)) {
      unlockBadge("wordsmith");
    }
    if ((appState.records.ttt && appState.records.ttt > 0) || (appState.records.c4 && appState.records.c4 > 0)) {
      unlockBadge("tactician");
    }
    if (appState.records.lightsout !== null || appState.records.sliding !== null || (appState.records.mines && appState.records.mines > 0)) {
      unlockBadge("puzzle_pro");
    }
    if (appState.records.g2048 !== null && appState.records.g2048 >= 512) {
      unlockBadge("high_roller");
    }
  };

  const recordMatchStart = (gameId) => {
    if (!appState.playedGames.includes(gameId)) {
      appState.playedGames.push(gameId);
      evaluateBadges();
      saveState();
    }
  };

  const recordOutcome = (gameId, won, xpGain, metricVal) => {
    const game = getGameById(gameId);
    appState.played += 1;
    appState.xp += xpGain;
    if (won) {
      appState.wins += 1;
      appState.streak += 1;
      if (appState.streak > appState.bestStreak) {
        appState.bestStreak = appState.streak;
      }
      if (game) {
        const currentBest = appState.records[gameId];
        if (game.bestType === "wins") {
          appState.records[gameId] = currentBest === null ? 1 : currentBest + 1;
        } else if (game.bestType === "low_moves" || game.bestType === "low_tries") {
          if (currentBest === null || metricVal < currentBest) {
            appState.records[gameId] = metricVal;
          }
        } else if (game.bestType === "high_score") {
          if (currentBest === null || metricVal > currentBest) {
            appState.records[gameId] = metricVal;
          }
        }
      }
    } else {
      appState.streak = 0;
      if (game && game.bestType === "high_score" && metricVal > 0) {
        const currentBest = appState.records[gameId];
        if (currentBest === null || metricVal > currentBest) {
          appState.records[gameId] = metricVal;
        }
      }
    }
    evaluateBadges();
    saveState();
    syncGlobalUI();
    if (activeGameId === gameId && game) {
      elStageBest.textContent = "Best: " + formatBestValue(game, appState.records[gameId]);
    }
    if (xpGain > 0) {
      showToast("+" + xpGain + " XP earned!", won ? "success" : "info");
    }
  };

  const syncGlobalUI = () => {
    const rank = getRankInfo(appState.xp);
    elHeaderXp.textContent = appState.xp + " XP";
    elHeaderRank.textContent = rank.name;
    elHeaderAvatar.className = "fa-solid " + appState.pilot.avatar;
    elHeaderTag.textContent = appState.pilot.tag;

    elHeroXp.textContent = String(appState.xp);
    elHeroRank.textContent = rank.name;
    elHeroWins.textContent = String(appState.wins);
    elHeroBadges.textContent = appState.badges.length + " / " + BADGES.length;

    if (currentView === "hub") {
      renderHubGrid();
    } else if (currentView === "records") {
      renderRecordsView();
    }
  };

  const setStatus = (text, tone) => {
    elStageStatus.textContent = text;
    elStageStatus.className = "stage-status";
    if (tone === "win") elStageStatus.classList.add("status-win");
    else if (tone === "lose") elStageStatus.classList.add("status-lose");
    else if (tone === "info") elStageStatus.classList.add("status-info");
  };

  const switchView = (viewName) => {
    currentView = viewName;
    elViewHub.classList.add("hidden");
    elViewStage.classList.add("hidden");
    elViewRecords.classList.add("hidden");
    elNavHub.classList.remove("active");
    elNavRecords.classList.remove("active");

    if (viewName === "hub") {
      activeGameId = null;
      elViewHub.classList.remove("hidden");
      elNavHub.classList.add("active");
      renderHubGrid();
    } else if (viewName === "records") {
      activeGameId = null;
      elViewRecords.classList.remove("hidden");
      elNavRecords.classList.add("active");
      renderRecordsView();
    } else if (viewName === "stage") {
      elViewStage.classList.remove("hidden");
    }
  };

  const renderHubGrid = () => {
    const term = searchQuery.trim().toLowerCase();
    const filtered = GAMES.filter((game) => {
      const catMatch = activeCategory === "all" || game.category === activeCategory;
      const textMatch = term === "" || game.title.toLowerCase().includes(term) || game.desc.toLowerCase().includes(term) || game.categoryLabel.toLowerCase().includes(term);
      return catMatch && textMatch;
    });

    elGamesGrid.innerHTML = "";
    if (filtered.length === 0) {
      elHubEmpty.classList.remove("hidden");
      return;
    }
    elHubEmpty.classList.add("hidden");

    filtered.forEach((game) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "game-card " + game.tone;
      const bestStr = formatBestValue(game, appState.records[game.id]);
      card.innerHTML =
        "<div class=\"game-card-top\">" +
          "<span class=\"game-card-icon\"><i class=\"fa-solid " + game.icon + "\"></i></span>" +
          "<span class=\"game-card-badge\">" + game.categoryLabel + "</span>" +
        "</div>" +
        "<h3 class=\"game-card-title\">" + game.title + "</h3>" +
        "<p class=\"game-card-desc\">" + game.desc + "</p>" +
        "<div class=\"game-card-foot\">" +
          "<span class=\"game-card-best\">" + bestStr + "</span>" +
          "<span class=\"game-card-play\"><span>Play</span><i class=\"fa-solid fa-arrow-right\"></i></span>" +
        "</div>";
      card.addEventListener("click", () => {
        openGame(game.id);
      });
      elGamesGrid.appendChild(card);
    });
  };

  const renderRecordsView = () => {
    const rank = getRankInfo(appState.xp);
    elRecordsAvatar.className = "fa-solid " + appState.pilot.avatar;
    elRecordsName.textContent = appState.pilot.tag;
    elRecordsRank.textContent = rank.name;
    elRecordsAge.textContent = "Age: " + appState.pilot.age;
    if (rank.next === "Max Rank") {
      elRecordsXpLabel.textContent = appState.xp + " XP — Maximum Rank Reached";
    } else {
      elRecordsXpLabel.textContent = appState.xp + " / " + rank.target + " XP to " + rank.next;
    }
    elRecordsXpPercent.textContent = rank.pct + "%";
    elRecordsXpFill.style.width = rank.pct + "%";

    elStatXp.textContent = String(appState.xp);
    elStatPlayed.textContent = String(appState.played);
    elStatWins.textContent = String(appState.wins);
    elStatStreak.textContent = String(appState.bestStreak);

    elRecordsGrid.innerHTML = "";
    GAMES.forEach((game) => {
      const card = document.createElement("div");
      card.className = "record-card";
      card.innerHTML =
        "<div class=\"record-card-icon\"><i class=\"fa-solid " + game.icon + "\"></i></div>" +
        "<div>" +
          "<div class=\"record-card-name\">" + game.title + "</div>" +
          "<div class=\"record-card-val\">" + formatBestValue(game, appState.records[game.id]) + "</div>" +
        "</div>";
      elRecordsGrid.appendChild(card);
    });

    elBadgesProgress.textContent = appState.badges.length + " / " + BADGES.length + " Unlocked";
    elBadgesGrid.innerHTML = "";
    BADGES.forEach((badge) => {
      const isUnlocked = appState.badges.includes(badge.id);
      const card = document.createElement("div");
      card.className = "badge-card" + (isUnlocked ? " unlocked" : "");
      card.innerHTML =
        "<div class=\"badge-icon\"><i class=\"fa-solid " + badge.icon + "\"></i></div>" +
        "<div class=\"badge-name\">" + badge.name + "</div>" +
        "<div class=\"badge-desc\">" + badge.desc + "</div>" +
        "<div class=\"badge-state\">" + (isUnlocked ? "Unlocked" : "Locked") + "</div>";
      elBadgesGrid.appendChild(card);
    });

    resetPending = false;
    elResetProgressBtn.innerHTML = "<i class=\"fa-solid fa-trash-can\"></i><span>Reset Progress</span>";
    elResetCancelBtn.classList.add("hidden");
    elResetFeedback.classList.add("hidden");
  };

  const openGame = (gameId) => {
    const game = getGameById(gameId);
    if (!game) return;
    activeGameId = gameId;
    recordMatchStart(gameId);
    switchView("stage");

    elStageIcon.innerHTML = "<i class=\"fa-solid " + game.icon + "\"></i>";
    elStageTitle.textContent = game.title;
    elStageCategory.textContent = game.categoryLabel;
    elStageBest.textContent = "Best: " + formatBestValue(game, appState.records[gameId]);
    elStageHint.textContent = game.hint;

    startActiveGame();
  };

  const startActiveGame = () => {
    elStageControls.innerHTML = "";
    elStageWorkspace.innerHTML = "";
    switch (activeGameId) {
      case "ttt":
        initTTT();
        break;
      case "wordcipher":
        initWordCipher();
        break;
      case "memory":
        initMemory();
        break;
      case "cracker":
        initCracker();
        break;
      case "lightsout":
        initLightsOut();
        break;
      case "g2048":
        init2048();
        break;
      case "sliding":
        initSliding();
        break;
      case "mines":
        initMines();
        break;
      case "c4":
        initConnectFour();
        break;
      case "hangman":
        initHangman();
        break;
      case "rpsls":
        initRPSLS();
        break;
      case "mastermind":
        initMastermind();
        break;
      default:
        break;
    }
  };

  const TTT_LINES = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  const getTTTWin = (board) => {
    for (let i = 0; i < TTT_LINES.length; i++) {
      const line = TTT_LINES[i];
      const a = board[line[0]];
      if (a !== "" && a === board[line[1]] && a === board[line[2]]) {
        return { winner: a, line: line };
      }
    }
    return null;
  };

  const pickTTTAIMove = () => {
    for (let i = 0; i < 9; i++) {
      if (tttState.board[i] === "") {
        tttState.board[i] = "O";
        const win = getTTTWin(tttState.board);
        tttState.board[i] = "";
        if (win) return i;
      }
    }
    for (let i = 0; i < 9; i++) {
      if (tttState.board[i] === "") {
        tttState.board[i] = "X";
        const block = getTTTWin(tttState.board);
        tttState.board[i] = "";
        if (block) return i;
      }
    }
    if (tttState.board[4] === "") return 4;
    const corners = [0, 2, 6, 8].filter((idx) => tttState.board[idx] === "");
    if (corners.length > 0) {
      return corners[Math.floor(Math.random() * corners.length)];
    }
    const open = [];
    for (let i = 0; i < 9; i++) {
      if (tttState.board[i] === "") open.push(i);
    }
    return open.length > 0 ? open[Math.floor(Math.random() * open.length)] : -1;
  };

  const initTTT = () => {
    tttState.board = ["", "", "", "", "", "", "", "", ""];
    tttState.turn = "X";
    tttState.over = false;
    tttState.winLine = [];
    setStatus("Player X turn — claim your first square.", "info");
    renderTTT();
  };

  const handleTTTClick = (idx) => {
    if (tttState.over || tttState.board[idx] !== "") return;
    tttState.board[idx] = tttState.turn;
    let res = getTTTWin(tttState.board);
    if (res) {
      tttState.over = true;
      tttState.winLine = res.line;
      if (tttState.ai && res.winner === "X") {
        setStatus("Victory! You defeated the Tactical AI.", "win");
        recordOutcome("ttt", true, 40, 1);
      } else if (!tttState.ai) {
        setStatus("Player " + res.winner + " wins the match!", "win");
        recordOutcome("ttt", true, 30, 1);
      } else {
        setStatus("Tactical AI wins this round.", "lose");
        recordOutcome("ttt", false, 10, 0);
      }
      renderTTT();
      return;
    }

    if (!tttState.board.includes("")) {
      tttState.over = true;
      setStatus("Stalemate! It is a draw.", "info");
      recordOutcome("ttt", false, 15, 0);
      renderTTT();
      return;
    }

    if (tttState.ai && tttState.turn === "X") {
      const aiIdx = pickTTTAIMove();
      if (aiIdx !== -1) {
        tttState.board[aiIdx] = "O";
        res = getTTTWin(tttState.board);
        if (res) {
          tttState.over = true;
          tttState.winLine = res.line;
          setStatus("Tactical AI takes the round!", "lose");
          recordOutcome("ttt", false, 10, 0);
        } else if (!tttState.board.includes("")) {
          tttState.over = true;
          setStatus("Stalemate! Nobody yields.", "info");
          recordOutcome("ttt", false, 15, 0);
        } else {
          setStatus("Your turn (X).", "info");
        }
      }
    } else {
      tttState.turn = tttState.turn === "X" ? "O" : "X";
      setStatus("Player " + tttState.turn + " turn.", "info");
    }
    renderTTT();
  };

  const renderTTT = () => {
    elStageControls.innerHTML = "";
    const group = document.createElement("div");
    group.className = "control-group";

    const btnAI = document.createElement("button");
    btnAI.type = "button";
    btnAI.className = "mode-pill" + (tttState.ai ? " active" : "");
    btnAI.innerHTML = "<i class=\"fa-solid fa-robot\"></i><span>vs Smart AI</span>";
    btnAI.addEventListener("click", () => {
      tttState.ai = true;
      initTTT();
    });

    const btn2P = document.createElement("button");
    btn2P.type = "button";
    btn2P.className = "mode-pill" + (!tttState.ai ? " active" : "");
    btn2P.innerHTML = "<i class=\"fa-solid fa-user-group\"></i><span>2P Local</span>";
    btn2P.addEventListener("click", () => {
      tttState.ai = false;
      initTTT();
    });

    group.appendChild(btnAI);
    group.appendChild(btn2P);
    elStageControls.appendChild(group);

    elStageWorkspace.innerHTML = "";
    const boardEl = document.createElement("div");
    boardEl.className = "ttt-board";
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement("button");
      cell.type = "button";
      cell.className = "ttt-cell";
      if (tttState.board[i] === "X") cell.classList.add("mark-x");
      if (tttState.board[i] === "O") cell.classList.add("mark-o");
      if (tttState.winLine.includes(i)) cell.classList.add("win-cell");
      cell.textContent = tttState.board[i];
      cell.addEventListener("click", () => {
        handleTTTClick(i);
      });
      boardEl.appendChild(cell);
    }
    elStageWorkspace.appendChild(boardEl);
  };

  const scoreWordGuess = (guess, secret) => {
    const result = ["absent", "absent", "absent", "absent", "absent"];
    const pool = {};
    for (let i = 0; i < 5; i++) {
      const sChar = secret.charAt(i);
      if (guess.charAt(i) === sChar) {
        result[i] = "correct";
      } else {
        pool[sChar] = (pool[sChar] || 0) + 1;
      }
    }
    for (let i = 0; i < 5; i++) {
      if (result[i] === "correct") continue;
      const gChar = guess.charAt(i);
      if (pool[gChar] && pool[gChar] > 0) {
        result[i] = "present";
        pool[gChar] -= 1;
      }
    }
    return result;
  };

  const initWordCipher = () => {
    const pick = WORD_CIPHER_BANK[Math.floor(Math.random() * WORD_CIPHER_BANK.length)];
    wcState.secret = pick.word;
    wcState.clue = pick.clue;
    wcState.showClue = false;
    wcState.guesses = [];
    wcState.current = "";
    wcState.over = false;
    wcState.won = false;
    setStatus("Enter a 5-letter word. 6 attempts remaining.", "info");
    renderWordCipher();
  };

  const handleWordKey = (key) => {
    if (wcState.over) return;
    if (key === "BACKSPACE") {
      if (wcState.current.length > 0) {
        wcState.current = wcState.current.slice(0, -1);
        renderWordCipher();
      }
      return;
    }
    if (key === "ENTER") {
      if (wcState.current.length !== 5) {
        setStatus("Word must be exactly 5 letters.", "lose");
        return;
      }
      const evaluation = scoreWordGuess(wcState.current, wcState.secret);
      wcState.guesses.push({ word: wcState.current, states: evaluation });
      if (wcState.current === wcState.secret) {
        wcState.over = true;
        wcState.won = true;
        const xp = wcState.showClue ? 45 : 65;
        setStatus("Cipher cracked in " + wcState.guesses.length + " tries! Word: " + wcState.secret, "win");
        recordOutcome("wordcipher", true, xp, wcState.guesses.length);
      } else if (wcState.guesses.length >= 6) {
        wcState.over = true;
        setStatus("Out of attempts. Secret word was " + wcState.secret + ".", "lose");
        recordOutcome("wordcipher", false, 10, 0);
      } else {
        const left = 6 - wcState.guesses.length;
        setStatus(left + (left === 1 ? " attempt" : " attempts") + " remaining.", "info");
      }
      wcState.current = "";
      renderWordCipher();
      return;
    }
    if (key.length === 1 && key >= "A" && key <= "Z" && wcState.current.length < 5) {
      wcState.current += key;
      renderWordCipher();
    }
  };

  const renderWordCipher = () => {
    elStageControls.innerHTML = "";
    const leftGroup = document.createElement("div");
    leftGroup.className = "control-group";

    const clueBtn = document.createElement("button");
    clueBtn.type = "button";
    clueBtn.className = "mode-pill" + (wcState.showClue ? " active" : "");
    clueBtn.innerHTML = "<i class=\"fa-solid fa-lightbulb\"></i><span>" + (wcState.showClue ? "Clue Active" : "Reveal Clue") + "</span>";
    clueBtn.addEventListener("click", () => {
      wcState.showClue = true;
      renderWordCipher();
    });
    leftGroup.appendChild(clueBtn);

    const triesPill = document.createElement("span");
    triesPill.className = "stat-pill";
    triesPill.innerHTML = "<i class=\"fa-solid fa-list-ol\"></i><span>Row " + wcState.guesses.length + " / 6</span>";
    elStageControls.appendChild(leftGroup);
    elStageControls.appendChild(triesPill);

    elStageWorkspace.innerHTML = "";
    const wrap = document.createElement("div");
    wrap.className = "wc-wrap";

    if (wcState.showClue) {
      const clueBox = document.createElement("div");
      clueBox.className = "wc-clue";
      clueBox.innerHTML = "<i class=\"fa-solid fa-key\"></i> Clue: " + wcState.clue;
      wrap.appendChild(clueBox);
    }

    const grid = document.createElement("div");
    grid.className = "wc-grid";
    for (let r = 0; r < 6; r++) {
      const row = document.createElement("div");
      row.className = "wc-row";
      for (let c = 0; c < 5; c++) {
        const tile = document.createElement("div");
        tile.className = "wc-tile";
        if (r < wcState.guesses.length) {
          tile.textContent = wcState.guesses[r].word.charAt(c);
          tile.classList.add(wcState.guesses[r].states[c]);
        } else if (r === wcState.guesses.length && c < wcState.current.length) {
          tile.textContent = wcState.current.charAt(c);
          tile.classList.add("filled");
        }
        row.appendChild(tile);
      }
      grid.appendChild(row);
    }
    wrap.appendChild(grid);

    const keyStatus = {};
    const priority = { absent: 1, present: 2, correct: 3 };
    wcState.guesses.forEach((g) => {
      for (let i = 0; i < 5; i++) {
        const ch = g.word.charAt(i);
        const st = g.states[i];
        if (!keyStatus[ch] || priority[st] > priority[keyStatus[ch]]) {
          keyStatus[ch] = st;
        }
      }
    });

    const rows = [
      ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
      ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
      ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACKSPACE"]
    ];
    const kbd = document.createElement("div");
    kbd.className = "wc-keyboard";
    rows.forEach((rowKeys) => {
      const kRow = document.createElement("div");
      kRow.className = "wc-key-row";
      rowKeys.forEach((k) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "wc-key";
        if (k === "ENTER" || k === "BACKSPACE") {
          btn.classList.add("wc-key-wide");
          btn.innerHTML = k === "ENTER" ? "ENTER" : "<i class=\"fa-solid fa-delete-left\"></i>";
        } else {
          btn.textContent = k;
          if (keyStatus[k]) btn.classList.add(keyStatus[k]);
        }
        btn.addEventListener("click", () => {
          handleWordKey(k);
        });
        kRow.appendChild(btn);
      });
      kbd.appendChild(kRow);
    });
    wrap.appendChild(kbd);
    elStageWorkspace.appendChild(wrap);
  };

  const shuffleArray = (arr) => {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = copy[i];
      copy[i] = copy[j];
      copy[j] = tmp;
    }
    return copy;
  };

  const initMemory = () => {
    const pairCount = memState.size / 2;
    const deck = [];
    for (let i = 0; i < pairCount; i++) {
      deck.push({ icon: MEMORY_ICONS[i], matched: false });
      deck.push({ icon: MEMORY_ICONS[i], matched: false });
    }
    memState.cards = shuffleArray(deck);
    memState.flipped = [];
    memState.mismatch = [];
    memState.moves = 0;
    memState.pairs = 0;
    memState.over = false;
    setStatus("Match all " + pairCount + " neon pairs.", "info");
    renderMemory();
  };

  const handleMemoryClick = (idx) => {
    if (memState.over) return;
    if (memState.cards[idx].matched) return;
    if (memState.flipped.includes(idx)) return;

    if (memState.mismatch.length > 0) {
      memState.flipped = [];
      memState.mismatch = [];
    }

    memState.flipped.push(idx);
    if (memState.flipped.length === 2) {
      memState.moves += 1;
      const first = memState.flipped[0];
      const second = memState.flipped[1];
      if (memState.cards[first].icon === memState.cards[second].icon) {
        memState.cards[first].matched = true;
        memState.cards[second].matched = true;
        memState.pairs += 1;
        memState.flipped = [];
        const totalPairs = memState.size / 2;
        if (memState.pairs === totalPairs) {
          memState.over = true;
          const xp = memState.size === 16 ? 55 : 40;
          setStatus("Matrix cleared in " + memState.moves + " moves!", "win");
          recordOutcome("memory", true, xp, memState.moves);
        } else {
          setStatus("Pair locked! " + memState.pairs + " / " + totalPairs + " matched.", "info");
        }
      } else {
        memState.mismatch = [first, second];
        setStatus("Mismatch — click any card to continue immediately.", "lose");
      }
    }
    renderMemory();
  };

  const renderMemory = () => {
    elStageControls.innerHTML = "";
    const group = document.createElement("div");
    group.className = "control-group";

    const btn12 = document.createElement("button");
    btn12.type = "button";
    btn12.className = "mode-pill" + (memState.size === 12 ? " active" : "");
    btn12.textContent = "Easy (12 Cards)";
    btn12.addEventListener("click", () => {
      memState.size = 12;
      initMemory();
    });

    const btn16 = document.createElement("button");
    btn16.type = "button";
    btn16.className = "mode-pill" + (memState.size === 16 ? " active" : "");
    btn16.textContent = "Classic (16 Cards)";
    btn16.addEventListener("click", () => {
      memState.size = 16;
      initMemory();
    });

    group.appendChild(btn12);
    group.appendChild(btn16);

    const stats = document.createElement("span");
    stats.className = "stat-pill";
    stats.innerHTML = "<i class=\"fa-solid fa-arrows-rotate\"></i><span>Moves: " + memState.moves + "</span>";
    elStageControls.appendChild(group);
    elStageControls.appendChild(stats);

    elStageWorkspace.innerHTML = "";
    const grid = document.createElement("div");
    grid.className = "mem-grid";

    for (let i = 0; i < memState.cards.length; i++) {
      const cardData = memState.cards[i];
      const cardBtn = document.createElement("button");
      cardBtn.type = "button";
      cardBtn.className = "mem-card";
      if (cardData.matched) cardBtn.classList.add("matched");
      if (memState.flipped.includes(i)) cardBtn.classList.add("flipped");
      if (memState.mismatch.includes(i)) cardBtn.classList.add("mismatch");

      cardBtn.innerHTML =
        "<div class=\"mem-card-inner\">" +
          "<div class=\"mem-card-face mem-card-front\"><i class=\"fa-solid fa-diamond\"></i></div>" +
          "<div class=\"mem-card-face mem-card-back\"><i class=\"fa-solid " + cardData.icon + "\"></i></div>" +
        "</div>";
      cardBtn.addEventListener("click", () => {
        handleMemoryClick(i);
      });
      grid.appendChild(cardBtn);
    }
    elStageWorkspace.appendChild(grid);
  };

  const generateUniqueDigits = (len) => {
    let code = "";
    while (code.length < len) {
      const d = String(Math.floor(Math.random() * 10));
      if (!code.includes(d)) {
        code += d;
      }
    }
    return code;
  };

  const isDigitsOnly = (str) => {
    for (let i = 0; i < str.length; i++) {
      const ch = str.charAt(i);
      if (ch < "0" || ch > "9") return false;
    }
    return true;
  };

  const hasDuplicateChars = (str) => {
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length; j++) {
        if (str.charAt(i) === str.charAt(j)) return true;
      }
    }
    return false;
  };

  const initCracker = () => {
    ncState.secret = generateUniqueDigits(ncState.digits);
    ncState.log = [];
    ncState.over = false;
    ncState.won = false;
    setStatus("Crack the " + ncState.digits + "-digit unique code in 10 attempts.", "info");
    renderCracker("");
  };

  const renderCracker = (errMsg) => {
    elStageControls.innerHTML = "";
    const group = document.createElement("div");
    group.className = "control-group";

    const btn3 = document.createElement("button");
    btn3.type = "button";
    btn3.className = "mode-pill" + (ncState.digits === 3 ? " active" : "");
    btn3.textContent = "3 Digits";
    btn3.addEventListener("click", () => {
      ncState.digits = 3;
      initCracker();
    });

    const btn4 = document.createElement("button");
    btn4.type = "button";
    btn4.className = "mode-pill" + (ncState.digits === 4 ? " active" : "");
    btn4.textContent = "4 Digits";
    btn4.addEventListener("click", () => {
      ncState.digits = 4;
      initCracker();
    });

    group.appendChild(btn3);
    group.appendChild(btn4);

    const tries = document.createElement("span");
    tries.className = "stat-pill";
    tries.innerHTML = "<i class=\"fa-solid fa-shield\"></i><span>Tries: " + ncState.log.length + " / 10</span>";
    elStageControls.appendChild(group);
    elStageControls.appendChild(tries);

    elStageWorkspace.innerHTML = "";
    const wrap = document.createElement("div");
    wrap.className = "nc-wrap";

    const form = document.createElement("form");
    form.className = "nc-form";
    form.setAttribute("novalidate", "true");

    const input = document.createElement("input");
    input.type = "text";
    input.className = "nc-input";
    input.maxLength = ncState.digits;
    input.placeholder = ncState.digits === 3 ? "e.g. 482" : "e.g. 4829";
    input.disabled = ncState.over;

    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.className = "btn btn-primary";
    submitBtn.disabled = ncState.over;
    submitBtn.innerHTML = "<i class=\"fa-solid fa-unlock-keyhole\"></i><span>Crack</span>";

    form.appendChild(input);
    form.appendChild(submitBtn);
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (ncState.over) return;
      const val = input.value.trim();
      if (val === "") {
        renderCracker("Please enter a code before submitting.");
        return;
      }
      if (!isDigitsOnly(val)) {
        renderCracker("Digits 0–9 only. No letters or spaces.");
        return;
      }
      if (val.length !== ncState.digits) {
        renderCracker("Code must be exactly " + ncState.digits + " digits long.");
        return;
      }
      if (hasDuplicateChars(val)) {
        renderCracker("All digits must be unique (no repeats).");
        return;
      }

      let exact = 0;
      let partial = 0;
      for (let i = 0; i < ncState.digits; i++) {
        const ch = val.charAt(i);
        if (ch === ncState.secret.charAt(i)) {
          exact += 1;
        } else if (ncState.secret.includes(ch)) {
          partial += 1;
        }
      }
      ncState.log.unshift({ guess: val, exact: exact, partial: partial, attempt: ncState.log.length + 1 });

      if (exact === ncState.digits) {
        ncState.over = true;
        ncState.won = true;
        const xp = ncState.digits === 4 ? 60 : 45;
        setStatus("Vault unlocked in " + ncState.log.length + " tries! Code: " + ncState.secret, "win");
        recordOutcome("cracker", true, xp, ncState.log.length);
      } else if (ncState.log.length >= 10) {
        ncState.over = true;
        setStatus("Vault locked down! The secret code was " + ncState.secret + ".", "lose");
        recordOutcome("cracker", false, 10, 0);
      } else {
        setStatus(exact + " exact, " + partial + " misplaced. " + (10 - ncState.log.length) + " tries left.", "info");
      }
      renderCracker("");
    });

    wrap.appendChild(form);

    if (errMsg) {
      const errEl = document.createElement("p");
      errEl.className = "nc-error";
      errEl.textContent = errMsg;
      wrap.appendChild(errEl);
    }

    const legend = document.createElement("div");
    legend.className = "nc-legend";
    legend.innerHTML =
      "<span><i class=\"nc-dot nc-dot-exact\"></i> Exact Spot</span>" +
      "<span><i class=\"nc-dot nc-dot-partial\"></i> Wrong Spot</span>";
    wrap.appendChild(legend);

    const history = document.createElement("div");
    history.className = "nc-history";
    ncState.log.forEach((entry) => {
      const row = document.createElement("div");
      row.className = "nc-row";
      let dotsHtml = "";
      for (let i = 0; i < entry.exact; i++) dotsHtml += "<span class=\"nc-dot nc-dot-exact\"></span>";
      for (let i = 0; i < entry.partial; i++) dotsHtml += "<span class=\"nc-dot nc-dot-partial\"></span>";
      const misses = ncState.digits - entry.exact - entry.partial;
      for (let i = 0; i < misses; i++) dotsHtml += "<span class=\"nc-dot nc-dot-miss\"></span>";

      row.innerHTML =
        "<span class=\"nc-attempt\">#" + entry.attempt + "</span>" +
        "<span class=\"nc-guess\">" + entry.guess + "</span>" +
        "<span class=\"nc-dots\">" + dotsHtml + "</span>";
      history.appendChild(row);
    });
    wrap.appendChild(history);
    elStageWorkspace.appendChild(wrap);
    if (!ncState.over) input.focus();
  };

  const toggleLightsAt = (grid, r, c) => {
    const dirs = [[0, 0], [-1, 0], [1, 0], [0, -1], [0, 1]];
    for (let i = 0; i < dirs.length; i++) {
      const nr = r + dirs[i][0];
      const nc = c + dirs[i][1];
      if (nr >= 0 && nr < 5 && nc >= 0 && nc < 5) {
        grid[nr][nc] = !grid[nr][nc];
      }
    }
  };

  const countLitNodes = (grid) => {
    let total = 0;
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 5; c++) {
        if (grid[r][c]) total += 1;
      }
    }
    return total;
  };

  const initLightsOut = () => {
    const grid = [];
    for (let r = 0; r < 5; r++) {
      const row = [];
      for (let c = 0; c < 5; c++) row.push(false);
      grid.push(row);
    }
    const seedCount = 7;
    const picked = [];
    while (picked.length < seedCount) {
      const idx = Math.floor(Math.random() * 25);
      if (!picked.includes(idx)) {
        picked.push(idx);
        toggleLightsAt(grid, Math.floor(idx / 5), idx % 5);
      }
    }
    if (countLitNodes(grid) === 0) {
      toggleLightsAt(grid, 2, 2);
    }
    loState.grid = grid;
    loState.moves = 0;
    loState.par = seedCount;
    loState.over = false;
    setStatus("Extinguish all " + countLitNodes(grid) + " active neon nodes.", "info");
    renderLightsOut();
  };

  const handleLightsClick = (r, c) => {
    if (loState.over) return;
    toggleLightsAt(loState.grid, r, c);
    loState.moves += 1;
    const lit = countLitNodes(loState.grid);
    if (lit === 0) {
      loState.over = true;
      const bonus = loState.moves <= loState.par ? 65 : 45;
      setStatus("Blackout complete in " + loState.moves + " moves!", "win");
      recordOutcome("lightsout", true, bonus, loState.moves);
    } else {
      setStatus(lit + " neon " + (lit === 1 ? "node" : "nodes") + " remaining.", "info");
    }
    renderLightsOut();
  };

  const renderLightsOut = () => {
    elStageControls.innerHTML = "";
    const parPill = document.createElement("span");
    parPill.className = "stat-pill";
    parPill.innerHTML = "<i class=\"fa-solid fa-bullseye\"></i><span>Target Par: " + loState.par + "</span>";

    const movePill = document.createElement("span");
    movePill.className = "stat-pill";
    movePill.innerHTML = "<i class=\"fa-solid fa-bolt\"></i><span>Moves: " + loState.moves + "</span>";

    elStageControls.appendChild(parPill);
    elStageControls.appendChild(movePill);

    elStageWorkspace.innerHTML = "";
    const gridEl = document.createElement("div");
    gridEl.className = "lo-grid";
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 5; c++) {
        const cell = document.createElement("button");
        cell.type = "button";
        cell.className = "lo-cell" + (loState.grid[r][c] ? " lit" : "");
        cell.innerHTML = loState.grid[r][c] ? "<i class=\"fa-solid fa-lightbulb\"></i>" : "<i class=\"fa-regular fa-circle\"></i>";
        cell.addEventListener("click", () => {
          handleLightsClick(r, c);
        });
        gridEl.appendChild(cell);
      }
    }
    elStageWorkspace.appendChild(gridEl);
  };

  const spawn2048Tile = () => {
    const empty = [];
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        if (g2048State.board[r][c] === 0) empty.push([r, c]);
      }
    }
    if (empty.length === 0) return;
    const spot = empty[Math.floor(Math.random() * empty.length)];
    g2048State.board[spot[0]][spot[1]] = Math.random() < 0.9 ? 2 : 4;
  };

  const slide2048Line = (line) => {
    const filtered = line.filter((n) => n !== 0);
    const merged = [];
    let gained = 0;
    let i = 0;
    while (i < filtered.length) {
      if (i + 1 < filtered.length && filtered[i] === filtered[i + 1]) {
        const doubled = filtered[i] * 2;
        merged.push(doubled);
        gained += doubled;
        i += 2;
      } else {
        merged.push(filtered[i]);
        i += 1;
      }
    }
    while (merged.length < 4) merged.push(0);
    return { line: merged, gained: gained };
  };

  const canMove2048 = () => {
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        const val = g2048State.board[r][c];
        if (val === 0) return true;
        if (c < 3 && val === g2048State.board[r][c + 1]) return true;
        if (r < 3 && val === g2048State.board[r + 1][c]) return true;
      }
    }
    return false;
  };

  const getMax2048Tile = () => {
    let maxVal = 0;
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        if (g2048State.board[r][c] > maxVal) maxVal = g2048State.board[r][c];
      }
    }
    return maxVal;
  };

  const init2048 = () => {
    g2048State.board = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    g2048State.score = 0;
    g2048State.over = false;
    g2048State.milestones = [];
    spawn2048Tile();
    spawn2048Tile();
    setStatus("Fuse matching power tiles toward the 2048 core.", "info");
    render2048();
  };

  const move2048 = (dir) => {
    if (g2048State.over) return;
    let moved = false;
    let addedScore = 0;

    if (dir === "left" || dir === "right") {
      for (let r = 0; r < 4; r++) {
        const original = g2048State.board[r].slice();
        const input = dir === "right" ? original.slice().reverse() : original.slice();
        const res = slide2048Line(input);
        const finalLine = dir === "right" ? res.line.slice().reverse() : res.line;
        for (let c = 0; c < 4; c++) {
          if (original[c] !== finalLine[c]) moved = true;
          g2048State.board[r][c] = finalLine[c];
        }
        addedScore += res.gained;
      }
    } else {
      for (let c = 0; c < 4; c++) {
        const original = [
          g2048State.board[0][c],
          g2048State.board[1][c],
          g2048State.board[2][c],
          g2048State.board[3][c]
        ];
        const input = dir === "down" ? original.slice().reverse() : original.slice();
        const res = slide2048Line(input);
        const finalLine = dir === "down" ? res.line.slice().reverse() : res.line;
        for (let r = 0; r < 4; r++) {
          if (original[r] !== finalLine[r]) moved = true;
          g2048State.board[r][c] = finalLine[r];
        }
        addedScore += res.gained;
      }
    }

    if (!moved) return;
    g2048State.score += addedScore;
    spawn2048Tile();

    const maxTile = getMax2048Tile();
    const targets = [256, 512, 1024, 2048];
    for (let i = 0; i < targets.length; i++) {
      const m = targets[i];
      if (maxTile >= m && !g2048State.milestones.includes(m)) {
        g2048State.milestones.push(m);
        if (m === 2048) {
          setStatus("2048 Core Forged! Keep pushing for a higher score.", "win");
          recordOutcome("g2048", true, 120, g2048State.score);
        } else {
          showToast("Milestone reached: " + m + " Tile!", "info");
          appState.xp += 20;
          if (appState.records.g2048 === null || g2048State.score > appState.records.g2048) {
            appState.records.g2048 = g2048State.score;
          }
          evaluateBadges();
          saveState();
          syncGlobalUI();
        }
      }
    }

    if (!canMove2048()) {
      g2048State.over = true;
      setStatus("No legal merges left! Final Score: " + g2048State.score, "lose");
      recordOutcome("g2048", maxTile >= 512, maxTile >= 512 ? 40 : 15, g2048State.score);
    }
    render2048();
  };

  const render2048 = () => {
    elStageControls.innerHTML = "";
    const scorePill = document.createElement("span");
    scorePill.className = "stat-pill";
    scorePill.innerHTML = "<i class=\"fa-solid fa-star\"></i><span>Score: " + g2048State.score + "</span>";

    const maxPill = document.createElement("span");
    maxPill.className = "stat-pill";
    maxPill.innerHTML = "<i class=\"fa-solid fa-cubes\"></i><span>Peak Tile: " + getMax2048Tile() + "</span>";

    elStageControls.appendChild(scorePill);
    elStageControls.appendChild(maxPill);

    elStageWorkspace.innerHTML = "";
    const wrap = document.createElement("div");
    wrap.className = "g2048-wrap";

    const boardEl = document.createElement("div");
    boardEl.className = "g2048-board";
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        const val = g2048State.board[r][c];
        const tile = document.createElement("div");
        tile.className = "g2048-tile";
        if (val > 0) {
          tile.textContent = String(val);
          tile.classList.add(val <= 2048 ? "t-" + val : "t-high");
        }
        boardEl.appendChild(tile);
      }
    }
    wrap.appendChild(boardEl);

    const dpad = document.createElement("div");
    dpad.className = "dpad";
    const dirs = [
      { d: "up", cls: "dpad-up", icon: "fa-chevron-up" },
      { d: "left", cls: "dpad-left", icon: "fa-chevron-left" },
      { d: "down", cls: "dpad-down", icon: "fa-chevron-down" },
      { d: "right", cls: "dpad-right", icon: "fa-chevron-right" }
    ];
    dirs.forEach((item) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "dpad-btn " + item.cls;
      btn.setAttribute("aria-label", "Move " + item.d);
      btn.innerHTML = "<i class=\"fa-solid " + item.icon + "\"></i>";
      btn.addEventListener("click", () => {
        move2048(item.d);
      });
      dpad.appendChild(btn);
    });
    wrap.appendChild(dpad);
    elStageWorkspace.appendChild(wrap);
  };

  const isSlidingSolved = (tiles) => {
    for (let i = 0; i < tiles.length - 1; i++) {
      if (tiles[i] !== i + 1) return false;
    }
    return tiles[tiles.length - 1] === 0;
  };

  const initSliding = () => {
    const n = slState.size;
    const total = n * n;
    const tiles = [];
    for (let i = 1; i < total; i++) tiles.push(i);
    tiles.push(0);

    let emptyIdx = total - 1;
    let prevIdx = -1;
    const shuffles = n === 3 ? 45 : 95;

    for (let s = 0; s < shuffles; s++) {
      const er = Math.floor(emptyIdx / n);
      const ec = emptyIdx % n;
      const neighbors = [];
      if (er > 0) neighbors.push((er - 1) * n + ec);
      if (er < n - 1) neighbors.push((er + 1) * n + ec);
      if (ec > 0) neighbors.push(er * n + (ec - 1));
      if (ec < n - 1) neighbors.push(er * n + (ec + 1));

      const filtered = neighbors.filter((idx) => idx !== prevIdx);
      const pick = filtered[Math.floor(Math.random() * filtered.length)];
      tiles[emptyIdx] = tiles[pick];
      tiles[pick] = 0;
      prevIdx = emptyIdx;
      emptyIdx = pick;
    }

    if (isSlidingSolved(tiles)) {
      const swapIdx = total - 2;
      tiles[total - 1] = tiles[swapIdx];
      tiles[swapIdx] = 0;
    }

    slState.tiles = tiles;
    slState.moves = 0;
    slState.over = false;
    setStatus("Arrange tiles 1 to " + (total - 1) + " in order.", "info");
    renderSliding();
  };

  const handleSlidingClick = (idx) => {
    if (slState.over) return;
    const n = slState.size;
    const emptyIdx = slState.tiles.indexOf(0);
    const r1 = Math.floor(idx / n);
    const c1 = idx % n;
    const r2 = Math.floor(emptyIdx / n);
    const c2 = emptyIdx % n;
    if (Math.abs(r1 - r2) + Math.abs(c1 - c2) !== 1) return;

    slState.tiles[emptyIdx] = slState.tiles[idx];
    slState.tiles[idx] = 0;
    slState.moves += 1;

    if (isSlidingSolved(slState.tiles)) {
      slState.over = true;
      const xp = n === 4 ? 70 : 45;
      setStatus("Puzzle solved in " + slState.moves + " moves!", "win");
      recordOutcome("sliding", true, xp, slState.moves);
    }
    renderSliding();
  };

  const renderSliding = () => {
    elStageControls.innerHTML = "";
    const group = document.createElement("div");
    group.className = "control-group";

    const btn3 = document.createElement("button");
    btn3.type = "button";
    btn3.className = "mode-pill" + (slState.size === 3 ? " active" : "");
    btn3.textContent = "3x3 (8-Puzzle)";
    btn3.addEventListener("click", () => {
      slState.size = 3;
      initSliding();
    });

    const btn4 = document.createElement("button");
    btn4.type = "button";
    btn4.className = "mode-pill" + (slState.size === 4 ? " active" : "");
    btn4.textContent = "4x4 (15-Puzzle)";
    btn4.addEventListener("click", () => {
      slState.size = 4;
      initSliding();
    });

    group.appendChild(btn3);
    group.appendChild(btn4);

    const movesPill = document.createElement("span");
    movesPill.className = "stat-pill";
    movesPill.innerHTML = "<i class=\"fa-solid fa-up-down-left-right\"></i><span>Moves: " + slState.moves + "</span>";
    elStageControls.appendChild(group);
    elStageControls.appendChild(movesPill);

    elStageWorkspace.innerHTML = "";
    const grid = document.createElement("div");
    grid.className = "sl-grid size-" + slState.size;

    for (let i = 0; i < slState.tiles.length; i++) {
      const val = slState.tiles[i];
      const tile = document.createElement("button");
      tile.type = "button";
      tile.className = "sl-tile";
      if (val === 0) {
        tile.classList.add("empty");
      } else {
        tile.textContent = String(val);
        if (val === i + 1) tile.classList.add("correct-pos");
        tile.addEventListener("click", () => {
          handleSlidingClick(i);
        });
      }
      grid.appendChild(tile);
    }
    elStageWorkspace.appendChild(grid);
  };

  const initMines = () => {
    const board = [];
    for (let r = 0; r < 8; r++) {
      const row = [];
      for (let c = 0; c < 8; c++) {
        row.push({ mine: false, revealed: false, flagged: false, count: 0, boom: false });
      }
      board.push(row);
    }
    msState.board = board;
    msState.started = false;
    msState.flagMode = false;
    msState.flags = 0;
    msState.over = false;
    msState.won = false;
    setStatus("8x8 Grid — 10 hidden mines. First click is guaranteed safe.", "info");
    renderMines();
  };

  const placeMinesSafe = (safeR, safeC) => {
    let placed = 0;
    while (placed < 10) {
      const r = Math.floor(Math.random() * 8);
      const c = Math.floor(Math.random() * 8);
      if ((r === safeR && c === safeC) || msState.board[r][c].mine) continue;
      msState.board[r][c].mine = true;
      placed += 1;
    }
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        if (msState.board[r][c].mine) continue;
        let total = 0;
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            const nr = r + dr;
            const nc = c + dc;
            if (nr >= 0 && nr < 8 && nc >= 0 && nc < 8 && msState.board[nr][nc].mine) {
              total += 1;
            }
          }
        }
        msState.board[r][c].count = total;
      }
    }
  };

  const floodRevealMines = (startR, startC) => {
    const queue = [[startR, startC]];
    while (queue.length > 0) {
      const cur = queue.shift();
      const r = cur[0];
      const c = cur[1];
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          const nr = r + dr;
          const nc = c + dc;
          if (nr >= 0 && nr < 8 && nc >= 0 && nc < 8) {
            const cell = msState.board[nr][nc];
            if (!cell.revealed && !cell.flagged && !cell.mine) {
              cell.revealed = true;
              if (cell.count === 0) {
                queue.push([nr, nc]);
              }
            }
          }
        }
      }
    }
  };

  const toggleMineFlag = (r, c) => {
    if (msState.over) return;
    const cell = msState.board[r][c];
    if (cell.revealed) return;
    cell.flagged = !cell.flagged;
    msState.flags += cell.flagged ? 1 : -1;
    renderMines();
  };

  const handleMineReveal = (r, c) => {
    if (msState.over) return;
    const cell = msState.board[r][c];
    if (cell.revealed) return;
    if (msState.flagMode) {
      toggleMineFlag(r, c);
      return;
    }
    if (cell.flagged) return;

    if (!msState.started) {
      msState.started = true;
      placeMinesSafe(r, c);
    }

    cell.revealed = true;
    if (cell.mine) {
      cell.boom = true;
      msState.over = true;
      for (let rr = 0; rr < 8; rr++) {
        for (let cc = 0; cc < 8; cc++) {
          if (msState.board[rr][cc].mine) msState.board[rr][cc].revealed = true;
        }
      }
      setStatus("Mine detonated! Sector compromised.", "lose");
      recordOutcome("mines", false, 10, 0);
      renderMines();
      return;
    }

    if (cell.count === 0) {
      floodRevealMines(r, c);
    }

    let safeRevealed = 0;
    for (let rr = 0; rr < 8; rr++) {
      for (let cc = 0; cc < 8; cc++) {
        if (!msState.board[rr][cc].mine && msState.board[rr][cc].revealed) {
          safeRevealed += 1;
        }
      }
    }
    if (safeRevealed === 54) {
      msState.over = true;
      msState.won = true;
      for (let rr = 0; rr < 8; rr++) {
        for (let cc = 0; cc < 8; cc++) {
          if (msState.board[rr][cc].mine) msState.board[rr][cc].flagged = true;
        }
      }
      msState.flags = 10;
      setStatus("All 54 safe sectors cleared! Minefield neutralized.", "win");
      recordOutcome("mines", true, 75, 1);
    } else {
      setStatus((54 - safeRevealed) + " safe sectors remaining.", "info");
    }
    renderMines();
  };

  const renderMines = () => {
    elStageControls.innerHTML = "";
    const group = document.createElement("div");
    group.className = "control-group";

    const btnReveal = document.createElement("button");
    btnReveal.type = "button";
    btnReveal.className = "mode-pill" + (!msState.flagMode ? " active" : "");
    btnReveal.innerHTML = "<i class=\"fa-solid fa-eye\"></i><span>Reveal Mode</span>";
    btnReveal.addEventListener("click", () => {
      msState.flagMode = false;
      renderMines();
    });

    const btnFlag = document.createElement("button");
    btnFlag.type = "button";
    btnFlag.className = "mode-pill" + (msState.flagMode ? " active" : "");
    btnFlag.innerHTML = "<i class=\"fa-solid fa-flag\"></i><span>Flag Mode</span>";
    btnFlag.addEventListener("click", () => {
      msState.flagMode = true;
      renderMines();
    });

    group.appendChild(btnReveal);
    group.appendChild(btnFlag);

    const minesPill = document.createElement("span");
    minesPill.className = "stat-pill";
    minesPill.innerHTML = "<i class=\"fa-solid fa-bomb\"></i><span>Mines: " + (10 - msState.flags) + "</span>";
    elStageControls.appendChild(group);
    elStageControls.appendChild(minesPill);

    elStageWorkspace.innerHTML = "";
    const grid = document.createElement("div");
    grid.className = "ms-grid";

    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const cell = msState.board[r][c];
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "ms-cell";
        if (cell.revealed) {
          btn.classList.add("revealed");
          if (cell.mine) {
            btn.classList.add(cell.boom ? "boom" : "mine");
            btn.innerHTML = "<i class=\"fa-solid fa-bomb\"></i>";
          } else if (cell.count > 0) {
            btn.textContent = String(cell.count);
            btn.classList.add("ms-n" + cell.count);
          }
        } else if (cell.flagged) {
          btn.classList.add("flagged");
          btn.innerHTML = "<i class=\"fa-solid fa-flag\"></i>";
        }
        btn.addEventListener("click", () => {
          handleMineReveal(r, c);
        });
        btn.addEventListener("contextmenu", (event) => {
          event.preventDefault();
          toggleMineFlag(r, c);
        });
        grid.appendChild(btn);
      }
    }
    elStageWorkspace.appendChild(grid);
  };

  const getC4DropRow = (board, col) => {
    for (let r = 5; r >= 0; r--) {
      if (board[r][col] === 0) return r;
    }
    return -1;
  };

  const checkC4Win = (board, player) => {
    const dirs = [[0, 1], [1, 0], [1, 1], [1, -1]];
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 7; c++) {
        if (board[r][c] !== player) continue;
        for (let d = 0; d < dirs.length; d++) {
          const dr = dirs[d][0];
          const dc = dirs[d][1];
          const line = [[r, c]];
          for (let step = 1; step < 4; step++) {
            const nr = r + dr * step;
            const nc = c + dc * step;
            if (nr >= 0 && nr < 6 && nc >= 0 && nc < 7 && board[nr][nc] === player) {
              line.push([nr, nc]);
            } else {
              break;
            }
          }
          if (line.length === 4) return line;
        }
      }
    }
    return null;
  };

  const isC4Full = (board) => {
    for (let c = 0; c < 7; c++) {
      if (board[0][c] === 0) return false;
    }
    return true;
  };

  const pickC4AIMove = () => {
    for (let c = 0; c < 7; c++) {
      const r = getC4DropRow(c4State.board, c);
      if (r !== -1) {
        c4State.board[r][c] = 2;
        const win = checkC4Win(c4State.board, 2);
        c4State.board[r][c] = 0;
        if (win) return c;
      }
    }
    for (let c = 0; c < 7; c++) {
      const r = getC4DropRow(c4State.board, c);
      if (r !== -1) {
        c4State.board[r][c] = 1;
        const block = checkC4Win(c4State.board, 1);
        c4State.board[r][c] = 0;
        if (block) return c;
      }
    }
    const order = [3, 2, 4, 1, 5, 0, 6];
    for (let i = 0; i < order.length; i++) {
      if (getC4DropRow(c4State.board, order[i]) !== -1) return order[i];
    }
    return -1;
  };

  const initConnectFour = () => {
    const board = [];
    for (let r = 0; r < 6; r++) {
      board.push([0, 0, 0, 0, 0, 0, 0]);
    }
    c4State.board = board;
    c4State.turn = 1;
    c4State.over = false;
    c4State.winCells = [];
    c4State.hoverCol = -1;
    setStatus("Cyan Player turn — choose a column to drop your disc.", "info");
    renderConnectFour();
  };

  const handleC4Drop = (col) => {
    if (c4State.over) return;
    const row = getC4DropRow(c4State.board, col);
    if (row === -1) return;

    c4State.board[row][col] = c4State.turn;
    let win = checkC4Win(c4State.board, c4State.turn);
    if (win) {
      c4State.over = true;
      c4State.winCells = win;
      if (c4State.ai && c4State.turn === 1) {
        setStatus("Four in a row! You defeated the Arena AI.", "win");
        recordOutcome("c4", true, 55, 1);
      } else if (!c4State.ai) {
        setStatus((c4State.turn === 1 ? "Cyan" : "Rose") + " Player connects four!", "win");
        recordOutcome("c4", true, 35, 1);
      }
      renderConnectFour();
      return;
    }

    if (isC4Full(c4State.board)) {
      c4State.over = true;
      setStatus("Grid full! Match ends in a draw.", "info");
      recordOutcome("c4", false, 15, 0);
      renderConnectFour();
      return;
    }

    if (c4State.ai && c4State.turn === 1) {
      const aiCol = pickC4AIMove();
      if (aiCol !== -1) {
        const aiRow = getC4DropRow(c4State.board, aiCol);
        c4State.board[aiRow][aiCol] = 2;
        win = checkC4Win(c4State.board, 2);
        if (win) {
          c4State.over = true;
          c4State.winCells = win;
          setStatus("Arena AI connected four!", "lose");
          recordOutcome("c4", false, 10, 0);
        } else if (isC4Full(c4State.board)) {
          c4State.over = true;
          setStatus("Grid full! Match ends in a draw.", "info");
          recordOutcome("c4", false, 15, 0);
        } else {
          setStatus("Your turn (Cyan).", "info");
        }
      }
    } else {
      c4State.turn = c4State.turn === 1 ? 2 : 1;
      setStatus((c4State.turn === 1 ? "Cyan" : "Rose") + " Player turn.", "info");
    }
    renderConnectFour();
  };

  const isWinC4Cell = (r, c) => {
    return c4State.winCells.some((pair) => pair[0] === r && pair[1] === c);
  };

  const updateC4Preview = (col) => {
    c4State.hoverCol = col;
    const slots = elStageWorkspace.querySelectorAll(".c4-preview-slot");
    slots.forEach((slot, idx) => {
      slot.classList.remove("visible", "p1", "p2");
      if (!c4State.over && idx === col && getC4DropRow(c4State.board, col) !== -1) {
        slot.classList.add("visible");
        slot.classList.add(c4State.turn === 1 ? "p1" : "p2");
      }
    });
  };

  const renderConnectFour = () => {
    elStageControls.innerHTML = "";
    const group = document.createElement("div");
    group.className = "control-group";

    const btnAI = document.createElement("button");
    btnAI.type = "button";
    btnAI.className = "mode-pill" + (c4State.ai ? " active" : "");
    btnAI.innerHTML = "<i class=\"fa-solid fa-robot\"></i><span>vs Smart AI</span>";
    btnAI.addEventListener("click", () => {
      c4State.ai = true;
      initConnectFour();
    });

    const btn2P = document.createElement("button");
    btn2P.type = "button";
    btn2P.className = "mode-pill" + (!c4State.ai ? " active" : "");
    btn2P.innerHTML = "<i class=\"fa-solid fa-user-group\"></i><span>2P Local</span>";
    btn2P.addEventListener("click", () => {
      c4State.ai = false;
      initConnectFour();
    });

    group.appendChild(btnAI);
    group.appendChild(btn2P);
    elStageControls.appendChild(group);

    elStageWorkspace.innerHTML = "";
    const wrap = document.createElement("div");
    wrap.className = "c4-wrap";

    const previewRow = document.createElement("div");
    previewRow.className = "c4-preview-row";
    for (let c = 0; c < 7; c++) {
      const slot = document.createElement("div");
      slot.className = "c4-preview-slot";
      slot.innerHTML = "<i class=\"fa-solid fa-caret-down\"></i>";
      previewRow.appendChild(slot);
    }
    wrap.appendChild(previewRow);

    const boardEl = document.createElement("div");
    boardEl.className = "c4-board";
    boardEl.addEventListener("mouseleave", () => {
      updateC4Preview(-1);
    });

    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 7; c++) {
        const cell = document.createElement("button");
        cell.type = "button";
        cell.className = "c4-cell";
        const val = c4State.board[r][c];
        if (val !== 0) {
          const disc = document.createElement("span");
          disc.className = "c4-disc " + (val === 1 ? "p1" : "p2");
          if (isWinC4Cell(r, c)) disc.classList.add("win-disc");
          cell.appendChild(disc);
        }
        cell.addEventListener("mouseenter", () => {
          updateC4Preview(c);
        });
        cell.addEventListener("click", () => {
          handleC4Drop(c);
        });
        boardEl.appendChild(cell);
      }
    }
    wrap.appendChild(boardEl);
    elStageWorkspace.appendChild(wrap);
    if (c4State.hoverCol !== -1) updateC4Preview(c4State.hoverCol);
  };

  const initHangman = () => {
    const pick = HANGMAN_BANK[Math.floor(Math.random() * HANGMAN_BANK.length)];
    hmState.word = pick.word;
    hmState.cat = pick.cat;
    hmState.guessed = [];
    hmState.wrong = 0;
    hmState.over = false;
    hmState.won = false;
    setStatus("Shield Integrity: 6 / 6. Decode the vault word.", "info");
    renderHangman();
  };

  const handleHangmanLetter = (letter) => {
    if (hmState.over) return;
    if (hmState.guessed.includes(letter)) return;
    hmState.guessed.push(letter);

    if (!hmState.word.includes(letter)) {
      hmState.wrong += 1;
      if (hmState.wrong >= 6) {
        hmState.over = true;
        setStatus("Cyber-Shield shattered! The word was " + hmState.word + ".", "lose");
        recordOutcome("hangman", false, 10, 0);
      } else {
        setStatus("Shield hit! " + (6 - hmState.wrong) + " / 6 segments intact.", "lose");
      }
    } else {
      const letters = hmState.word.split("");
      const solved = letters.every((ch) => hmState.guessed.includes(ch));
      if (solved) {
        hmState.over = true;
        hmState.won = true;
        setStatus("Vault decoded with " + (6 - hmState.wrong) + " shield segments left!", "win");
        recordOutcome("hangman", true, 50, 1);
      } else {
        setStatus("Signal match! Keep decoding.", "info");
      }
    }
    renderHangman();
  };

  const renderHangman = () => {
    elStageControls.innerHTML = "";
    const catPill = document.createElement("span");
    catPill.className = "stat-pill";
    catPill.innerHTML = "<i class=\"fa-solid fa-tag\"></i><span>Category: " + hmState.cat + "</span>";

    const shieldPill = document.createElement("span");
    shieldPill.className = "stat-pill";
    shieldPill.innerHTML = "<i class=\"fa-solid fa-shield-halved\"></i><span>Shield: " + (6 - hmState.wrong) + " / 6</span>";

    elStageControls.appendChild(catPill);
    elStageControls.appendChild(shieldPill);

    elStageWorkspace.innerHTML = "";
    const wrap = document.createElement("div");
    wrap.className = "hm-wrap";

    const segPolys = [
      "84,12 146,48 84,84",
      "146,48 146,120 84,84",
      "146,120 84,156 84,84",
      "84,156 22,120 84,84",
      "22,120 22,48 84,84",
      "22,48 84,12 84,84"
    ];
    let svgInner = "";
    for (let i = 0; i < 6; i++) {
      const damagedCls = i < hmState.wrong ? " damaged" : "";
      svgInner += "<polygon points=\"" + segPolys[i] + "\" class=\"shield-seg" + damagedCls + "\"></polygon>";
    }

    const topRow = document.createElement("div");
    topRow.className = "hm-top";
    topRow.innerHTML = "<svg viewBox=\"0 0 168 168\" class=\"hm-shield-svg\" aria-label=\"Cyber Shield\">" + svgInner + "</svg>";

    const info = document.createElement("div");
    info.className = "hm-info";

    const catTag = document.createElement("span");
    catTag.className = "hm-cat";
    catTag.textContent = hmState.cat;
    info.appendChild(catTag);

    const wordEl = document.createElement("div");
    wordEl.className = "hm-word";
    for (let i = 0; i < hmState.word.length; i++) {
      const ch = hmState.word.charAt(i);
      const box = document.createElement("span");
      box.className = "hm-letter";
      if (hmState.guessed.includes(ch)) {
        box.textContent = ch;
        box.classList.add("revealed");
      } else if (hmState.over) {
        box.textContent = ch;
        box.classList.add("missed");
      }
      wordEl.appendChild(box);
    }
    info.appendChild(wordEl);
    topRow.appendChild(info);
    wrap.appendChild(topRow);

    const kbd = document.createElement("div");
    kbd.className = "hm-kbd";
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < alphabet.length; i++) {
      const letter = alphabet.charAt(i);
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "hm-key";
      btn.textContent = letter;
      if (hmState.guessed.includes(letter)) {
        btn.classList.add(hmState.word.includes(letter) ? "hit" : "miss");
        btn.disabled = true;
      }
      btn.addEventListener("click", () => {
        handleHangmanLetter(letter);
      });
      kbd.appendChild(btn);
    }
    wrap.appendChild(kbd);
    elStageWorkspace.appendChild(wrap);
  };

  const getRPSLSItem = (id) => {
    return RPSLS_ITEMS.find((item) => item.id === id);
  };

  const initRPSLS = () => {
    rpsState.pScore = 0;
    rpsState.cpuScore = 0;
    rpsState.draws = 0;
    rpsState.pMove = null;
    rpsState.cpuMove = null;
    rpsState.winner = "";
    rpsState.ruleText = "Choose your opening hand — first to 5 wins.";
    rpsState.over = false;
    setStatus("First to 5 points wins the RPSLS Duel.", "info");
    renderRPSLS();
  };

  const playRPSLS = (choiceId) => {
    if (rpsState.over) return;
    const cpuPick = RPSLS_ITEMS[Math.floor(Math.random() * RPSLS_ITEMS.length)].id;
    rpsState.pMove = choiceId;
    rpsState.cpuMove = cpuPick;

    if (choiceId === cpuPick) {
      rpsState.draws += 1;
      rpsState.winner = "draw";
      rpsState.ruleText = "Mirror hand! Round ends in a draw.";
      setStatus("Draw round — pick again.", "info");
    } else if (RPSLS_RULES[choiceId][cpuPick]) {
      rpsState.pScore += 1;
      rpsState.winner = "player";
      rpsState.ruleText = RPSLS_RULES[choiceId][cpuPick] + "!";
      if (rpsState.pScore >= 5) {
        rpsState.over = true;
        setStatus("Duel Won " + rpsState.pScore + "–" + rpsState.cpuScore + "!", "win");
        recordOutcome("rpsls", true, 45, 1);
      } else {
        setStatus("Point to Pilot! Score: " + rpsState.pScore + " – " + rpsState.cpuScore, "win");
      }
    } else {
      rpsState.cpuScore += 1;
      rpsState.winner = "cpu";
      rpsState.ruleText = RPSLS_RULES[cpuPick][choiceId] + "!";
      if (rpsState.cpuScore >= 5) {
        rpsState.over = true;
        setStatus("CPU takes the duel " + rpsState.cpuScore + "–" + rpsState.pScore + ".", "lose");
        recordOutcome("rpsls", false, 10, 0);
      } else {
        setStatus("Point to CPU. Score: " + rpsState.pScore + " – " + rpsState.cpuScore, "lose");
      }
    }
    renderRPSLS();
  };

  const renderRPSLS = () => {
    elStageControls.innerHTML = "";
    const targetPill = document.createElement("span");
    targetPill.className = "stat-pill";
    targetPill.innerHTML = "<i class=\"fa-solid fa-trophy\"></i><span>Target: First to 5</span>";
    elStageControls.appendChild(targetPill);

    elStageWorkspace.innerHTML = "";
    const wrap = document.createElement("div");
    wrap.className = "rps-wrap";

    const board = document.createElement("div");
    board.className = "rps-scoreboard";
    board.innerHTML =
      "<div class=\"rps-score-box\"><span class=\"rps-score-label\">Pilot</span><strong class=\"rps-score-val\">" + rpsState.pScore + "</strong></div>" +
      "<div class=\"rps-score-box\"><span class=\"rps-score-label\">Draws</span><strong class=\"rps-score-val\">" + rpsState.draws + "</strong></div>" +
      "<div class=\"rps-score-box\"><span class=\"rps-score-label\">CPU</span><strong class=\"rps-score-val\">" + rpsState.cpuScore + "</strong></div>";
    wrap.appendChild(board);

    const pObj = rpsState.pMove ? getRPSLSItem(rpsState.pMove) : null;
    const cObj = rpsState.cpuMove ? getRPSLSItem(rpsState.cpuMove) : null;

    const arena = document.createElement("div");
    arena.className = "rps-arena";
    arena.innerHTML =
      "<div class=\"rps-slot" + (rpsState.winner === "player" ? " winner" : "") + "\">" +
        "<i class=\"fa-solid " + (pObj ? pObj.icon : "fa-question") + "\"></i>" +
        "<span>" + (pObj ? pObj.label : "Pilot") + "</span>" +
      "</div>" +
      "<div class=\"rps-vs\">VS</div>" +
      "<div class=\"rps-slot" + (rpsState.winner === "cpu" ? " winner" : "") + "\">" +
        "<i class=\"fa-solid " + (cObj ? cObj.icon : "fa-question") + "\"></i>" +
        "<span>" + (cObj ? cObj.label : "CPU") + "</span>" +
      "</div>";
    wrap.appendChild(arena);

    const ruleEl = document.createElement("div");
    ruleEl.className = "rps-rule-text";
    ruleEl.textContent = rpsState.ruleText;
    wrap.appendChild(ruleEl);

    const choices = document.createElement("div");
    choices.className = "rps-choices";
    RPSLS_ITEMS.forEach((item) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "rps-choice-btn";
      btn.disabled = rpsState.over;
      btn.innerHTML = "<i class=\"fa-solid " + item.icon + "\"></i><span>" + item.label + "</span>";
      btn.addEventListener("click", () => {
        playRPSLS(item.id);
      });
      choices.appendChild(btn);
    });
    wrap.appendChild(choices);
    elStageWorkspace.appendChild(wrap);
  };

  const generateMastermindSecret = (unique) => {
    const code = [];
    while (code.length < 4) {
      const c = Math.floor(Math.random() * 6);
      if (!unique || !code.includes(c)) {
        code.push(c);
      }
    }
    return code;
  };

  const evaluateMastermind = (guess, secret) => {
    let exact = 0;
    let near = 0;
    const sUsed = [false, false, false, false];
    const gUsed = [false, false, false, false];

    for (let i = 0; i < 4; i++) {
      if (guess[i] === secret[i]) {
        exact += 1;
        sUsed[i] = true;
        gUsed[i] = true;
      }
    }
    for (let i = 0; i < 4; i++) {
      if (gUsed[i]) continue;
      for (let j = 0; j < 4; j++) {
        if (!sUsed[j] && guess[i] === secret[j]) {
          near += 1;
          sUsed[j] = true;
          break;
        }
      }
    }
    return { exact: exact, near: near };
  };

  const initMastermind = () => {
    mmState.secret = generateMastermindSecret(mmState.unique);
    mmState.current = [null, null, null, null];
    mmState.log = [];
    mmState.over = false;
    mmState.won = false;
    setStatus("Crack the 4-pigment sequence in 10 rounds.", "info");
    renderMastermind();
  };

  const pickMastermindColor = (colorIdx) => {
    if (mmState.over) return;
    if (mmState.unique && mmState.current.includes(colorIdx)) {
      showToast("Unique mode: each pigment can only be used once.", "warn");
      return;
    }
    const openIdx = mmState.current.indexOf(null);
    if (openIdx === -1) return;
    mmState.current[openIdx] = colorIdx;
    renderMastermind();
  };

  const submitMastermindGuess = () => {
    if (mmState.over) return;
    if (mmState.current.includes(null)) {
      setStatus("Fill all 4 pigment slots before checking.", "lose");
      return;
    }
    const guessCopy = mmState.current.slice();
    const res = evaluateMastermind(guessCopy, mmState.secret);
    mmState.log.unshift({ guess: guessCopy, exact: res.exact, near: res.near, attempt: mmState.log.length + 1 });
    mmState.current = [null, null, null, null];

    if (res.exact === 4) {
      mmState.over = true;
      mmState.won = true;
      const xp = mmState.unique ? 55 : 70;
      setStatus("Mastermind cracked in " + mmState.log.length + " rounds!", "win");
      recordOutcome("mastermind", true, xp, mmState.log.length);
    } else if (mmState.log.length >= 10) {
      mmState.over = true;
      setStatus("Out of rounds! Secret sequence revealed below.", "lose");
      recordOutcome("mastermind", false, 10, 0);
    } else {
      setStatus(res.exact + " exact, " + res.near + " misplaced. " + (10 - mmState.log.length) + " rounds left.", "info");
    }
    renderMastermind();
  };

  const renderMastermind = () => {
    elStageControls.innerHTML = "";
    const group = document.createElement("div");
    group.className = "control-group";

    const btnUnique = document.createElement("button");
    btnUnique.type = "button";
    btnUnique.className = "mode-pill" + (mmState.unique ? " active" : "");
    btnUnique.textContent = "Unique Pigments";
    btnUnique.addEventListener("click", () => {
      mmState.unique = true;
      initMastermind();
    });

    const btnDup = document.createElement("button");
    btnDup.type = "button";
    btnDup.className = "mode-pill" + (!mmState.unique ? " active" : "");
    btnDup.textContent = "Duplicates Allowed";
    btnDup.addEventListener("click", () => {
      mmState.unique = false;
      initMastermind();
    });

    group.appendChild(btnUnique);
    group.appendChild(btnDup);

    const roundsPill = document.createElement("span");
    roundsPill.className = "stat-pill";
    roundsPill.innerHTML = "<i class=\"fa-solid fa-layer-group\"></i><span>Round: " + mmState.log.length + " / 10</span>";
    elStageControls.appendChild(group);
    elStageControls.appendChild(roundsPill);

    elStageWorkspace.innerHTML = "";
    const wrap = document.createElement("div");
    wrap.className = "mm-wrap";

    const palette = document.createElement("div");
    palette.className = "mm-palette";
    for (let i = 0; i < 6; i++) {
      const sw = document.createElement("button");
      sw.type = "button";
      sw.className = "mm-swatch c-" + i;
      sw.setAttribute("aria-label", "Pick " + MASTERMIND_NAMES[i]);
      sw.disabled = mmState.over;
      sw.addEventListener("click", () => {
        pickMastermindColor(i);
      });
      palette.appendChild(sw);
    }
    wrap.appendChild(palette);

    const curBar = document.createElement("div");
    curBar.className = "mm-current-bar";

    const slotsEl = document.createElement("div");
    slotsEl.className = "mm-slots";
    for (let i = 0; i < 4; i++) {
      const slot = document.createElement("button");
      slot.type = "button";
      slot.className = "mm-slot";
      if (mmState.current[i] !== null) {
        slot.classList.add("filled", "mm-swatch", "c-" + mmState.current[i]);
      }
      slot.setAttribute("aria-label", "Slot " + (i + 1));
      slot.addEventListener("click", () => {
        if (mmState.over) return;
        mmState.current[i] = null;
        renderMastermind();
      });
      slotsEl.appendChild(slot);
    }
    curBar.appendChild(slotsEl);

    const barActions = document.createElement("div");
    barActions.className = "control-group";

    const clearBtn = document.createElement("button");
    clearBtn.type = "button";
    clearBtn.className = "btn btn-ghost btn-sm";
    clearBtn.textContent = "Clear";
    clearBtn.disabled = mmState.over;
    clearBtn.addEventListener("click", () => {
      mmState.current = [null, null, null, null];
      renderMastermind();
    });

    const checkBtn = document.createElement("button");
    checkBtn.type = "button";
    checkBtn.className = "btn btn-primary btn-sm";
    checkBtn.innerHTML = "<i class=\"fa-solid fa-check\"></i><span>Check</span>";
    checkBtn.disabled = mmState.over;
    checkBtn.addEventListener("click", () => {
      submitMastermindGuess();
    });

    barActions.appendChild(clearBtn);
    barActions.appendChild(checkBtn);
    curBar.appendChild(barActions);
    wrap.appendChild(curBar);

    if (mmState.over) {
      const reveal = document.createElement("div");
      reveal.className = "mm-secret-reveal";
      let secretHtml = "<span>Secret Code:</span><div class=\"mm-slots\">";
      for (let i = 0; i < 4; i++) {
        secretHtml += "<span class=\"mm-slot filled mm-swatch c-" + mmState.secret[i] + "\"></span>";
      }
      secretHtml += "</div>";
      reveal.innerHTML = secretHtml;
      wrap.appendChild(reveal);
    }

    const hist = document.createElement("div");
    hist.className = "mm-history";
    mmState.log.forEach((entry) => {
      const row = document.createElement("div");
      row.className = "mm-row";
      let dots = "";
      for (let i = 0; i < 4; i++) {
        dots += "<span class=\"mm-slot filled mm-swatch c-" + entry.guess[i] + "\"></span>";
      }
      let pegs = "";
      for (let i = 0; i < entry.exact; i++) pegs += "<span class=\"mm-peg exact\"></span>";
      for (let i = 0; i < entry.near; i++) pegs += "<span class=\"mm-peg near\"></span>";
      for (let i = 0; i < 4 - entry.exact - entry.near; i++) pegs += "<span class=\"mm-peg\"></span>";

      row.innerHTML =
        "<span class=\"nc-attempt\">#" + entry.attempt + "</span>" +
        "<div class=\"mm-slots\">" + dots + "</div>" +
        "<div class=\"mm-pegs\">" + pegs + "</div>";
      hist.appendChild(row);
    });
    wrap.appendChild(hist);
    elStageWorkspace.appendChild(wrap);
  };

  const openProfileModal = () => {
    elProfileTagInput.value = appState.pilot.tag;
    elProfileAgeInput.value = String(appState.pilot.age);
    selectedAvatarDraft = appState.pilot.avatar;
    elProfileError.classList.add("hidden");
    const opts = elAvatarPicker.querySelectorAll(".avatar-option");
    opts.forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-avatar") === selectedAvatarDraft);
    });
    elProfileModal.classList.remove("hidden");
    elProfileTagInput.focus();
  };

  const closeProfileModal = () => {
    elProfileModal.classList.add("hidden");
  };

  elBrandHome.addEventListener("click", () => {
    switchView("hub");
  });

  elNavHub.addEventListener("click", () => {
    switchView("hub");
  });

  elNavRecords.addEventListener("click", () => {
    switchView("records");
  });

  elThemeBtn.addEventListener("click", () => {
    const isLight = document.body.classList.contains("light-theme");
    applyTheme(isLight ? "dark" : "light");
  });

  elOpenProfileBtn.addEventListener("click", () => {
    openProfileModal();
  });

  elHeroProfileBtn.addEventListener("click", () => {
    openProfileModal();
  });

  elCloseProfileBtn.addEventListener("click", () => {
    closeProfileModal();
  });

  elCancelProfileBtn.addEventListener("click", () => {
    closeProfileModal();
  });

  elProfileModal.addEventListener("click", (event) => {
    if (event.target === elProfileModal) {
      closeProfileModal();
    }
  });

  elAvatarPicker.querySelectorAll(".avatar-option").forEach((btn) => {
    btn.addEventListener("click", () => {
      selectedAvatarDraft = btn.getAttribute("data-avatar");
      elAvatarPicker.querySelectorAll(".avatar-option").forEach((other) => {
        other.classList.remove("active");
      });
      btn.classList.add("active");
    });
  });

  elProfileForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const tag = elProfileTagInput.value.trim();
    const ageVal = Number(elProfileAgeInput.value);

    if (tag === "") {
      elProfileError.textContent = "Gamer Tag cannot be empty.";
      elProfileError.classList.remove("hidden");
      return;
    }
    if (tag.length < 3 || tag.length > 16) {
      elProfileError.textContent = "Gamer Tag must be between 3 and 16 characters.";
      elProfileError.classList.remove("hidden");
      return;
    }
    if (!ageVal || ageVal < 8 || ageVal > 99) {
      elProfileError.textContent = "Please enter a valid age between 8 and 99.";
      elProfileError.classList.remove("hidden");
      return;
    }

    appState.pilot.tag = tag;
    appState.pilot.age = ageVal;
    appState.pilot.avatar = selectedAvatarDraft;
    saveState();
    syncGlobalUI();
    closeProfileModal();
    showToast("Pilot profile saved!", "success");
  });

  elRandomBtn.addEventListener("click", () => {
    const randomGame = GAMES[Math.floor(Math.random() * GAMES.length)];
    openGame(randomGame.id);
  });

  elSearchInput.addEventListener("input", () => {
    searchQuery = elSearchInput.value;
    if (searchQuery.trim().length > 0) {
      elSearchClear.classList.remove("hidden");
    } else {
      elSearchClear.classList.add("hidden");
    }
    renderHubGrid();
  });

  elSearchClear.addEventListener("click", () => {
    searchQuery = "";
    elSearchInput.value = "";
    elSearchClear.classList.add("hidden");
    renderHubGrid();
  });

  elCategoryFilters.querySelectorAll(".filter-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      activeCategory = pill.getAttribute("data-category");
      elCategoryFilters.querySelectorAll(".filter-pill").forEach((p) => {
        p.classList.remove("active");
      });
      pill.classList.add("active");
      renderHubGrid();
    });
  });

  elResetFiltersBtn.addEventListener("click", () => {
    searchQuery = "";
    activeCategory = "all";
    elSearchInput.value = "";
    elSearchClear.classList.add("hidden");
    elCategoryFilters.querySelectorAll(".filter-pill").forEach((p) => {
      p.classList.toggle("active", p.getAttribute("data-category") === "all");
    });
    renderHubGrid();
  });

  elBackToHub.addEventListener("click", () => {
    switchView("hub");
  });

  elStageRestart.addEventListener("click", () => {
    startActiveGame();
  });

  elResetProgressBtn.addEventListener("click", () => {
    if (!resetPending) {
      resetPending = true;
      elResetProgressBtn.innerHTML = "<i class=\"fa-solid fa-check\"></i><span>Confirm Full Reset</span>";
      elResetCancelBtn.classList.remove("hidden");
      elResetFeedback.textContent = "Click Confirm Full Reset again to permanently erase all saved progress.";
      elResetFeedback.classList.remove("hidden");
      return;
    }
    localStorage.removeItem(STORAGE_KEY);
    appState = createDefaultState();
    saveState();
    syncGlobalUI();
    renderRecordsView();
    showToast("Studio progress has been reset.", "warn");
  });

  elResetCancelBtn.addEventListener("click", () => {
    resetPending = false;
    elResetProgressBtn.innerHTML = "<i class=\"fa-solid fa-trash-can\"></i><span>Reset Progress</span>";
    elResetCancelBtn.classList.add("hidden");
    elResetFeedback.classList.add("hidden");
  });

  document.addEventListener("keydown", (event) => {
    if (!elProfileModal.classList.contains("hidden")) {
      if (event.key === "Escape") closeProfileModal();
      return;
    }
    if (currentView !== "stage") return;
    if (document.activeElement && document.activeElement.tagName === "INPUT") return;

    const upper = event.key.toUpperCase();
    if (activeGameId === "wordcipher") {
      if (event.key === "Backspace") {
        handleWordKey("BACKSPACE");
      } else if (event.key === "Enter") {
        handleWordKey("ENTER");
      } else if (upper.length === 1 && upper >= "A" && upper <= "Z") {
        handleWordKey(upper);
      }
    } else if (activeGameId === "g2048") {
      switch (event.key) {
        case "ArrowUp":
        case "w":
        case "W":
          event.preventDefault();
          move2048("up");
          break;
        case "ArrowDown":
        case "s":
        case "S":
          event.preventDefault();
          move2048("down");
          break;
        case "ArrowLeft":
        case "a":
        case "A":
          event.preventDefault();
          move2048("left");
          break;
        case "ArrowRight":
        case "d":
        case "D":
          event.preventDefault();
          move2048("right");
          break;
        default:
          break;
      }
    } else if (activeGameId === "hangman") {
      if (upper.length === 1 && upper >= "A" && upper <= "Z") {
        handleHangmanLetter(upper);
      }
    }
  });

  loadTheme();
  loadState();
  syncGlobalUI();
  renderHubGrid();
});