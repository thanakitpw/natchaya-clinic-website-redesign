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

  // Tabs (review / video filters). Markup: a wrapper [data-tabs] containing
  // buttons [data-tab="key"] and panels [data-panel="key"].
  const tab = e.target.closest('[data-tab]');
  if (tab) {
    const group = tab.closest('[data-tabs]');
    if (group) {
      const key = tab.getAttribute('data-tab');
      group.querySelectorAll('[data-tab]').forEach((b) => {
        const on = b === tab;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-selected', String(on));
      });
      group.querySelectorAll('[data-panel]').forEach((p) => {
        p.classList.toggle('hidden', p.getAttribute('data-panel') !== key);
      });
    }
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
