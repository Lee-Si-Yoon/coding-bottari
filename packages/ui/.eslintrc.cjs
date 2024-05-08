/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['../../.eslintrc.cjs'],
  ignorePatterns: ['!**/*', 'node_modules', 'dist'],
  overrides: [
    {
      files: ['src/**/*.ts', 'src/**/*.tsx'],
      rules: {},
    },
  ],
};
