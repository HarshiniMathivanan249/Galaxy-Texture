(() => {
  const body = document.body;
  const overlay = document.getElementById('mobile-nav-overlay');
  const toggle = document.getElementById('mobile-menu-toggle');

  const openMenu = () => {
    if (!overlay || !toggle) return;
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    toggle.setAttribute('aria-expanded', 'true');
    body.classList.add('menu-open');
    const close = overlay.querySelector('.mobile-nav-close');
    if (close) close.focus();
  };

  const closeMenu = () => {
    if (!overlay || !toggle) return;
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    body.classList.remove('menu-open');
  };

  if (toggle && overlay) {
    toggle.addEventListener('click', openMenu);
    overlay.querySelectorAll('[data-mobile-close]').forEach(el => el.addEventListener('click', closeMenu));
    overlay.querySelectorAll('a').forEach(el => el.addEventListener('click', closeMenu));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
    window.addEventListener('resize', () => { if (window.innerWidth >= 1024) closeMenu(); });
  }

  // Graceful local-image fallback.
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', () => {
      img.dataset.imageError = 'true';
      img.alt = img.alt || 'Galaxy Texture umbrella image';
    }, { once: true });
  });

  // Static-demo contact form behavior. Keeps the UI functional without inventing a backend.
  const quoteForm = document.getElementById('quote-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', e => {
      e.preventDefault();
      const success = document.getElementById('success-toast');
      if (success) {
        success.classList.remove('hidden');
        success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }

  const bulkForm = document.getElementById('bulk-quote-form');
  if (bulkForm) {
    bulkForm.addEventListener('submit', e => {
      e.preventDefault();
      let note = bulkForm.querySelector('.gt-demo-note');
      if (!note) {
        note = document.createElement('div');
        note.className = 'gt-demo-note';
        note.textContent = 'Enquiry captured in this static demo. Connect this form to your email, CRM or form handler before launch.';
        bulkForm.appendChild(note);
      }
      note.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  // File upload feedback for the contact form.
  const artwork = document.getElementById('artwork-file');
  if (artwork) {
    artwork.removeAttribute('onchange');
    artwork.addEventListener('change', () => {
      const parent = artwork.parentElement;
      if (!parent) return;
      let label = parent.parentElement?.querySelector('.gt-file-name');
      if (!label) {
        label = document.createElement('div');
        label.className = 'gt-file-name';
        parent.parentElement?.appendChild(label);
      }
      label.textContent = artwork.files?.[0] ? `Attached: ${artwork.files[0].name}` : '';
    });
  }
})();
