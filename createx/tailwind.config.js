/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      primary: '#FF6E1F',
      cream: '#F5E6C4',
      white: '#ffffff',
      black: '#000000',
    },
      fontFamily: {
        'kagitingan': ['Kagitingan', 'sans-serif'],
        'jura': ['Jura', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

