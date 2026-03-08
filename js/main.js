/**
 * Slide engine: render, navigate, keyboard shortcuts, notes toggle, hash URLs.
 */
(function () {
  let currentIndex = 0;
  let currentStep = 0;
  let notesOpen = false;

  const container = document.getElementById('slide-container');
  const dotsContainer = document.getElementById('nav-dots');
  const notesBar = document.getElementById('notes-bar');
  const notesContent = document.getElementById('notes-content');
  const notesToggle = document.getElementById('notes-toggle');

  /** Render a single slide's HTML */
  function renderSlide(slide, index) {
    const div = document.createElement('div');
    div.className = 'slide';
    div.dataset.index = index;

    const bulletsHTML = slide.bullets
      .map(b => `<li>${b}</li>`)
      .join('');

    div.innerHTML = `
      <div class="slide-inner">
        <div class="slide-header">
          <h2 class="slide-title">${slide.title}</h2>
        </div>
        <ul class="slide-bullets">${bulletsHTML}</ul>
        <div class="slide-graphic">${slide.svg}</div>
        <span class="slide-number">${index + 1} / ${slides.length}</span>
      </div>
    `;
    return div;
  }

  /** Build all slides and dots */
  function init() {
    slides.forEach((slide, i) => {
      const el = renderSlide(slide, i);
      container.appendChild(el);

      const dot = document.createElement('button');
      dot.className = 'nav-dot';
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    });

    // Read initial hash
    const hashMatch = location.hash.match(/^#\/(\d+)$/);
    if (hashMatch) {
      const idx = parseInt(hashMatch[1], 10) - 1;
      if (idx >= 0 && idx < slides.length) {
        currentIndex = idx;
      }
    }

    updateSlide();
    bindEvents();
  }

  /** Navigate to a specific slide index */
  function goTo(index) {
    if (index < 0 || index >= slides.length || index === currentIndex) return;
    const direction = index > currentIndex ? 'forward' : 'backward';
    currentIndex = index;
    currentStep = 0;
    updateSlide(direction);
  }

  function next() {
    const slide = slides[currentIndex];
    if (slide.steps && currentStep < slide.steps) {
      currentStep++;
      updateStepVisibility();
      return;
    }
    goTo(currentIndex + 1);
  }

  function prev() {
    if (currentStep > 0) {
      currentStep--;
      updateStepVisibility();
      return;
    }
    goTo(currentIndex - 1);
  }

  /** Toggle visibility of step groups within the active slide */
  function updateStepVisibility() {
    const activeSlide = container.querySelector('.slide.active');
    if (!activeSlide) return;
    const totalSteps = slides[currentIndex].steps || 0;
    for (let i = 1; i <= totalSteps; i++) {
      const group = activeSlide.querySelector('.step-' + i);
      if (group) {
        group.classList.toggle('visible', i <= currentStep);
      }
    }
  }

  /** Update the DOM to reflect currentIndex */
  function updateSlide(direction) {
    const allSlides = container.querySelectorAll('.slide');
    const allDots = dotsContainer.querySelectorAll('.nav-dot');

    allSlides.forEach((el, i) => {
      el.classList.remove('active', 'exit-left');
      if (i === currentIndex) {
        el.classList.add('active');
      } else if (direction === 'forward' && i < currentIndex) {
        el.classList.add('exit-left');
      }
    });

    allDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });

    // Update notes content (auto-linkify URLs, render paragraphs & bullets)
    const escaped = slides[currentIndex].notes
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const linkified = escaped.replace(
      /(https?:\/\/[^\s<]+)/g,
      '<a href="$1" target="_blank" rel="noopener">$1</a>'
    );
    // Split into paragraphs on double newlines, then handle bullets within each
    notesContent.innerHTML = linkified.split('\n\n').map(para => {
      const lines = para.split('\n');
      const hasBullets = lines.some(l => /^[\u2022\u2023\u25E6•]/.test(l.trim()));
      if (hasBullets) {
        const items = lines.map(l => {
          const stripped = l.replace(/^[\u2022\u2023\u25E6•]\s*/, '');
          return `<li>${stripped}</li>`;
        }).join('');
        return `<ul>${items}</ul>`;
      }
      // Handle numbered lists (1. 2. 3. etc.)
      const hasNumbers = lines.every(l => /^\d+\.\s/.test(l.trim()));
      if (hasNumbers && lines.length > 1) {
        const items = lines.map(l => {
          const stripped = l.replace(/^\d+\.\s*/, '');
          return `<li>${stripped}</li>`;
        }).join('');
        return `<ol>${items}</ol>`;
      }
      return `<p>${lines.join('<br>')}</p>`;
    }).join('');

    // Reset step visibility for newly active slide
    updateStepVisibility();

    // Update hash
    history.replaceState(null, '', `#/${currentIndex + 1}`);
  }

  /** Toggle speaker notes */
  function toggleNotes() {
    notesOpen = !notesOpen;
    notesBar.classList.toggle('open', notesOpen);
    notesToggle.classList.toggle('active', notesOpen);
  }

  /** Bind keyboard and other events */
  function bindEvents() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        next();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prev();
      } else if (e.key === 'n' || e.key === 'N') {
        toggleNotes();
      }
    });

    notesToggle.addEventListener('click', toggleNotes);

    // Touch/swipe navigation for mobile
    let touchStartX = 0;
    let touchStartY = 0;

    document.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    document.addEventListener('touchend', (e) => {
      const deltaX = e.changedTouches[0].screenX - touchStartX;
      const deltaY = e.changedTouches[0].screenY - touchStartY;
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        if (deltaX < 0) next();
        else prev();
      }
    }, { passive: true });

    // Hash change (back/forward buttons)
    window.addEventListener('hashchange', () => {
      const hashMatch = location.hash.match(/^#\/(\d+)$/);
      if (hashMatch) {
        const idx = parseInt(hashMatch[1], 10) - 1;
        if (idx >= 0 && idx < slides.length && idx !== currentIndex) {
          currentIndex = idx;
          updateSlide();
        }
      }
    });
  }

  /** Debug panel */
  function initDebug() {
    const panel = document.getElementById('debug-panel');
    const toggle = document.getElementById('debug-toggle');
    if (!panel || !toggle) return;

    function update() {
      const dpr = window.devicePixelRatio || 1;
      panel.innerHTML =
        `<span class="debug-label">viewport:</span> ${window.innerWidth} × ${window.innerHeight}<br>` +
        `<span class="debug-label">dpr:</span> ${dpr.toFixed(2)}<br>` +
        `<span class="debug-label">screen:</span> ${screen.width} × ${screen.height}<br>` +
        `<span class="debug-label">ua:</span> ${navigator.userAgent}`;
    }

    toggle.addEventListener('click', () => {
      panel.classList.toggle('open');
    });

    update();
    window.addEventListener('resize', update);
  }

  init();
  initDebug();
})();
