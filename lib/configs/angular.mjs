import globals from 'globals';

import recommended from './recommended.mjs';

/**
 * Angular preset.
 * Extends the recommended base config with Angular-specific conventions.
 * For full Angular lint support, also install @angular-eslint/eslint-plugin.
 */
const angularConfig = {
  languageOptions: {
    ...recommended.languageOptions,
    ecmaVersion: 2022,
    globals: {
      ...recommended.languageOptions.globals,
      ...globals.browser,
    },
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

export default angularConfig;
