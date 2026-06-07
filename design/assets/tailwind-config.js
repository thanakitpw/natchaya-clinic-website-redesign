// Single source of truth for the design system.
// These exact tokens get copied into tailwind.config.js when we build the Next.js app (Plan 2).
// Loaded AFTER the Tailwind Play CDN script so `tailwind` already exists.
window.tailwind = window.tailwind || {};
window.tailwind.config = {
  theme: {
    extend: {
      colors: {
        // Brand GOLD — champagne gold from the real logo. Client-confirmed primary = #d6c152 (brand.400).
        // Bright gold is LIGHT, so use it as a fill with DARK (ink) text; use 700 for gold text on white.
        brand: {
          50:  '#fdfbf0',
          100: '#f7f0d4',
          200: '#eadda0',
          300: '#e0cd6f',
          400: '#d6c152', // PRIMARY — the logo champagne gold (fill + dark text)
          500: '#c2ab3e', // hover for gold fills
          600: '#9c8830', // deep gold (focus ring, emphasis)
          700: '#7f6f1d', // gold text/links on white (AA) — the deep tone from the old site
          800: '#5e5215',
        },
        // Brand PLUM — secondary accent from the live site (#5f055d); used for the Women Plus sub-brand.
        accent: {
          100: '#f6e7f5',
          500: '#5f055d',
          600: '#4a0448', // hover
        },
        ink: { DEFAULT: '#1f2433', muted: '#5b6173', soft: '#9aa0b0' },
        line: '#e8eaf0',
        surface: { DEFAULT: '#ffffff', alt: '#f8f7f2' }, // warm off-white to sit with gold
        line_green: '#06c755', // LINE brand green (fixed, do not change)
      },
      fontFamily: {
        sans: ['"IBM Plex Sans Thai"', 'system-ui', 'sans-serif'],
        // Display serif for Latin/number accents only (echoes the serif logo). Thai always uses sans.
        display: ['"Playfair Display"', '"IBM Plex Sans Thai"', 'serif'],
      },
      boxShadow: {
        // Soft UI Evolution: soft, layered, low-contrast shadows
        soft: '0 1px 2px rgba(31,36,51,0.04), 0 8px 24px rgba(31,36,51,0.06)',
        'soft-lg': '0 2px 4px rgba(31,36,51,0.05), 0 16px 40px rgba(31,36,51,0.10)',
      },
      borderRadius: { xl: '1rem', '2xl': '1.25rem' },
      maxWidth: { content: '72rem' },
    },
  },
};
