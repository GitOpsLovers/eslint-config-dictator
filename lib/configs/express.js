'use strict';

const recommended = require('./recommended');

/**
 * Express / Node.js preset.
 * Extends the recommended base config with Express and Node.js conventions.
 */
module.exports = {
  env: {
    ...recommended.env,
    node: true,
    browser: false,
  },
  parserOptions: {
    ...recommended.parserOptions,
    ecmaVersion: 2022,
  },
  rules: {
    ...recommended.rules,

    // Server-side console usage is acceptable for logging
    'no-console': 'off',

    // Async/await patterns in route handlers
    'no-return-await': 'error',
    'require-await': 'error',

    // Express route handlers frequently use 'next' which may go unused
    'no-unused-vars': ['error', {
      vars: 'all',
      args: 'after-used',
      ignoreRestSiblings: true,
      argsIgnorePattern: '^(next|_)',
    }],

    // Allow reassigning req/res properties (common in middleware)
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'acc',
        'accumulator',
        'e',
        'ctx',
        'context',
        'req',
        'request',
        'res',
        'response',
      ],
    }],

    // Promise-based error handling
    'no-promise-executor-return': 'error',
    'no-async-promise-executor': 'error',

    // Security-relevant rules for server environments
    'no-eval': 'error',
    'no-new-func': 'error',
  },
};
