/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Keep this for dark mode class handling
  theme: {
    extend: {
      colors: {
        primary: '#0a192f',
        secondary: '#172a45',
        accent: '#64ffda',
        text: '#ccd6f6',
        'text-secondary': '#8892b0',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}