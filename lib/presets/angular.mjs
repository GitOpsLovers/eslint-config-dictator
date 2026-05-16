import globals from 'globals';

import baseConfig from '../configs/base.mjs';

/**
 * Angular preset.
 * Applies on top of the base config with Angular-specific conventions.
 * For full Angular lint support, also install @angular-eslint/eslint-plugin.
 */
const angularConfig = [
  ...baseConfig,
  {
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    globals: {
      ...globals.es2021,
      ...globals.node,
      ...globals.browser,
    },
  },
  rules: {
    // Overrides base
    'no-console': 'warn',
    curly: ['error', 'all'],

    // Not in base
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-template': 'warn',
    'object-shorthand': ['warn', 'always'],
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    'no-undef': 'error',
    semi: ['error', 'always'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'comma-dangle': ['error', 'always-multiline'],
    'no-duplicate-case': 'error',
    'no-unreachable': 'error',
    'no-unused-expressions': 'error',

    // Angular: classes with decorators make shadowing intentional
    'no-shadow': 'off',

    // Angular-specific
    'valid-typeof': 'error',
    'require-await': 'error',
    'prefer-arrow-callback': 'error',
    'max-classes-per-file': ['error', 1],
    'no-underscore-dangle': ['warn', { allowAfterThis: true }],
    'no-invalid-this': 'off',
    'no-duplicate-imports': 'error',
  },
  },
];

export default angularConfig;
