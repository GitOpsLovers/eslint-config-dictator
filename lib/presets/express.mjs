import globals from 'globals';

/**
 * Express / Node.js preset.
 * Extends the recommended base config with Express and Node.js conventions.
 */
const expressConfig = {
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    globals: {
      ...globals.es2021,
      ...globals.node,
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
    'no-shadow': 'error',
    'no-undef': 'error',

    // Style
    'no-trailing-spaces': 'error',
    'eol-last': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    semi: ['error', 'always'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'comma-dangle': ['error', 'always-multiline'],


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

export default expressConfig;
