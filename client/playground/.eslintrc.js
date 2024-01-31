/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  ignorePatterns: ['!**/*'],
  extends: ['../../.eslintrc.js'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:react-hooks/recommended'],
      parser: '@typescript-eslint/parser',
      plugins: ['react-refresh'],
      rules: {
        'react-refresh/only-export-components': [
          'warn',
          { allowConstantExport: true },
        ],
      },
    },
  ],
};
