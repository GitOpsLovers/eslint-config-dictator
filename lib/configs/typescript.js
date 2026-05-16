'use strict';

const recommended = require('./recommended');

/**
 * TypeScript preset.
 * Extends the recommended base config for TypeScript projects.
 * Requires @typescript-eslint/parser and @typescript-eslint/eslint-plugin as peer dependencies.
 */
module.exports = {
  env: {
    ...recommended.env,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ...recommended.parserOptions,
    ecmaVersion: 2022,
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // Turn off base rules that are replaced by TypeScript-aware equivalents
    'no-unused-vars': 'off',
    'no-shadow': 'off',
    'no-undef': 'off',

    // TypeScript-aware replacements
    '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    '@typescript-eslint/no-shadow': 'error',

    // TypeScript-specific rules
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'warn',

    // Carry over remaining base rules
    ...Object.fromEntries(
      Object.entries(recommended.rules).filter(([key]) =>
        !['no-unused-vars', 'no-shadow', 'no-undef'].includes(key),
      ),
    ),
  },
};
