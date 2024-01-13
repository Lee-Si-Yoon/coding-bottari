/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['structures/**/*.ts'],
      extends: ['standard-with-typescript', 'eslint:recommended', 'prettier'],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        project: ['./tsconfig.json'],
      },
      rules: {
        '@typescript-eslint/space-before-function-paren': 'off',
      },
    },
    {
      env: {
        node: true,
      },
      extends: ['prettier'],
      files: ['structures/**/*.js'],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
    },
    {
      files: ['**/*.{mdx,md}'],
      extends: ['plugin:markdown/recommended'],
      processor: 'markdown/markdown',
    },
    {
      files: ['**/*.md/*.{js,jsx}'],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
    },
    {
      files: ['**/*.md/*.{ts,tsx}'],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
    },
  ],
}
