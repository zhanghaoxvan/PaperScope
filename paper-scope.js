/**
* The JavaScript file for PaperScope
*/
(function () {
  'use strict';

  const html = document.documentElement;
  const toggleBtn = document.getElementById('themeToggle');

  if (toggleBtn) {
    const ICONS = {
      light: '<i class="fa-regular fa-moon"></i>',
      dark: '<i class="fa-regular fa-sun"></i>',
    };

    function getCurrentTheme() {
      return html.getAttribute('data-theme') || 'light';
    }

    function setTheme(theme) {
      const newTheme = theme === 'dark' ? 'dark' : 'light';
      html.setAttribute('data-theme', newTheme);
      toggleBtn.innerHTML = newTheme === 'light' ? ICONS.light : ICONS.dark;
      toggleBtn.setAttribute(
        'aria-label',
        newTheme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
      );
      try {
        localStorage.setItem('theme', newTheme);
      } catch (_) { }
    }

    function toggleTheme() {
      const current = getCurrentTheme();
      setTheme(current === 'light' ? 'dark' : 'light');
    }

    function initTheme() {
      let stored;
      try {
        stored = localStorage.getItem('theme');
      } catch (_) {
        stored = null;
      }

      if (stored === 'dark' || stored === 'light') {
        setTheme(stored);
        return;
      }

      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }

    toggleBtn.addEventListener('click', toggleTheme);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', function (e) {
      let stored;
      try {
        stored = localStorage.getItem('theme');
      } catch (_) {
        stored = null;
      }
      if (!stored) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    });

    initTheme();
  }

  document.querySelectorAll('.code-block-wrapper').forEach(function (wrapper) {
    const copyBtn = wrapper.querySelector('.code-copy-btn');
    if (!copyBtn) return;

    const codeBlock = wrapper.querySelector('pre code');
    if (!codeBlock) return;

    copyBtn.addEventListener('click', async function () {
      const text = codeBlock.textContent || '';

      try {
        await navigator.clipboard.writeText(text);
        copyBtn.classList.add('copied');
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fa-regular fa-check"></i> 已复制';

        setTimeout(function () {
          copyBtn.classList.remove('copied');
          copyBtn.innerHTML = originalText;
        }, 2000);
      } catch (_) {
        // 降级方案
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand('copy');
          copyBtn.classList.add('copied');
          const originalText = copyBtn.innerHTML;
          copyBtn.innerHTML = '<i class="fa-regular fa-check"></i> Copied';
          setTimeout(function () {
            copyBtn.classList.remove('copied');
            copyBtn.innerHTML = originalText;
          }, 2000);
        } catch (_) { }
        document.body.removeChild(textarea);
      }
    });
  });

  window.__theme = {
    get: function () {
      return html.getAttribute('data-theme') || 'light';
    },
    set: function (theme) {
      if (toggleBtn) {
        const newTheme = theme === 'dark' ? 'dark' : 'light';
        html.setAttribute('data-theme', newTheme);
        toggleBtn.innerHTML = newTheme === 'light'
          ? '<i class="fa-regular fa-moon"></i>'
          : '<i class="fa-regular fa-sun"></i>';
        try {
          localStorage.setItem('theme', newTheme);
        } catch (_) {}
      }
    },
    toggle: function () {
      if (toggleBtn) toggleBtn.click();
    },
  };

})();
