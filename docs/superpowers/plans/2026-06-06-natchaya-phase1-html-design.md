# Natchaya Redesign — Plan 1: HTML Design Phase Implementation Plan

> **For agentic workers:** This phase is **design/visual work**, not TDD. Tasks use checkbox (`- [ ]`) syntax for tracking. Verification is checklist-based (browser + responsive + token-consistency), not automated tests. Use the `ui-ux-pro-max` skill for palette/typography/layout quality on each page. The TDD plans begin at Plan 2 (Next.js).

**Goal:** Produce client-approvable HTML+Tailwind designs — a design system plus ~10 representative templates — that convert cleanly into the Next.js build later.

**Architecture:** Static HTML files in `design/`, each loading the Tailwind Play CDN + a shared `tailwind-config.js` (the single source of truth for colors/fonts/spacing). No build step. **Home is the first approval gate** — stop and get client sign-off on `design-system.html` + `home.html` before building the other 9 templates, because Home approval may adjust the design system.

**Tech Stack:** HTML5, Tailwind CSS (Play CDN), IBM Plex Sans Thai (Google Fonts), vanilla JS for interactions (accordion, mobile nav, sticky CTA).

**Source spec:** `docs/superpowers/specs/2026-06-06-natchaya-redesign-design.md`

---

## File Structure

```
design/
├── assets/
│   ├── tailwind-config.js    # window.tailwind.config = {...} — SINGLE SOURCE OF TRUTH (colors/font/spacing)
│   ├── base.css              # Thai line-height, focus rings, anything beyond utilities
│   └── ui.js                 # accordion, mobile nav toggle, sticky CTA show/hide
├── partials/
│   └── README.md             # documents the shared <head> block to copy into each page
├── design-system.html        # foundation + every component with states (the reference page)
├── home.html                 # GATE 1 — build first, get client approval
├── about.html
├── listing.html              # generic archive (articles/reviews/services/products/news)
├── service-detail.html       # also represents WomenPlus/Liposuction/Product detail
├── article-detail.html
├── review-detail.html
├── womenplus.html            # sub-brand landing
├── contact.html
├── faq.html
└── news-detail.html
```

Each page shares an identical `<head>` block (Tailwind CDN → tailwind-config.js → base.css → fonts). That block is documented in `partials/README.md` and copied verbatim into every page (static HTML has no include mechanism; the shared *values* live in `tailwind-config.js`, so duplication is limited to the boilerplate `<head>`).

---

## Task 1: Scaffold `design/` + shared Tailwind config and tooling

**Files:**
- Create: `design/assets/tailwind-config.js`
- Create: `design/assets/base.css`
- Create: `design/assets/ui.js`
- Create: `design/partials/README.md`
- Create: `design/_smoke.html` (temporary verification page, deleted in Step 5)

- [ ] **Step 1: Create the shared Tailwind config with starter tokens**

`design/assets/tailwind-config.js` — brand hex values are filled in Task 2; start with documented placeholders that are obviously-named so Task 2 can replace them:

```js
// Single source of truth for the design system.
// These exact tokens get copied into tailwind.config.js when we build the Next.js app.
window.tailwind = window.tailwind || {};
window.tailwind.config = {
  theme: {
    extend: {
      colors: {
        // Brand palette — REPLACE the hex in Task 2 with values extracted from the real logo/site.
        brand: {
          50:  '#fdf2f6',
          100: '#fce7ee',
          300: '#f3a8c4',
          500: '#d6336c', // primary — placeholder pink, replaced in Task 2
          600: '#b02058',
          700: '#8a1846',
        },
        ink: { DEFAULT: '#1f2433', muted: '#5b6173', soft: '#9aa0b0' },
        line: '#e8eaf0',
        surface: { DEFAULT: '#ffffff', alt: '#f7f8fb' },
        line_green: '#06c755', // LINE brand green (fixed, do not change)
      },
      fontFamily: {
        sans: ['"IBM Plex Sans Thai"', 'system-ui', 'sans-serif'],
      },
      borderRadius: { xl: '1rem', '2xl': '1.25rem' },
      maxWidth: { content: '72rem' },
    },
  },
};
```

- [ ] **Step 2: Create base CSS for Thai readability**

`design/assets/base.css`:

