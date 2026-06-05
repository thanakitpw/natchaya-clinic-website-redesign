// Single source of truth for the design system.
// These exact tokens get copied into tailwind.config.js when we build the Next.js app (Plan 2).
// Loaded AFTER the Tailwind Play CDN script so `tailwind` already exists.
window.tailwind = window.tailwind || {};
window.tailwind.config = {
  theme: {
    extend: {
      colors: {
        // Brand palette — REPLACE hex in Task 2 with values extracted from the real logo/site.
        brand: {
          50:  '#fdf2f6',
          100: '#fce7ee',
          300: '#f3a8c4',
          500: '#d6336c', // primary — placeholder, replaced in Task 2
          600: '#b02058', // hover
          700: '#8a1846', // active / text-on-light
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
