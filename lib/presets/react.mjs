import globals from 'globals';

import baseConfig from '../configs/base.mjs';
import importsConfig from '../configs/imports.mjs';
import jsdocConfig from '../configs/jsdoc.mjs';
import preferArrowConfig from '../configs/prefer-arrow.mjs';
import reactTestsConfig from '../configs/react-tests.mjs';
import regexConfig from '../configs/regex.mjs';
import securityConfig from '../configs/security.mjs';
import testsConfig from '../configs/tests.mjs';
import typescriptConfig from '../configs/typescript.mjs';

/**
 * React preset.
 * Applies on top of the base config with React-specific conventions.
 * For full React lint support, also install eslint-plugin-react and eslint-plugin-react-hooks.
 */
const reactConfig = [
  ...baseConfig,
  ...jsdocConfig,
  ...preferArrowConfig,
  ...regexConfig,
  ...securityConfig,
  ...typescriptConfig,
  ...importsConfig,
  ...testsConfig,
  ...reactTestsConfig,
  {
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
    // Overrides base
    'no-console': 'warn',
    curly: ['error', 'all'],

    // Not in base
    'prefer-const': 'error',
    'prefer-template': 'warn',
    'object-shorthand': ['warn', 'always'],
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    'no-shadow': 'error',
    'no-undef': 'error',
    semi: ['error', 'always'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'comma-dangle': ['error', 'always-multiline'],
    'no-duplicate-case': 'error',
    'no-unreachable': 'error',
    'no-unused-expressions': 'error',

    // React-specific
    'prefer-arrow-callback': 'error',
    'require-await': 'error',
    'no-duplicate-imports': 'error',
  },
  },
];

export default reactConfig;