```css
:root { color-scheme: light; }
html { scroll-behavior: smooth; }
body { -webkit-font-smoothing: antialiased; }
/* Thai needs more line-height than Latin defaults */
p, li { line-height: 1.85; }
h1, h2, h3, h4 { line-height: 1.35; }
/* Visible focus for accessibility */
:focus-visible { outline: 2px solid theme('colors.brand.500', #d6336c); outline-offset: 2px; }
/* Prevent layout shift from images */
img { height: auto; max-width: 100%; }
```

- [ ] **Step 3: Create the interaction JS**

`design/assets/ui.js`:

```js
// Mobile nav toggle
document.addEventListener('click', (e) => {
  const t = e.target.closest('[data-nav-toggle]');
  if (t) document.querySelector('[data-nav-menu]')?.classList.toggle('hidden');
  const acc = e.target.closest('[data-accordion-trigger]');
  if (acc) {
    const panel = acc.nextElementSibling;
    panel?.classList.toggle('hidden');
    acc.setAttribute('aria-expanded', panel && !panel.classList.contains('hidden'));
  }
});
// Sticky mobile CTA: show after scrolling past the hero
const cta = () => document.querySelector('[data-sticky-cta]');
window.addEventListener('scroll', () => {
  const el = cta(); if (!el) return;
  el.classList.toggle('translate-y-0', window.scrollY > 300);
  el.classList.toggle('translate-y-full', window.scrollY <= 300);
});
```

- [ ] **Step 4: Document the shared `<head>` block**

`design/partials/README.md` — paste the exact block every page must use:

```html
<!-- COPY THIS <head> INTO EVERY design/*.html PAGE -->
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@400;500;600;700&display=swap" rel="stylesheet" />
<script src="https://cdn.tailwindcss.com"></script>
<script src="assets/tailwind-config.js"></script>
<link rel="stylesheet" href="assets/base.css" />
<!-- page <title>/<meta description> go here, then before </body>: -->
<!-- <script src="assets/ui.js"></script> -->
```

- [ ] **Step 5: Smoke-test the config, then delete the smoke page**

Create `design/_smoke.html` with the shared `<head>` and a body containing
`<div class="bg-brand-500 text-white font-sans p-6 rounded-2xl">tokens work</div>`.
Open it in a browser.
Expected: the box uses the brand color, IBM Plex Sans Thai font, and rounded-2xl corner — confirming Tailwind CDN reads `tailwind-config.js`.
Then delete `design/_smoke.html`.

- [ ] **Step 6: Commit**

```bash
git add design/assets design/partials
git commit -m "chore(design): scaffold HTML design system tooling and tokens"
```

---

## Task 2: Extract real brand colors and lock the palette

**Files:**
- Modify: `design/assets/tailwind-config.js` (replace placeholder hex)

- [ ] **Step 1: Extract the brand colors**

Get the real brand hex using whichever source is available, in this priority:
1. The client's logo file / brand guideline (open item #4 in the spec).
2. The live site `natchayaclinic.com` — open it, inspect the header/buttons/logo with browser DevTools, read the computed `background-color`/`color` hex.
3. Sample the logo image: open the logo in any image editor / use a color-picker browser extension on the live site.

Record the primary, a darker shade (for hover), and a light tint (for backgrounds).

- [ ] **Step 2: Replace the `brand` palette with the extracted values**

In `design/assets/tailwind-config.js`, replace the `brand.500` (primary), `brand.600`/`brand.700` (hover/active), and `brand.50`/`brand.100` (tints) hex with the extracted colors. Keep the key names. If the brand is not pink, rename nothing — only change hex.

- [ ] **Step 3: Verify contrast**

Check primary `brand.500` on white and white-on-`brand.500` meet WCAG AA (contrast ≥ 4.5:1 for text). Use any contrast checker. If the primary is too light for text-on-white, darken `brand.600` and use it for text/links while keeping `brand.500` for fills.
Expected: documented pass for button text and link text.

- [ ] **Step 4: Commit**

```bash
git add design/assets/tailwind-config.js
git commit -m "feat(design): lock brand palette from real logo/site colors"
```

> If the logo/colors are not yet available from the client, do Task 2 with the best-available source and flag it for re-confirmation — do not block Task 3 on it.

---

## Task 3: Build `design-system.html` (the component reference)

**Files:**
- Create: `design/design-system.html`

This single page shows every token and component with states. It is the reference the other pages copy from.

- [ ] **Step 1: Page skeleton + foundation section**

Create `design/design-system.html` with the shared `<head>` (from `partials/README.md`), `<title>Design System — Natchaya</title>`, and a body with `class="font-sans text-ink bg-surface"`. Add sections in this order, each under an `<h2>`:

