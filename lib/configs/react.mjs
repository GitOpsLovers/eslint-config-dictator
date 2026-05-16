import globals from 'globals';

import recommended from './recommended.mjs';

/**
 * React preset.
 * Extends the recommended base config with React-specific conventions.
 * For full React lint support, also install eslint-plugin-react and eslint-plugin-react-hooks.
 */
const reactConfig = {
  languageOptions: {
    ...recommended.languageOptions,
    ecmaVersion: 2022,
    globals: {
      ...recommended.languageOptions.globals,
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
    ...recommended.rules,

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
