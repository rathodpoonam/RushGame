/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: { 
      colors: {
        'purple': '#1B0029',
        'custom-transparent-white': '#fff0',
        'customPurple': '#311141',
        'dropPurple':'#311141',
        'customGreen':'#1BBE54',
        '10green':'#25CF43',
        'custom-transparent': '#fff0',
        'custom-white-alpha': '#ffffffa1',

      },
      borderRadius: {
        '100px': '100px',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(100% 100% at 0% 0%, #FF7B52 0%, rgba(131, 67, 255, 0.76) 100%)',
        'custom-gradient': 'linear-gradient(85.98deg, #FFE974 10.89%, #D06CFF 91.16%)',
        'custom-gradient1': 'linear-gradient(180deg, #00D047 0%, #00A040 100%)',
        'card-review':' linear-gradient(82.46deg, #27003A 1.21%, #2A0143 97.93%);'

      },
      boxShadow: {
        'custom-shadow': '0 4px 12px -5px rgb(40 153 83 / 0.12)',
        'shadow-download':'0 1px rgb(0 0 0 / 0.12)',
      },
      letterSpacing: {
        tightest: '0.01rem',
      }, backgroundSize: {
        'full': '100% 100%',
      },
      
    
    },
  },
  plugins: [
    require('tailwindcss-filters'),
    require('tailgrids/plugin'),
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.backdrop-blur-25': {
          backdropFilter: 'blur(25px)',
        },
        '.backdrop-blur-100': {
          backdropFilter: 'blur(100px)',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
}

