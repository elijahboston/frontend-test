const merge = require('webpack-merge');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const defaultConfig = require('./webpack.config');

module.exports = merge(defaultConfig, {
  mode: 'production',
  plugins: [
    new CopyPlugin([
      { from: 'netlify.toml', to: 'netlify.toml' },
    ]),
  ],
});