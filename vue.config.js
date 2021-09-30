module.exports = {
  publicPath: '/steak-house/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/ui/main.scss";`,
      },
    },
  },
};
