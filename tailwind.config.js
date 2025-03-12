/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      gridTemplateColumns: {
        '70/30': '70% 30%',
      },
      colors: {
        'dark-gray': '#393E46',    // Primary dark color for headers, nav, buttons
        'teal': '#00ADB5',         // Accent color for buttons, highlights
        'light-gray': '#EEEEEE',   // Neutral background color
        'gray-hover': '#4A5159',   // Hover shade for dark-gray
        'teal-dark': '#008A91',    // Hover shade for teal
      },
    },
  },
  plugins: [],
};