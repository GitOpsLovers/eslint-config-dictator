'use strict';

const recommendedConfig = require('./lib/configs/recommended');
const angularConfig = require('./lib/configs/angular');
const reactConfig = require('./lib/configs/react');
const expressConfig = require('./lib/configs/express');
const typescriptConfig = require('./lib/configs/typescript');

/**
 * eslint-plugin-dictator
 *
 * An opinionated ESLint plugin providing ready-to-use preset configurations
 * for popular JavaScript frameworks and environments.
 *
 * Usage (legacy .eslintrc):
 *   { "extends": ["plugin:dictator/recommended"] }
 *   { "extends": ["plugin:dictator/angular"] }
 *   { "extends": ["plugin:dictator/react"] }
 *   { "extends": ["plugin:dictator/express"] }
 *   { "extends": ["plugin:dictator/typescript"] }
 *
 * Usage (flat config eslint.config.js):
 *   const dictator = require('eslint-plugin-dictator');
 *   module.exports = [dictator.flatConfigs.recommended];
 */

const plugin = {
  meta: {
    name: 'eslint-plugin-dictator',
    version: require('./package.json').version,
  },

  // Custom rules (currently none; the value of this plugin is its preset configs)
  rules: {},

  // Legacy (eslintrc) configs — consumed via "extends": ["plugin:dictator/<name>"]
  configs: {
    recommended: {
      plugins: ['dictator'],
      ...recommendedConfig,
    },
    angular: {
      plugins: ['dictator'],
      ...angularConfig,
    },
    react: {
      plugins: ['dictator'],
      ...reactConfig,
    },
    express: {
      plugins: ['dictator'],
      ...expressConfig,
    },
    typescript: {
      // Merge 'dictator' with any plugins already declared in the config (e.g. '@typescript-eslint')
      ...typescriptConfig,
      plugins: ['dictator', ...(typescriptConfig.plugins || [])],
    },
  },

  // Flat config objects — consumed directly in eslint.config.js
  flatConfigs: {
    recommended: {
      name: 'dictator/recommended',
      ...recommendedConfig,
    },
    angular: {
      name: 'dictator/angular',
      ...angularConfig,
    },
    react: {
      name: 'dictator/react',
      ...reactConfig,
    },
    express: {
      name: 'dictator/express',
      ...expressConfig,
    },
    typescript: {
      name: 'dictator/typescript',
      ...typescriptConfig,
    },
  },
};

module.exports = plugin;
