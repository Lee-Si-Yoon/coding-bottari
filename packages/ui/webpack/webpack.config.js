const path = require('path');

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'production',
  entry: ['./src/index.ts'],
  module: {
    rules: require('./webpack.rules'),
  },
  output: {
    filename: 'index.js',
    library: '$',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '../dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
  stats: 'errors-warnings',
};
