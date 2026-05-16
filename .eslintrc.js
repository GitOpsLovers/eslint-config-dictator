'use strict';

module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
  },
  rules: {
    'no-var': 'error',
    'prefer-const': 'error',
    semi: ['error', 'always'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'comma-dangle': ['error', 'always-multiline'],
    'no-trailing-spaces': 'error',
    'eol-last': ['error', 'always'],
  },
  overrides: [
    {
      files: ['tests/**/*.js'],
      env: {
        jest: true,
      },
    },
  ],
};
