const { resolve } = require('node:path');

const project = resolve(__dirname, 'tsconfig.json');

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  // parserOptions: {
  //   project,
  //   ecmaVersion: 'latest',
  // },
  // settings: {
  //   'import/parsers': {
  //     '@typescript-eslint/parser': ['.ts', '.tsx'],
  //   },
  //   'import/resolver': {
  //     typescript: {
  //       project: ['tsconfig.json'],
  //     },
  //     node: {
  //       project: ['tsconfig.json'],
  //     },
  //   },
  // },
  root: true,
  ignorePatterns: ['**/*'],
  plugins: ['@nx'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        '@nx/enforce-module-boundaries': [
          'error',
          {
            enforceBuildableLibDependency: true,
            allow: [],
            depConstraints: [
              {
                sourceTag: '*',
                onlyDependOnLibsWithTags: ['*'],
              },
            ],
          },
        ],
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@nx/typescript'],
      rules: {},
    },
    {
      files: ['*.js', '*.jsx'],
      extends: ['plugin:@nx/javascript'],
      rules: {},
    },
  ],
};
