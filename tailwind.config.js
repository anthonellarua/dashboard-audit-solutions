/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    center: true,
    rounded:{
      sm: '4px',
      md: '10px',
      lg: '20px',
    },
    extend: {
      gridTemplateRows: {
        '8': 'repeat(8, minmax(0, 1fr))',
      },
      fontFamily: {
        'Satoshi': ['Satoshi', 'sans-serif'],
      },
      colors: {
        primary: '#681523',
        primary_200_v2: '#ED9EAB',
        primary_400_v2: '#811A2C',
        primary_600_v2: '#4D101A',
        primary_800_v2: '#22050A',

        secondary: '#FBE8EB',
        secondary_200_v2: '#FBE8B6',
        secondary_400_v2: '#F9D67B',
        secondary_600_v2: '#FEFAEF',
        secondary_800_v2: '#F4B718',

        light: '#F9A3AA',

        neutral_gray_100_v2: '#FFFFFF',
        neutral_gray_200_v2: '#E1DEDF',
        neutral_gray_400_v2: '#87787B',
        neutral_gray_600_v2: '#4C4244',

        tertiary_200_v2:'#EC9EAB',
        
        subtext: '#78766F',
        background: {
          offwhite: '#FFFBED',
          DEFAULT: '#FFF9E0',
          grey: '#F8F5EC'
        },

        stroke: {
          DEFAULT: '#9C9C9C',
          light: '#C2C1BE',
          red: '#E1CFCC',
        }
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.bg-gradient-1': {
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FBE8EB 98.5%)'
        },
        '.bg-gradient-3': {
          background: 'linear-gradient(180deg, #4D101A 34%, #811A2C 100%)'
        },
        '.bg-gradient-4': {
          background: 'radial-gradient(39.71% 39.71% at 50% 32.35%, #ED9EAB 0%, #811A2C 100%)'
        },
        '.bg-gradient-6': {
          background: 'linear-gradient(272.72deg, #4D101A -22.94%, #811A2C 100%)'
        },
        '.bg-gradient-7': {
          background: 'linear-gradient(164deg, rgba(255,255,255,1) 0%, rgba(226,82,105,1) 49%)'
        },
      })
    })
  ],
};