'use strict';

const recommendedConfig = require('./lib/configs/recommended');
const angularConfig = require('./lib/configs/angular');
const reactConfig = require('./lib/configs/react');
const expressConfig = require('./lib/configs/express');
const typescriptConfig = require('./lib/configs/typescript');

const plugin = {
  meta: {
    name: 'eslint-plugin-dictator',
    version: require('./package.json').version,
  },
  rules: {},
  configs: {},
};

plugin.configs = {
  recommended: {
    name: 'dictator/recommended',
    plugins: {
      dictator: plugin,
    },
    ...recommendedConfig,
  },
  angular: {
    name: 'dictator/angular',
    plugins: {
      dictator: plugin,
    },
    ...angularConfig,
  },
  react: {
    name: 'dictator/react',
    plugins: {
      dictator: plugin,
    },
    ...reactConfig,
  },
  express: {
    name: 'dictator/express',
    plugins: {
      dictator: plugin,
    },
    ...expressConfig,
  },
  typescript: {
    name: 'dictator/typescript',
    ...typescriptConfig,
    plugins: {
      dictator: plugin,
      ...(typescriptConfig.plugins || {}),
    },
  },
};

// Backward-compatible alias.
plugin.flatConfigs = plugin.configs;

module.exports = plugin;
