/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fdf4f0",
          100: "#fbe6dd",
          200: "#f6c9b8",
          300: "#f0a48c",
          400: "#e87a5e",
          500: "#c8553d",
          600: "#b04530",
          700: "#933727",
          800: "#783024",
          900: "#632b22",
        },
        accent: {
          50: "#fef9ec",
          100: "#fcefc9",
          200: "#f9dc8e",
          300: "#f5c44f",
          400: "#f0b020",
          500: "#d4950a",
          600: "#b87a08",
          700: "#955d0c",
          800: "#7a4c10",
          900: "#654013",
        },
        surface: {
          50: "#FAFAF7",
          100: "#F5F5F0",
          200: "#E8E8E2",
          300: "#D4D4CC",
        },
        ink: {
          50: "#f5f5f5",
          100: "#e0e0e0",
          200: "#b0b0b0",
          300: "#808080",
          400: "#505050",
          500: "#303030",
          600: "#1a1a1a",
          700: "#111111",
          800: "#0a0a0a",
          900: "#050505",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["DM Sans", "sans-serif"],
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
