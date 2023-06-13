module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "/src/assets/scss/_variables.scss";`
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? '/simple-twitter-front-end-vue/'
  : '/'
};
