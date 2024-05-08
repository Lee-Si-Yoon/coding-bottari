/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['../../.eslintrc.cjs'],
  ignorePatterns: ['!**/*', 'node_modules', 'dist'],
  overrides: [
    {
      files: ['src/**/*.ts'],
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
      },
    },
    {
      files: ['src/**/*.js'],
      rules: {},
    },
  ],
};
