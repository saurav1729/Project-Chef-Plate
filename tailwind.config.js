/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {

      'mobile':'640px',
      
      'tablet': '1025px',


      // => @media (min-width: 640px) { ... }
       'laptop':'1415px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      keyframes: {
          'mymove':{
              'from':{
                'right':'0%'
              },
              'to':{
                 'right':'50%'
              }
          }
      },
      animation:{
        'mymove':'1s ease-in-out forwards'
      }
    }
  },
  plugins: [
    require("@designbycode/tailwindcss-text-stroke"),
  ],
}

