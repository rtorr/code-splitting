var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/code-split/main.js'),
  output: {
    filename: 'dist/bundle.js',
  }
};