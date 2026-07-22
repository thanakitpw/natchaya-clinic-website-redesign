/** @type {import('tailwindcss').Config} */
// Design tokens ported 1:1 from the static prototype's assets/tailwind-config.js.
// Only fontFamily is adapted: next/font generates hashed family names exposed as
// CSS variables, so `sans`/`display` point at those variables instead of literals.
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  // Utilities that only appear at runtime (toggled by the ported ui.js interactions)
  // never show up in the source scan, so pin them here or they'd get purged.
  safelist: [
    "translate-y-0",
    "translate-y-full",
    "translate-y-2",
    "opacity-0",
    "pointer-events-none",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#fdfbf0",
          100: "#f7f0d4",
          200: "#eadda0",
          300: "#e0cd6f",
          400: "#d6c152",
          500: "#c2ab3e",
          600: "#9c8830",
          700: "#7f6f1d",
          800: "#5e5215",
        },
        accent: {
          100: "#f6e7f5",
          500: "#5f055d",
          600: "#4a0448",
        },
        ink: { DEFAULT: "#1f2433", muted: "#5b6173", soft: "#9aa0b0" },
        line: "#e8eaf0",
        surface: { DEFAULT: "#ffffff", alt: "#f8f7f2" },
        line_green: "#06c755",
      },
      fontFamily: {
        sans: ["var(--font-sarabun)", "system-ui", "sans-serif"],
        display: ["var(--font-ibm-plex-thai)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(31,36,51,0.04), 0 8px 24px rgba(31,36,51,0.06)",
        "soft-lg": "0 2px 4px rgba(31,36,51,0.05), 0 16px 40px rgba(31,36,51,0.10)",
      },
      borderRadius: { xl: "1rem", "2xl": "1.25rem" },
      maxWidth: { content: "72rem" },
    },
  },
  plugins: [],
};
