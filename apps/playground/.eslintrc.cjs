/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['../../.eslintrc.cjs'],
  ignorePatterns: ['!**/*', '**/node_modules/**', '**/dist/**'],
  overrides: [
    {
      files: ['src/**/*.ts', 'src/**/*.tsx'],
      extends: [
        require.resolve('@vercel/style-guide/eslint/typescript'),
        require.resolve('@vercel/style-guide/eslint/browser'),
        require.resolve('@vercel/style-guide/eslint/react'),
      ],
    },
  ],
};