1. **Colors** — swatches for every `brand`, `ink`, `surface`, `line`, `line_green` token with the hex labeled.
2. **Typography** — IBM Plex Sans Thai at the full type scale (display / h1 / h2 / h3 / body / small) using real Thai copy, showing the 1.85 body line-height.
3. **Spacing & radius** — visual scale.

- [ ] **Step 2: Buttons + CTAs**

Add a **Buttons** section showing, each in default/hover/disabled:
- Primary (`bg-brand-500 hover:bg-brand-600 text-white rounded-xl px-5 py-3 font-medium`)
- Secondary (outline)
- LINE button (`bg-[#06c755] text-white` with LINE glyph + "แอดไลน์")
- Call button (`โทรเลย` with phone glyph)

Then a **Sticky mobile CTA bar** demo: a fixed bottom bar (`data-sticky-cta`) with โทร / LINE / จองคิว, three equal columns, shown only on `sm:hidden`.

- [ ] **Step 3: Cards**

Add a **Cards** section with three card types using dummy Thai content + placeholder images (`https://placehold.co/600x400`):
- Service card (image, title, short excerpt, "ดูรายละเอียด")
- Article card (cover, category chip, title, date)
- Review card (before/after split image, patient alias, star row, "อ่านรีวิว"); include a "featured/เซเลบ" variant with a badge.

- [ ] **Step 4: Forms + navigation + misc**

Add sections for:
- **Form fields**: text input, textarea, select, with label + default/focus/error states (error shows red ring + helper text).
- **Navbar**: logo left, real-link menu (บริการ/Women Plus/รีวิว/บทความ/ติดต่อ) — **no `javascript:` links, use real `#` placeholders pointing at page filenames**; mobile hamburger (`data-nav-toggle` + `data-nav-menu`).
- **Footer**: contact, map link, social, LINE.
- **Breadcrumb**, **Accordion** (`data-accordion-trigger`), **Pagination**, **Gallery grid**.
Add `<script src="assets/ui.js"></script>` before `</body>`.

- [ ] **Step 5: Verify**

Open `design/design-system.html` in a browser. Checklist:
- [ ] All colors render from tokens (not hardcoded hex in markup).
- [ ] Font is IBM Plex Sans Thai everywhere.
- [ ] Accordion opens/closes; mobile nav toggles; sticky CTA appears on scroll.
- [ ] No link uses `javascript:`.
- [ ] Resize to 375px (mobile), 768px (tablet), 1280px (desktop) — nothing overflows; mobile-first holds.

- [ ] **Step 6: Commit**

```bash
git add design/design-system.html
git commit -m "feat(design): build design-system reference page with all components"
```

---

## Task 4: Build `home.html` — 🚩 GATE 1 (client approval)

**Files:**
- Create: `design/home.html`

- [ ] **Step 1: Compose Home from design-system components**

Create `design/home.html` (shared `<head>`, `<title>Natchaya Clinic — คลินิกความงามครบวงจร</title>`, meta description). Build these sections top-to-bottom, reusing components from `design-system.html`:
1. Navbar (real links to the other page filenames).
2. **Hero** — headline + subcopy + primary CTA (จองคิว) + LINE button; trust signals (ปีประสบการณ์ / แพทย์เฉพาะทาง). Mobile-first layout.
3. **บริการเด่น** — grid of 6 service cards (the 6 categories: body/laser/facial/surgery/health/womenplus).
4. **รีวิวจริง** — row of review cards including one featured/เซเลบ.
5. **บทความ Beauty Care** — 3 latest article cards.
6. **Women Plus teaser** — band linking to the sub-brand landing.
7. **CTA band** — จองคิว / แอดไลน์ / โทร.
8. Footer + sticky mobile CTA bar.

Use `ui-ux-pro-max` for hero composition, visual hierarchy, and spacing quality.

- [ ] **Step 2: Verify Home**

Open in browser. Checklist:
- [ ] Mobile (375px) looks intentional and is the primary design; scales up cleanly to desktop.
- [ ] Sticky CTA appears on scroll (mobile); LINE/call/booking all reachable within one thumb-reach.
- [ ] Every nav + card link is a real link (no `javascript:`).
- [ ] LCP element (hero image/heading) is near the top and not blocked.
- [ ] Uses only design-system tokens/components — no new ad-hoc colors.

- [ ] **Step 3: Commit**

```bash
git add design/home.html
git commit -m "feat(design): build Home page (approval gate 1)"
```

- [ ] **🚩 Step 4: STOP — get client approval**

