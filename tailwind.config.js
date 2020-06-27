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
      display: ['Permanent Marker', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          default: '#08415C',
          dark: '#062C3D',
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
