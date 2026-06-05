# Shared `<head>` block

Static HTML has no include mechanism, so every `design/*.html` page copies this `<head>`
verbatim. The shared **values** (colors/font/spacing) live in `assets/tailwind-config.js`,
so only this boilerplate is duplicated — change tokens there, never in page markup.

```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title><!-- per-page title --></title>
  <meta name="description" content="<!-- per-page description -->" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@400;500;600;700&display=swap" rel="stylesheet" />

  <script src="https://cdn.tailwindcss.com"></script>
  <script src="assets/tailwind-config.js"></script>
  <link rel="stylesheet" href="assets/base.css" />
</head>
```

Before `</body>` on every page:

```html
<script src="assets/ui.js"></script>
```

## Page list (Plan 1)

- `design-system.html` — component reference (Task 3)
- `home.html` — GATE 1 (Task 4)
- `about.html`, `listing.html`, `service-detail.html`, `article-detail.html`,
  `review-detail.html`, `womenplus.html`, `contact.html`, `faq.html`, `news-detail.html` (Tasks 5–13)
