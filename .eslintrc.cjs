const { resolve } = require('node:path');

const project = resolve(__dirname, 'tsconfig.json');

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  parserOptions: {
    project,
    ecmaVersion: 'latest',
  },
  root: true,
  ignorePatterns: ['**/*'],
  overrides: [],
};
