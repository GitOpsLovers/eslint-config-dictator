import { createRequire } from 'node:module';

import recommended from './recommended.mjs';

const require = createRequire(import.meta.url);

const createMissingPeerParser = (peerName, originalError) => ({
  parseForESLint() {
    throw new Error(
      `Unable to load ${peerName}. Install a compatible version to use dictator/typescript preset. Original error: ${originalError.message}`,
    );
  },
});

const createMissingPeerPlugin = (peerName, originalError) => ({
  meta: {
    name: peerName,
  },
  rules: new Proxy({}, {
    get() {
      throw new Error(
        `Unable to load ${peerName}. Install a compatible version to use dictator/typescript preset. Original error: ${originalError.message}`,
      );
    },
  }),
});

const loadPeerDependency = (peerName, fallbackFactory) => {
  try {
    return require(peerName);
  } catch (error) {
    return fallbackFactory(peerName, error);
  }
};

const tsParser = loadPeerDependency('@typescript-eslint/parser', createMissingPeerParser);
const tsPlugin = loadPeerDependency('@typescript-eslint/eslint-plugin', createMissingPeerPlugin);

/**
 * TypeScript preset.
 * Extends the recommended base config for TypeScript projects.
 * Requires @typescript-eslint/parser and @typescript-eslint/eslint-plugin as peer dependencies.
 */
const typescriptConfig = {
  languageOptions: {
    ...recommended.languageOptions,
    ecmaVersion: 2022,
    parser: tsParser,
  },
  plugins: {
    '@typescript-eslint': tsPlugin,
  },
  rules: {
    // Turn off base rules that are replaced by TypeScript-aware equivalents
    'no-unused-vars': 'off',
    'no-shadow': 'off',
    'no-undef': 'off',

    // TypeScript-aware replacements
    '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    '@typescript-eslint/no-shadow': 'error',

    // TypeScript-specific rules
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'warn',

    // Carry over remaining base rules
    ...Object.fromEntries(
      Object.entries(recommended.rules).filter(([key]) =>
        !['no-unused-vars', 'no-shadow', 'no-undef'].includes(key),
      ),
    ),
  },
};

export default typescriptConfig;
