const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const dependencies = require('./package.json').dependencies;

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ['@bottari/ui'],
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack },
  ) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        remotes: {
          reactRemote: 'reactRemote@http://localhost:3001/remoteEntry.js',
        },
        filename: 'static/chunks/remoteEntry.js',
        shared: {},
      }),
    );

    return config;
  },
};
