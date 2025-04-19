module.exports = {
  babel: {
    plugins: ['@emotion']
  },
  webpack: {
    configure: {
      resolve: {
        fallback: {
          path: require.resolve('path-browserify'),
          fs: false
        }
      }
    }
  }
}; 