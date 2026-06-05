// Lightweight interactions for the static design prototype (no framework).
document.addEventListener('click', (e) => {
  // Mobile nav toggle
  const navBtn = e.target.closest('[data-nav-toggle]');
  if (navBtn) document.querySelector('[data-nav-menu]')?.classList.toggle('hidden');

  // Accordion (FAQ)
  const acc = e.target.closest('[data-accordion-trigger]');
  if (acc) {
    const panel = acc.nextElementSibling;
    panel?.classList.toggle('hidden');
    acc.setAttribute('aria-expanded', String(panel && !panel.classList.contains('hidden')));
  }
});

// Sticky mobile CTA: reveal after scrolling past the hero
window.addEventListener('scroll', () => {
  const el = document.querySelector('[data-sticky-cta]');
  if (!el) return;
  const past = window.scrollY > 300;
  el.classList.toggle('translate-y-0', past);
  el.classList.toggle('translate-y-full', !past);
});
