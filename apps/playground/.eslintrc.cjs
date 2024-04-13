/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['plugin:@nx/react', '../../.eslintrc.cjs'],
  ignorePatterns: ['!**/*', '**/node_modules/**', '**/dist/**'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {},
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {},
    },
    {
      files: ['*.js', '*.jsx'],
      rules: {},
    },
  ],
};
