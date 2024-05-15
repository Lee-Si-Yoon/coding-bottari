const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ['@bottari/ui'],
  trailingSlash: true,
  // output: 'export',
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack },
  ) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        remotes: {
          reactRemote: dev
            ? 'reactRemote@http://localhost:3001/remoteEntry.js'
            : 'https://dydtgsxgx6ant.cloudfront.net/remoteEntry.js',
          cracoRemote: 'reactCraco@http://localhost:5000/remoteEntry.js',
        },
        filename: 'static/chunks/remoteEntry.js',
        shared: {},
      }),
    );

    return config;
  },
};
