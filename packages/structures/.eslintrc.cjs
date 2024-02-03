/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['../../.eslintrc.cjs'],
  ignorePatterns: ['!**/*', '**/node_modules/**', '**/dist/**'],
  overrides: [
    {
      files: ['src/**/*.ts'],
      extends: [
        require.resolve('@vercel/style-guide/eslint/typescript'),
        require.resolve('@vercel/style-guide/eslint/node'),
      ],
    },
    {
      files: ['src/**/*.js'],
      extends: [require.resolve('@vercel/style-guide/eslint/node')],
    },
  ],
};
