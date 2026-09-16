/**
 * Applied-Optics-SVAGDC: Master Application Controller
 * Department of Physics, S.V.A. Govt. Degree College, Srikalahasti
 */

(function() {
  'use strict';

  const DEFAULT_TOPIC_ID = 'optics-intro';
  const THEME_STORAGE_KEY = 'ao_theme_mode';

  // --- Theme Management ---
  function initTheme() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || 'light';
    setTheme(savedTheme);

    const toggleBtn = document.getElementById('theme-toggle-btn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
      });
    }
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);

    const toggleBtn = document.getElementById('theme-toggle-btn');
    if (toggleBtn) {
      toggleBtn.innerHTML = theme === 'dark' 
        ? '<i class="fa-solid fa-sun" style="color: #fbbf24;"></i>' 
        : '<i class="fa-solid fa-moon" style="color: #3b82f6;"></i>';
      toggleBtn.title = `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`;
    }
  }

  // --- Topic Rendering ---
  function renderTopic(topicId) {
    if (!window.CurriculumData) return;

    const topic = window.CurriculumData.getTopic(topicId);
    if (!topic) {
      console.warn(`Topic "${topicId}" not found. Loading default.`);
      window.location.hash = DEFAULT_TOPIC_ID;
      return;
    }

    const mainContainer = document.getElementById('topic-content-mount');
    if (!mainContainer) return;

    // Get adjacent topics for Prev / Next navigation
    const { prev, next } = window.CurriculumData.getAdjacentTopics(topicId);

    // Build Category & Track Titles for Breadcrumbs
    const categories = window.CurriculumData.getCategories();
    const cat = categories.find(c => c.id === topic.category);
    const catTitle = cat ? cat.title : 'Curriculum';

    // HTML Construction
    let html = `
      <!-- Breadcrumbs -->
      <nav class="breadcrumbs">
        <a href="#optics-intro"><i class="fa-solid fa-house"></i> Home</a>
        <span class="separator">/</span>
        <span style="color: var(--text-muted);">${catTitle}</span>
        <span class="separator">/</span>
        <span class="current">${topic.title}</span>
      </nav>

      <!-- Lesson Header -->
      <header class="lesson-header">
        <div class="lesson-meta-row">
          <span class="module-tag">${catTitle}</span>
          <span class="read-time"><i class="fa-regular fa-clock"></i> ${topic.readTime || '6 min read'}</span>
        </div>
        <h1 class="lesson-title">${topic.title}</h1>
        <p class="lesson-lead">${topic.lead || ''}</p>
      </header>

      <!-- Main Pedagogical Theory & Diagrams -->
      <article class="lesson-body">
        ${topic.htmlContent || ''}
      </article>

      <!-- Interactive Simulator Mount (If Applicable) -->
      ${topic.toolType ? `
        <section class="simulator-mount-section" style="margin-top: 2rem;">
          <div id="simulator_mount_${topic.id}"></div>
        </section>
      ` : ''}

      <!-- "Test Your Understanding" Quiz Component Mount -->
      <section class="quiz-section" style="margin-top: 2.5rem;">
        <div class="quiz-card" id="quiz_mount_${topic.id}"></div>
      </section>

      <!-- Bottom Chapter Navigation Bar -->
      <div class="nav-buttons-bar" style="margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between; gap: 1rem; flex-wrap: wrap;">
        <a href="${prev ? '#' + prev.id : 'javascript:void(0)'}" 
           class="nav-btn ${!prev ? 'disabled' : ''}" 
           style="text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.6rem 1.2rem; border-radius: var(--radius-md); border: 1px solid var(--border-medium); background: var(--bg-surface); color: var(--text-primary); font-weight: 600; font-size: 0.88rem; ${!prev ? 'opacity: 0.4; pointer-events: none;' : ''}">
          <i class="fa-solid fa-arrow-left"></i> Previous Chapter
        </a>
        <a href="${next ? '#' + next.id : 'javascript:void(0)'}" 
           class="nav-btn ${!next ? 'disabled' : ''}" 
           style="text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.6rem 1.2rem; border-radius: var(--radius-md); background: var(--primary); color: #ffffff; font-weight: 600; font-size: 0.88rem; ${!next ? 'opacity: 0.4; pointer-events: none;' : ''}">
          Next Chapter <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    `;

    mainContainer.innerHTML = html;

    // Render KaTeX Math Expressions
    triggerMathRender(mainContainer);

    // Reset scroll to top
    const mainEl = document.getElementById('app-main');
    if (mainEl) mainEl.scrollTop = 0;

    // Update Sidebar Active state
    if (window.NavigationTracker) {
      window.NavigationTracker.renderSidebar(topicId);
      window.NavigationTracker.markCompleted(topicId);
    }

    // Mount Interactive Simulator if topic defines one
    if (topic.toolType) {
      const mountId = `simulator_mount_${topic.id}`;
      if (topic.toolType === 'matrix-bench' && window.OpticsMatrixBench) {
        window.OpticsMatrixBench.mount(mountId);
      } else if (topic.toolType === 'aberration-visualizer' && window.OpticsSimulators) {
        window.OpticsSimulators.initAberrationVisualizer(mountId);
      } else if (topic.toolType === 'fiber-na' && window.OpticsSimulators) {
        window.OpticsSimulators.initFiberNASimulator(mountId);
      } else if (topic.toolType === 'laser-cavity' && window.OpticsSimulators) {
        window.OpticsSimulators.initLaserCavitySimulator(mountId);
      } else if (topic.toolType === 'malus-law' && window.OpticsSimulators) {
        window.OpticsSimulators.initMalusLawSimulator(mountId);
      }
      const simEl = document.getElementById(mountId);
      if (simEl) triggerMathRender(simEl);
    }

    // Mount Quizzes
    if (window.OpticsQuiz && topic.quiz) {
      window.OpticsQuiz.render(`quiz_mount_${topic.id}`, topic.quiz);
    }

    // Update document title
    document.title = `${topic.title} | Applied Optics | S.V.A. Govt. Degree College`;

    // Highlight active track pill
    updateActiveTrackPill(topic.track);
  }

  function updateActiveTrackPill(trackId) {
    const pills = document.querySelectorAll('.track-pill');
    pills.forEach(p => {
      if (p.dataset.track === trackId) p.classList.add('active');
      else p.classList.remove('active');
    });
  }

  function triggerMathRender(el) {
    if (!el) return;

    const doRender = () => {
      // 1. Explicitly render all .formula-math-display cards with KaTeX display mode
      if (window.katex) {
        const displayCards = el.querySelectorAll('.formula-math-display');
        displayCards.forEach(card => {
          if (!card.dataset.katexDone) {
            let formula = card.textContent.trim();
            if (formula.startsWith('$$') && formula.endsWith('$$')) {
              formula = formula.slice(2, -2).trim();
            } else if (formula.startsWith('\\[') && formula.endsWith('\\]')) {
              formula = formula.slice(2, -2).trim();
            }
            try {
              window.katex.render(formula, card, {
                displayMode: true,
                throwOnError: false
              });
              card.dataset.katexDone = 'true';
            } catch (err) {
              console.warn('KaTeX display card error:', err);
            }
          }
        });
      }

      // 2. Auto-render remaining inline and block math delimiters
      if (typeof window.renderMathInElement === 'function') {
        window.renderMathInElement(el, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false },
            { left: '\\[', right: '\\]', display: true },
            { left: '\\(', right: '\\)', display: false }
          ],
          ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code', 'option'],
          throwOnError: false
        });
      }
    };

    if (window.katex && typeof window.renderMathInElement === 'function') {
      doRender();
    } else {
      window.addEventListener('load', doRender, { once: true });
      setTimeout(doRender, 100);
      setTimeout(doRender, 300);
      setTimeout(doRender, 700);
    }
  }

  // --- Fast Search Modal (Ctrl+K) ---
  function initSearchModal() {
    const modal = document.getElementById('search-modal-backdrop');
    const input = document.getElementById('search-modal-input');
    const resultsList = document.getElementById('search-results-list');
    const closeBtn = document.getElementById('search-modal-close');

    if (!modal || !input || !resultsList) return;

    function openModal() {
      modal.classList.add('active');
      input.value = '';
      input.focus();
      renderResults('');
    }

    function closeModal() {
      modal.classList.remove('active');
    }

    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openModal();
      }
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    input.addEventListener('input', (e) => {
      renderResults(e.target.value);
    });

    function renderResults(q) {
      const query = q.toLowerCase().trim();
      const allTopics = window.CurriculumData ? window.CurriculumData.getTopics() : {};
      const topicList = Object.values(allTopics);

      const filtered = query
        ? topicList.filter(t => t.title.toLowerCase().includes(query) || (t.lead && t.lead.toLowerCase().includes(query)))
        : topicList.slice(0, 8);

      if (filtered.length === 0) {
        resultsList.innerHTML = '<li style="padding: 1.5rem; text-align: center; color: var(--text-muted);">No matching optical topics found.</li>';
        return;
      }

      let html = '';
      filtered.forEach(t => {
        html += `
          <li class="search-result-item" onclick="window.location.hash='${t.id}'; document.getElementById('search-modal-backdrop').classList.remove('active');">
            <div class="result-title">
              <i class="fa-solid fa-book-open" style="color: var(--primary);"></i>
              ${t.title}
            </div>
            <div class="result-lead">${t.lead ? t.lead.substring(0, 110) + '...' : ''}</div>
          </li>
        `;
      });

      resultsList.innerHTML = html;
    }
  }

  // --- Router & App Bootstrapping ---
  function initRouter() {
    function handleHash() {
      const hash = window.location.hash.replace('#', '').trim();
      const topicId = hash || DEFAULT_TOPIC_ID;
      renderTopic(topicId);
    }

    window.addEventListener('hashchange', handleHash);

    // Initial load
    if (!window.location.hash) {
      window.location.hash = DEFAULT_TOPIC_ID;
    } else {
      handleHash();
    }
  }

  // Initialize on DOM Ready
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    if (window.NavigationTracker) {
      window.NavigationTracker.initSidebarResizer();
      window.NavigationTracker.initReadingProgress();
      window.NavigationTracker.initSidebarFilter();
    }
    initSearchModal();
    initRouter();
  });

})();
