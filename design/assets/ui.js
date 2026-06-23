// Lightweight interactions for the static design prototype (no framework).

// Hero slider. Markup: [data-slider] > [data-slider-track] > N×[data-slide];
// controls [data-slide-prev]/[data-slide-next]/[data-slide-dot];
// optional auto-advance via data-slider-autoplay="<ms>".
function goToSlide(slider, i) {
  const track = slider.querySelector('[data-slider-track]');
  const slides = slider.querySelectorAll('[data-slide]');
  const dots = slider.querySelectorAll('[data-slide-dot]');
  if (!track || !slides.length) return;
  const n = slides.length;
  const idx = ((i % n) + n) % n;
  slider._idx = idx;
  track.style.transform = `translateX(-${idx * 100}%)`;
  dots.forEach((d, j) => d.classList.toggle('is-active', j === idx));
}

document.addEventListener('click', (e) => {
  // Hero slider controls
  const sprev = e.target.closest('[data-slide-prev]');
  const snext = e.target.closest('[data-slide-next]');
  const sdot = e.target.closest('[data-slide-dot]');
  if (sprev || snext || sdot) {
    const slider = (sprev || snext || sdot).closest('[data-slider]');
    if (slider) {
      if (sdot) {
        const dots = [...slider.querySelectorAll('[data-slide-dot]')];
        goToSlide(slider, dots.indexOf(sdot));
      } else {
        goToSlide(slider, (slider._idx || 0) + (snext ? 1 : -1));
      }
    }
  }

  // Mobile nav toggle
  const navBtn = e.target.closest('[data-nav-toggle]');
  if (navBtn) document.querySelector('[data-nav-menu]')?.classList.toggle('hidden');

  // Floating "back to top" button
  if (e.target.closest('[data-scroll-top]')) window.scrollTo({ top: 0, behavior: 'smooth' });

  // Floating contact speed-dial (open/close)
  const fab = document.querySelector('[data-fab]');
  if (fab) {
    const toggle = e.target.closest('[data-fab-toggle]');
    if (toggle && fab.contains(toggle)) {
      const open = fab.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    } else if (!e.target.closest('[data-fab]')) {
      // click anywhere else closes it
      fab.classList.remove('is-open');
      fab.querySelector('[data-fab-toggle]')?.setAttribute('aria-expanded', 'false');
    }
  }

  // Accordion (FAQ)
  const acc = e.target.closest('[data-accordion-trigger]');
  if (acc) {
    const panel = acc.nextElementSibling;
    panel?.classList.toggle('hidden');
    acc.setAttribute('aria-expanded', String(panel && !panel.classList.contains('hidden')));
  }

  // Carousel arrows. Markup: [data-carousel] wrapping a [data-carousel-track]
  // (overflow-x-auto flex) plus buttons [data-carousel-prev]/[data-carousel-next].
  const cprev = e.target.closest('[data-carousel-prev]');
  const cnext = e.target.closest('[data-carousel-next]');
  if (cprev || cnext) {
    const wrap = (cprev || cnext).closest('[data-carousel]');
    const track = wrap?.querySelector('[data-carousel-track]');
    if (track) track.scrollBy({ left: (cnext ? 1 : -1) * Math.round(track.clientWidth * 0.85), behavior: 'smooth' });
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

// Init sliders (set first slide + optional autoplay, pause on hover)
document.querySelectorAll('[data-slider]').forEach((slider) => {
  goToSlide(slider, 0);
  const delay = parseInt(slider.getAttribute('data-slider-autoplay') || '0', 10);
  if (delay > 0) {
    let timer = setInterval(() => goToSlide(slider, (slider._idx || 0) + 1), delay);
    slider.addEventListener('mouseenter', () => { clearInterval(timer); });
    slider.addEventListener('mouseleave', () => {
      clearInterval(timer);
      timer = setInterval(() => goToSlide(slider, (slider._idx || 0) + 1), delay);
    });
  }
});

// Sticky mobile CTA: reveal after scrolling past the hero
window.addEventListener('scroll', () => {
  const past = window.scrollY > 300;

  const el = document.querySelector('[data-sticky-cta]');
  if (el) {
    el.classList.toggle('translate-y-0', past);
    el.classList.toggle('translate-y-full', !past);
  }

  // Floating "back to top": fade in after scrolling down
  const top = document.querySelector('[data-scroll-top]');
  if (top) {
    top.classList.toggle('opacity-0', !past);
    top.classList.toggle('translate-y-2', !past);
    top.classList.toggle('pointer-events-none', !past);
  }
});
