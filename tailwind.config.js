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
          default: 'var(--color-primary)',
          dark: 'var(--color-primary-dark)',
        },
        secondary: {
          default: 'var(--color-secondary)',
          dark: 'var(--color-secondary-dark)',
        },
        travelex: {
          default: '#DA292F',
          dark: '#bc2026',
        },
        twitter: '#00ACEE',
      },
    },
  },
  variants: {},
  plugins: [],
};
