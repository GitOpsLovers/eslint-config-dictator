'use strict';

const recommended = require('./recommended');

/**
 * Angular preset.
 * Extends the recommended base config with Angular-specific conventions.
 * For full Angular lint support, also install @angular-eslint/eslint-plugin.
 */
module.exports = {
  env: {
    ...recommended.env,
    browser: true,
  },
  parserOptions: {
    ...recommended.parserOptions,
    ecmaVersion: 2022,
  },
  rules: {
    ...recommended.rules,

    // Angular projects typically use classes extensively
    'no-shadow': 'off',

    // Enforce consistent use of type annotations via comments
    'valid-typeof': 'error',

    // Async/await patterns common in Angular services
    'no-return-await': 'error',
    'require-await': 'error',

    // Prefer arrow callbacks in Angular to keep `this` context
    'prefer-arrow-callback': 'error',

    // Disallow multiple class declarations per file (Angular single-component-per-file rule)
    'max-classes-per-file': ['error', 1],

    // Angular style guide: prefer descriptive names
    'no-underscore-dangle': ['warn', { allowAfterThis: true }],

    // Decorators and class fields are heavily used; allow them
    'no-invalid-this': 'off',

    // Modules use default imports
    'no-duplicate-imports': 'error',
  },
};
