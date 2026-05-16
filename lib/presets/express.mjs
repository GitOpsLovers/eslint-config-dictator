import globals from 'globals';

import baseConfig from '../configs/base.mjs';
import jsdocConfig from '../configs/jsdoc.mjs';
import preferArrowConfig from '../configs/prefer-arrow.mjs';

/**
 * Express / Node.js preset.
 * Applies on top of the base config with Express and Node.js conventions.
 */
const expressConfig = [
  ...baseConfig,
  ...jsdocConfig,
  ...preferArrowConfig,
  {
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    globals: {
      ...globals.es2021,
      ...globals.node,
    },
  },
  rules: {
    // Overrides base
    curly: ['error', 'all'],
    'no-console': 'off',

    // Not in base
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-template': 'warn',
    'object-shorthand': ['warn', 'always'],
    'no-shadow': 'error',
    'no-undef': 'error',
    semi: ['error', 'always'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'comma-dangle': ['error', 'always-multiline'],
    'no-duplicate-case': 'error',
    'no-unreachable': 'error',
    'no-unused-expressions': 'error',
    'require-await': 'error',

    // Express route handlers frequently use 'next' which may go unused
    'no-unused-vars': ['error', {
      vars: 'all',
      args: 'after-used',
      ignoreRestSiblings: true,
      argsIgnorePattern: '^(next|_)',
    }],

    // Promise-based error handling
    'no-promise-executor-return': 'error',
    'no-async-promise-executor': 'error',
  },
  },
];

export default expressConfig;
