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
        'dark-gray': '#393E46',    
        'teal': '#00ADB5',         
        'light-gray': '#EEEEEE',   
        'gray-hover': '#4A5159',   
        'teal-dark': '#008A91',   
      },
      backgroundImage: {
      
        'teal-to-white': 'linear-gradient(to bottom, #00ADB5, #FFFFFF)',
      },
    },
  },
  plugins: [],
};