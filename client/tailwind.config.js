module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'className'
  theme: {
    extend: {
      colors: {
        Rich__Black: '#001219',
        Blue__Shappire: '#005F73',
        Viridian__Green: '#0A9396',
        Middle__Blue: '#94D2BD',
        Medium__Champagne: '#E9D8A6',
        Gamboge: '#EE9B00',
        Alloy__Orange: '#CA6702',
        Mahogany: '#BB3E03',
        Rufous: '#AE2012',
        Ruby__Red: '#9B2226',
        Gris__Claro: '#E4E4E4'
      }
    },
    maxWidth: { 
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      '80p': '80%',
    },
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    dropShadow: {
      '2xl': '1px 1px 0px rgba(255, 255, 255, 0.75)',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
