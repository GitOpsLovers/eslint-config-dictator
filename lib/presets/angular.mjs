import globals from 'globals';

/**
 * Angular preset.
 * Extends the recommended base config with Angular-specific conventions.
 * For full Angular lint support, also install @angular-eslint/eslint-plugin.
 */
const angularConfig = {
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
    // Possible errors
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-duplicate-case': 'error',
    'no-unreachable': 'error',

    // Best practices
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-unused-expressions': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-template': 'warn',
    'object-shorthand': ['warn', 'always'],
    curly: ['error', 'all'],

    // Variables
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    'no-undef': 'error',

    // Style
    'no-trailing-spaces': 'error',
    'eol-last': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    semi: ['error', 'always'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'comma-dangle': ['error', 'always-multiline'],


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
