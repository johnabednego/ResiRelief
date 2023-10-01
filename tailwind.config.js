/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "primary":"#003366",
      "secondary":"#563524",
      current: 'currentColor',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      blue:colors.blue
    },
    extend: {
      backgroundImage: {
        'location': "url('/src/components/Home/assets/location.png')",
        'house': "url('/src/components/Home/assets/house.png')",
        'hotel':"url('/src/components/About/assets/ab1.jpg')",
        'contact':"url('/src/components/Contact/assets/contact.jpg')"
      },
      boxShadow: {
        'input': '10px 10px 40px 4px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}