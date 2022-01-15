module.exports = {
  build: {
    assetsPublicPath: '',
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/profile-website/'
    : ''
}