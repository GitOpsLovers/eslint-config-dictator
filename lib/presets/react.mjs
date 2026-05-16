import globals from 'globals';

/**
 * React preset.
 * Extends the recommended base config with React-specific conventions.
 * For full React lint support, also install eslint-plugin-react and eslint-plugin-react-hooks.
 */
const reactConfig = {
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    globals: {
      ...globals.es2021,
      ...globals.node,
      ...globals.browser,
    },
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
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

    // Style
    'no-trailing-spaces': 'error',
    'eol-last': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    semi: ['error', 'always'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'comma-dangle': ['error', 'always-multiline'],

    'no-shadow': 'error',
    'no-undef': 'error',


    // React files commonly use JSX which references variables implicitly
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

    // Arrow functions are idiomatic in React for component definitions
    'prefer-arrow-callback': 'error',

    // Async patterns in effects / data fetching
    'no-return-await': 'error',
    'require-await': 'error',

    // Prevent accidental mutations of props/state
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'acc',         // reduce accumulators
        'accumulator', // reduce accumulators
        'e',           // event.returnValue
        'ctx',         // koa context
        'context',     // express context
        'req',         // express request
        'request',     // express request
        'res',         // express response
        'response',    // express response
        'staticContext', // react-router staticContext
      ],
    }],

    // JSX spreads are common in React (e.g. <Component {...props} />)
    'no-duplicate-imports': 'error',
  },
};

export default reactConfig;
