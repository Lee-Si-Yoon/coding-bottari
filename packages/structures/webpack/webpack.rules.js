/** @type {import('webpack').Configuration['module']['rules']} */
module.exports = [
  {
    test: /\.ts?$/,
    exclude: /(node_modules|\.webpack)/,
    use: {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      },
    },
  },
];
