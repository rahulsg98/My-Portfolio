/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#05050f",
        secondary: "#a1a1b5",
        tertiary: "#10101f",
        "black-100": "#0c0c1a",
        "white-100": "#ededf5",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "Inter", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      screens: { xs: "450px" },
      keyframes: {
        shimmer: { "0%": { backgroundPosition: "0% 50%" }, "100%": { backgroundPosition: "200% 50%" } },
        pulseRing: { "0%": { transform: "scale(1)", opacity: 0.7 }, "100%": { transform: "scale(2.4)", opacity: 0 } },
      },
      animation: {
        shimmer: "shimmer 6s linear infinite",
        "pulse-ring": "pulseRing 1.6s ease-out infinite",
      },
    },
  },
  plugins: [],
};
