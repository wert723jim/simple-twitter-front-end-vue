module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "/src/assets/scss/_variables.scss";`
      }
    }
  },
  publicPath: '/simple-twitter-front-end-vue/'
};
