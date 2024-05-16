const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = 3001;

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'development',
  entry: ['./src/index.ts'],
  module: {
    rules: require('./webpack.rules'),
  },
  output: {
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.ts'],
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