Send `design-system.html` + `home.html` to the client. **Do not build Tasks 5–13 until the client approves.** Capture any change requests, apply them to the design system first (so all later templates inherit them), then continue.

---

## Tasks 5–13: Remaining templates (after Gate 1 approval)

> Each task = one template file, built by reusing approved design-system components, verified with the same checklist (mobile-first renders; real links only; tokens only; no overflow at 375/768/1280; interactions work). Use `ui-ux-pro-max` per page. Commit each separately with `feat(design): build <name> template`.

- [ ] **Task 5 — `about.html`:** clinic story, doctor cards (from `doctors` shape: photo/name/specialty/bio), certifications/awards, location teaser, CTA band.
- [ ] **Task 6 — `listing.html`:** generic archive — page title + intro, optional category filter chips, responsive card grid (reuses article/review/service cards), pagination. Must visibly work as both an articles list and a reviews list (show a toggle note in a comment).
- [ ] **Task 7 — `service-detail.html`:** breadcrumb, title, hero image, body content area, price_info block, before/after gallery, related services, sticky booking CTA. This template also represents Women Plus / Liposuction / Product detail.
- [ ] **Task 8 — `article-detail.html`:** breadcrumb, title, meta (author/date/category), cover, long-form body with a table-of-contents, related articles, CTA. Built for SEO long-form (clear heading hierarchy).
- [ ] **Task 9 — `review-detail.html`:** before/after gallery (primary), patient alias, related service link, star rating, body, featured/เซเลบ treatment, CTA.
- [ ] **Task 10 — `womenplus.html`:** sub-brand landing with its own tone (still on the same tokens), service grid for NC Repair/O-Shot/etc., doctor (พญ. ศรีสุภา), FAQ teaser, CTA.
- [ ] **Task 11 — `contact.html`:** booking/consult form (name/phone/LINE id/service select/message) with validation states, Google Maps embed placeholder, LINE/call buttons, opening hours, address.
- [ ] **Task 12 — `faq.html`:** accordion list grouped by category (reuses accordion component).
- [ ] **Task 13 — `news-detail.html`:** event/news article layout (title, date, cover, body, gallery).

- [ ] **Final Step — Full-set review + commit:** Open every page; confirm visual consistency across all 10 templates (same nav/footer/spacing/tokens). Fix drift. Then:

```bash
git add design/
git commit -m "feat(design): complete all representative templates"
```

🚩 **GATE 2:** Client approves the full template set → Plan 1 done → proceed to Plan 2 (Next.js Foundation).

---

## Subsequent Plans (written after design approval + open-item confirmation)

These are **not** detailed here because they depend on outputs that don't exist yet (approved designs, DB access, brand assets, LINE OA). Write each as its own plan when its inputs are ready:

- **Plan 2 — Next.js Foundation:** scaffold Next.js (App Router) + Tailwind (config copied from `tailwind-config.js`) + `next/font` IBM Plex Sans Thai; convert the 10 approved HTML templates into React components + shared layout. *(TDD)*
- **Plan 3 — Supabase Schema + Admin Panel:** migrations for all tables + RLS + Auth; build `/admin` (CRUD, Tiptap, image upload, leads inbox, settings). *(TDD)* — needs schema sign-off.
- **Plan 4 — Content Migration:** migration script (DB export *or* crawl-HTML parse) + the human-reviewed Migration Mapping Sheet (keep/merge/drop) → Supabase + `redirects` rows. *(needs DB-access answer, open item #3)*
- **Plan 5 — SEO/Redirects + Deploy:** redirect middleware, schema markup, sitemap/robots, GA4/GSC baseline capture, Resend wiring, Vercel deploy + launch sequence. *(needs email domain + LINE OA answers)*

---

## Self-Review Notes

- **Spec coverage:** Plan 1 implements spec §3 (architecture/folder), §4 (design system), §5 (all 10 templates), §8 (form/LINE/call UI placeholders), §10 (real nav links, no `javascript:`), and the §2 decisions (Tailwind CDN, IBM Plex Sans Thai, Home-first gate). Spec §6/§7/§9/§11 (schema/admin/migration/deploy) are explicitly deferred to Plans 2–5 with stated dependencies.
- **Open items reflected:** brand hex (Task 2), Liposuction/LINE OA/DB-access/email-domain surfaced as dependencies of Plans 2–5.
- **No automated tests** in this plan by design — it is visual/static design work; verification is the per-task browser+responsive checklist. TDD resumes in Plan 2.
