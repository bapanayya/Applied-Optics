/**
 * Applied-Optics-SVAGDC: Navigation & Curriculum Tree Coordinator
 * Department of Physics, S.V.A. Govt. Degree College, Srikalahasti
 */

(function(window) {
  'use strict';

  const STORAGE_COMPLETED_KEY = 'ao_completed_topics';
  let completedTopics = new Set();

  try {
    const saved = localStorage.getItem(STORAGE_COMPLETED_KEY);
    if (saved) {
      completedTopics = new Set(JSON.parse(saved));
    }
  } catch (e) {
    console.warn('Could not load completed topics from localStorage', e);
  }

  function saveCompleted() {
    try {
      localStorage.setItem(STORAGE_COMPLETED_KEY, JSON.stringify(Array.from(completedTopics)));
    } catch (e) {}
  }

  function renderSidebar(activeTopicId = null) {
    const container = document.getElementById('curriculum-tree');
    if (!container || !window.CurriculumData) return;

    const categories = window.CurriculumData.getCategories();
    const allTopics = window.CurriculumData.getTopics();

    let html = '';

    categories.forEach(cat => {
      html += `
        <div class="category-group" id="group_${cat.id}" data-category-id="${cat.id}">
          <div class="category-header" onclick="window.NavigationTracker.toggleCategory('${cat.id}')">
            <div class="category-header-title">
              <i class="${cat.icon || 'fa-solid fa-folder'}"></i>
              <span>${cat.title}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 6px;">
              <span class="category-badge">${cat.topics.length}</span>
              <i class="fa-solid fa-chevron-down category-arrow"></i>
            </div>
          </div>
          <ul class="topic-list">
      `;

      cat.topics.forEach(tid => {
        const t = allTopics[tid];
        if (!t) return;
        const isActive = tid === activeTopicId;
        const isCompleted = completedTopics.has(tid);

        html += `
          <li class="topic-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}" id="nav_item_${tid}">
            <a href="#${tid}" title="${t.title}" onclick="window.NavigationTracker.closeMobileSidebar()">
              <span class="topic-status-icon">
                <i class="${isCompleted ? 'fa-solid fa-circle-check' : (isActive ? 'fa-solid fa-circle-play' : 'fa-regular fa-circle')}"></i>
              </span>
              <span class="topic-title-text">${t.title}</span>
              ${t.toolType ? '<span class="interactive-pill" title="Interactive Simulator Included"><i class="fa-solid fa-bolt"></i> Lab</span>' : ''}
            </a>
          </li>
        `;
      });

      html += `
          </ul>
        </div>
      `;
    });

    container.innerHTML = html;

    // Expand active category
    if (activeTopicId) {
      const activeTopic = allTopics[activeTopicId];
      if (activeTopic && activeTopic.category) {
        expandCategory(activeTopic.category);
      }
    }
  }

  function toggleCategory(catId) {
    const group = document.getElementById(`group_${catId}`);
    if (group) {
      group.classList.toggle('expanded');
    }
  }

  function expandCategory(catId) {
    const group = document.getElementById(`group_${catId}`);
    if (group) {
      group.classList.add('expanded');
    }
  }

  function markCompleted(topicId) {
    completedTopics.add(topicId);
    saveCompleted();
    const item = document.getElementById(`nav_item_${topicId}`);
    if (item) {
      item.classList.add('completed');
      const icon = item.querySelector('.topic-status-icon i');
      if (icon) {
        icon.className = 'fa-solid fa-circle-check';
      }
    }
  }

  function toggleMobileSidebar() {
    const sidebar = document.getElementById('app-sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (sidebar) sidebar.classList.toggle('mobile-open');
    if (backdrop) backdrop.classList.toggle('mobile-open');
  }

  function closeMobileSidebar() {
    const sidebar = document.getElementById('app-sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (sidebar) sidebar.classList.remove('mobile-open');
    if (backdrop) backdrop.classList.remove('mobile-open');
  }

  // Sidebar Resizing & Preset Widths
  function initSidebarResizer() {
    const sidebar = document.getElementById('app-sidebar');
    const resizer = document.getElementById('sidebar-resizer');
    const collapseBtn = document.getElementById('sidebar-collapse-btn');
    const floatingToggle = document.getElementById('sidebar-floating-toggle');
    const widthButtons = document.querySelectorAll('.btn-width-preset');

    const STORAGE_WIDTH_KEY = 'ao_sidebar_width';
    const savedWidth = localStorage.getItem(STORAGE_WIDTH_KEY);
    if (savedWidth && sidebar) {
      sidebar.style.width = `${savedWidth}px`;
      document.documentElement.style.setProperty('--sidebar-width', `${savedWidth}px`);
      updateActivePresetBtn(parseInt(savedWidth, 10));
    }

    widthButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const w = parseInt(btn.dataset.width, 10);
        if (sidebar && !isNaN(w)) {
          sidebar.style.width = `${w}px`;
          document.documentElement.style.setProperty('--sidebar-width', `${w}px`);
          localStorage.setItem(STORAGE_WIDTH_KEY, w);
          updateActivePresetBtn(w);
        }
      });
    });

    function updateActivePresetBtn(w) {
      widthButtons.forEach(b => {
        if (parseInt(b.dataset.width, 10) === w) b.classList.add('active');
        else b.classList.remove('active');
      });
    }

    if (collapseBtn && sidebar) {
      collapseBtn.addEventListener('click', () => {
        sidebar.classList.add('collapsed');
        if (floatingToggle) floatingToggle.style.display = 'inline-flex';
      });
    }

    if (floatingToggle && sidebar) {
      floatingToggle.addEventListener('click', () => {
        sidebar.classList.remove('collapsed');
        floatingToggle.style.display = 'none';
      });
    }

    if (resizer && sidebar) {
      let isDragging = false;

      resizer.addEventListener('mousedown', (e) => {
        isDragging = true;
        document.body.style.cursor = 'col-resize';
        document.body.style.userSelect = 'none';
      });

      document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const newWidth = Math.max(200, Math.min(500, e.clientX));
        sidebar.style.width = `${newWidth}px`;
        document.documentElement.style.setProperty('--sidebar-width', `${newWidth}px`);
      });

      document.addEventListener('mouseup', () => {
        if (isDragging) {
          isDragging = false;
          document.body.style.cursor = '';
          document.body.style.userSelect = '';
          const finalW = parseInt(sidebar.style.width, 10);
          if (!isNaN(finalW)) {
            localStorage.setItem(STORAGE_WIDTH_KEY, finalW);
            updateActivePresetBtn(finalW);
          }
        }
      });

      resizer.addEventListener('dblclick', () => {
        sidebar.style.width = '280px';
        document.documentElement.style.setProperty('--sidebar-width', '280px');
        localStorage.setItem(STORAGE_WIDTH_KEY, 280);
        updateActivePresetBtn(280);
      });
    }
  }

  // Reading Progress Bar
  function initReadingProgress() {
    const bar = document.getElementById('read-progress-bar');
    const main = document.getElementById('app-main');
    if (!bar || !main) return;

    main.addEventListener('scroll', () => {
      const scrollHeight = main.scrollHeight - main.clientHeight;
      if (scrollHeight > 0) {
        const percent = (main.scrollTop / scrollHeight) * 100;
        bar.style.width = `${percent}%`;
      } else {
        bar.style.width = '0%';
      }
    });
  }

  // Sidebar Filtering
  function initSidebarFilter() {
    const input = document.getElementById('sidebar-search-input');
    if (!input) return;

    input.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      const groups = document.querySelectorAll('.category-group');

      groups.forEach(g => {
        let hasMatch = false;
        const items = g.querySelectorAll('.topic-item');
        items.forEach(it => {
          const text = it.textContent.toLowerCase();
          if (!q || text.includes(q)) {
            it.style.display = '';
            hasMatch = true;
          } else {
            it.style.display = 'none';
          }
        });

        if (hasMatch) {
          g.style.display = '';
          if (q) g.classList.add('expanded');
        } else {
          g.style.display = 'none';
        }
      });
    });
  }

  window.NavigationTracker = {
    renderSidebar,
    toggleCategory,
    expandCategory,
    markCompleted,
    toggleMobileSidebar,
    closeMobileSidebar,
    initSidebarResizer,
    initReadingProgress,
    initSidebarFilter
  };

})(window);
