const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: path.resolve(__dirname, './src/index.js')
  },
  output: {
    publicPath: '/',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Yelp App',
      template: './public/index.html'
    })
  ],
  module: {
    // React JS/JSX
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/, /storybook-helpers/],
        use: {
          loader: 'babel-loader'
        }
      },
      // SVG
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
            // set width/height of svg to 1em,
            // so its size inherits from font size
            icon: true,
          },
        }],
      },
      // CSS
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  }
};