const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
  ModuleFederationPlugin,
} = require('@module-federation/enhanced/webpack');

const dependencies = require('../package.json').dependencies;

const moduleFederationConfig = {
  name: 'reactRemote',
  filename: 'remoteEntry.js',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
  shared: {
    ...dependencies,
    react: {
      eager: true,
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      eager: true,
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};

/** @type {import('webpack').Configuration['plugins']} */
module.exports = [
  new ModuleFederationPlugin(moduleFederationConfig),
  // new FederatedTypesPlugin(moduleFederationConfig),
  new HtmlWebpackPlugin({
    template: './public/index.html',
    inject: true,
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[chunkhash].css',
    chunkFilename: '[name].[chunkhash].chunk.css',
  }),
].filter(Boolean);
