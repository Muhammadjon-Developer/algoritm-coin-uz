import withMT from "@material-tailwind/react/utils/withMT";
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      slate: {
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#1e293b",
      },
      neutral: {
        100: "#f5f5f5"
      }
    },
    extend: {}
  },
  plugins: [],
});

