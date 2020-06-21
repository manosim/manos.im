module.exports = {
  purge: ['./src/**/*.js'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      'max-width': {
        default: '10rem',
      },
    },
    fontFamily: {
      display: ['Sen', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          default: '#010E1E',
          dark: '#010810',
        },
        secondary: {
          default: '#119DA4',
          dark: '#006A71',
        },
        twitter: '#00ACEE',
      },
    },
  },
  variants: {},
  plugins: [],
};
