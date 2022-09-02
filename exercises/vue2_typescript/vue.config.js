// eslint-disable-next-line @typescript-eslint/no-var-requires
// const webpack = require('webpack');

module.exports = {
  publicPath: '/',
  transpileDependencies: [],

  lintOnSave: false,

  devServer: {
    https: false,
    hot: true,
    port: 8085,
    public: 'http://localhost:8085',
  },
};
