/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container:{
      center: true,
    },
    extend: {
      colors: {
        primary: '#479AFF',
        secondary: '#64748b',
        dark: '#0F172A',
      },
      screens: {
        '2xl' : '1320px'
      }
    },
  },
  plugins: [],
}

