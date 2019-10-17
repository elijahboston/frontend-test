const merge = require('webpack-merge');
const WebpackDashboard = require('webpack-dashboard/plugin');
const defaultConfig = require('./webpack.config');

module.exports = merge(defaultConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new WebpackDashboard()
  ],
  devServer: {
    publicPath: '/',
    compress: true,
    port: 3000,
    historyApiFallback: true,
    hot: true,
    proxy: {
      '/api': {
        target: 'https://api.yelp.com/v3/graphql',
        // remove /api from path
        pathRewrite: {'^/api' : ''},
        // handle proxying to https
        secure: false,
        changeOrigin: true
      }
    }
  }
});