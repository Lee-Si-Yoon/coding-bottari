/**
 * @type {import("eslint").Linter.Config}
 * FIXME: make lint work
 */
module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'standard-with-typescript',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'eslint:recommended',
        'prettier',
      ],
    },
    {
      files: ['*.js'],
      extends: ['prettier', 'eslint:recommended'],
    },
  ],
};
