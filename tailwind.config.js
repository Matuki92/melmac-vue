module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      height: {
        'half-screen': '50vh',
        72: '20rem',
      },
      width: {
        72: '20rem',
        80: '24rem',
      },
      opacity: {
        90: '90%',
      },
      fontSize: {
        l: '1.15rem'
      }
    },
  },
  variants: {
    cursor: ['hover', 'focus'],
  },
}
