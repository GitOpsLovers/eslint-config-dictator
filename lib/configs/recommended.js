'use strict';

/**
 * Recommended (base) preset.
 * Applies to every JavaScript/TypeScript project regardless of framework.
 */
module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
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
    'no-shadow': 'error',
    'no-undef': 'error',

    // Style
    'no-trailing-spaces': 'error',
    'eol-last': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    semi: ['error', 'always'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'comma-dangle': ['error', 'always-multiline'],
  },
};
