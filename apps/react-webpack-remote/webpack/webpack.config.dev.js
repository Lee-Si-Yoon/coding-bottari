const path = require('path');

const port = 3001;

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'development',
  entry: ['./src/main.tsx'],
  module: {
    rules: require('./webpack.rules'),
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: `http://localhost:${port}/`,
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },
  stats: 'errors-warnings',
  devtool: 'cheap-module-source-map',
  devServer: {
    port,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
  plugins: require('./webpack.plugins'),
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  performance: {
    hints: false,
  },
};
