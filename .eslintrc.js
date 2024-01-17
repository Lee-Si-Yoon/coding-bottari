/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['structures/**/*.ts', 'math/**/*.ts'],
      extends: [
        'standard-with-typescript',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'eslint:recommended',
        'prettier',
      ],
      parser: '@typescript-eslint/parser',
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
    // {
    //   files: ['**/*.{mdx,md}'],
    //   extends: ['plugin:markdown/recommended'],
    //   processor: 'markdown/markdown',
    // },
    // {
    //   files: ['**/*.md/*.js'],
    //   parserOptions: {
    //     sourceType: 'module',
    //     ecmaVersion: 'latest',
    //   },
    // },
    // {
    //   files: ['**/*.md/*.ts'],
    //   env: {
    //     node: true,
    //   },
    //   parser: '@typescript-eslint/parser',
    //   parserOptions: {
    //     sourceType: 'module',
    //     ecmaVersion: 'latest',
    //   },
    // },
  ],
}
