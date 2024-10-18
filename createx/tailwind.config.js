/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'kagitingan': ['Kagitingan', 'sans-serif'],
        'jura': ['Jura', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

