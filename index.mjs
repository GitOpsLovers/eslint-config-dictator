import { readFileSync } from 'node:fs';

import angularConfig from './lib/configs/angular.mjs';
import expressConfig from './lib/configs/express.mjs';
import reactConfig from './lib/configs/react.mjs';
import recommendedConfig from './lib/configs/recommended.mjs';
import typescriptConfig from './lib/configs/typescript.mjs';

const packageVersion = JSON.parse(
  readFileSync(new URL('./package.json', import.meta.url), 'utf8'),
).version;

const plugin = {
  meta: {
    name: 'eslint-plugin-dictator',
    version: packageVersion,
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

export default plugin;
