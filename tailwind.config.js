/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'light': '#EFEEE0',
      'dark': '#1D2123',
      'primary': '#A4C7C6',
      'secondary': '#FACD66',
      'dark-alt': '#1A1E1F',
      alt: '#A4C7C6'
    },
    extend: {
      fontFamily: {
        'sans': ['Quicksand', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
