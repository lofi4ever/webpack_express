const path = require('path');

module.exports = {
  entry: './frontend/public/js/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'frontend/public/js')
  }
}