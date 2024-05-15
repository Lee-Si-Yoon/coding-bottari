const {
  ModuleFederationPlugin,
} = require('@module-federation/enhanced/webpack');

const dependencies = require('./package.json').dependencies;

const moduleFederationConfig = {
  name: 'reactCraco',
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

/** @type {import('@craco/types').Configure} */
module.exports = {
  typescript: {
    enableTypeChecking: true,
  },
  webpack: {
    plugins: {
      add: [new ModuleFederationPlugin(moduleFederationConfig)],
    },
    configure: {},
  },
  devServer: {
    port: 5000,
  },
};
