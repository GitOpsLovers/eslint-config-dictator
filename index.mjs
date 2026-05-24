import { readFileSync } from 'node:fs';

import angularConfig from './lib/presets/angular.mjs';
import expressConfig from './lib/presets/express.mjs';
import reactConfig from './lib/presets/react.mjs';
import nextConfig from './lib/presets/next.mjs';

const packageVersion = JSON.parse(
  readFileSync(new URL('./package.json', import.meta.url), 'utf8'),
).version;

const plugin = {
  meta: {
    name: 'eslint-config-multistack',
    version: packageVersion,
  },
  rules: {},
  configs: {},
};

plugin.configs = {
  angular: [
    { name: 'dictator/angular', plugins: { dictator: plugin } },
    ...angularConfig,
  ],
  react: [
    { name: 'dictator/react', plugins: { dictator: plugin } },
    ...reactConfig,
  ],
  next: [
    { name: 'dictator/next', plugins: { dictator: plugin } },
    ...nextConfig,
  ],
  express: [
    { name: 'dictator/express', plugins: { dictator: plugin } },
    ...expressConfig,
  ],
};

// Backward-compatible alias.
plugin.flatConfigs = plugin.configs;

export default plugin;
