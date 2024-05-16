const HtmlWebpackPlugin = require('html-webpack-plugin');

const dependencies = require('../package.json').dependencies;

/** @type {import('webpack').Configuration['plugins']} */
module.exports = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
    inject: true,
  }),
];
