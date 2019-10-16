const merge = require('webpack-merge');
const defaultConfig = require('./webpack.config');

module.exports = merge(defaultConfig, {
  mode: 'production',
  devtool: 'source-map'
});