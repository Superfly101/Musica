/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      lx: "1240px",
      xl: "1440px",
    },
    extend: {
      colors: {
        light: "#EFEEE0",
        dark: "#1D2123",
        primary: "#A4C7C6",
        secondary: "#FACD66",
        darkAlt: "#1A1E1F",
        alt: "#A4C7C6",
        blue: "#609EAF",
        backdrop: "rgba(29, 33, 35, 0.3)",
        fadedGray: "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        sans: ["Quicksand", "sans-serif"],
      },
      dropShadow: {
        "3xl": "0px -25px 100px rgba(16, 16, 16, 0.51)",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.645, 0.045, 0.355, 1)",
      },
      transitionDuration: {
        250: "250ms",
      },
    },
  },
  plugins: [],
};
