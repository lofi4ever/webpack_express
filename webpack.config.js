const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: {
    'bundle': './frontend/public/js/src/index.js',
    'vue-bundle': './frontend/public/js/src/vue-index.js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.css$/, use: ['vue-style-loader', 'css-loader']},
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'frontend/public/js')
  }
}