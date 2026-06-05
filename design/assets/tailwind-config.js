// Single source of truth for the design system.
// These exact tokens get copied into tailwind.config.js when we build the Next.js app (Plan 2).
// Loaded AFTER the Tailwind Play CDN script so `tailwind` already exists.
window.tailwind = window.tailwind || {};
window.tailwind.config = {
  theme: {
    extend: {
      colors: {
        // Brand GOLD — extracted from the real logo (initials) + 21 accent uses in custom.css (#7f6f1d).
        brand: {
          50:  '#faf8f0',
          100: '#f2eed9',
          300: '#cfc06a',
          500: '#7f6f1d', // primary — the logo gold
          600: '#6a5d18', // hover
          700: '#524813', // active / text-on-light (high contrast)
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
      },
      borderRadius: { xl: '1rem', '2xl': '1.25rem' },
      maxWidth: { content: '72rem' },
    },
  },
};
