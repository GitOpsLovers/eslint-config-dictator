# eslint-plugin-dictator

> An opinionated ESLint plugin that provides ready-to-use preset configurations for popular JavaScript frameworks and environments — just pick a preset and go.

[![npm version](https://img.shields.io/npm/v/eslint-plugin-dictator)](https://www.npmjs.com/package/eslint-plugin-dictator)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## Available presets

| Preset | Description |
|---|---|
| `angular` | Rules for Angular applications |
| `react` | Rules for React applications (JSX support included) |
| `express` | Rules for Express / Node.js back-end projects |

---

## Installation

```bash
npm install --save-dev eslint-plugin-dictator
```

---

## Usage

### Flat config (`eslint.config.mjs` — ESLint 10.x)

```js
// eslint.config.mjs
import dictator from 'eslint-plugin-dictator';

export default [
  dictator.configs.angular,
  // or: dictator.configs.react
  // or: dictator.configs.express
];
```

---

## Preset details

### `angular`

Builds on the shared base and JSDoc configs, then adds:

- Browser environment enabled
- `max-classes-per-file: 1` (one component per file)
- `prefer-arrow-callback` → **error**
- `no-return-await` / `require-await` → **error**
- `no-duplicate-imports` → **error**

### `react`

Builds on the shared base and JSDoc configs, then adds:

- Browser environment + JSX `ecmaFeatures`
- `react.version: 'detect'` setting
- `prefer-arrow-callback` → **error**
- `no-param-reassign` with common React/Express exceptions (`req`, `res`, `ctx`, …)
- `no-return-await` / `require-await` → **error**

### `express`

Builds on the shared base and JSDoc configs, then adds:

- Node environment (browser disabled)
- `no-console` turned **off** (logging is intentional on the server)
- `no-unused-vars` ignores args named `next` or prefixed with `_`
- `no-param-reassign` with middleware exceptions (`req`, `res`, `ctx`, …)
- `no-promise-executor-return` / `no-async-promise-executor` → **error**
- `no-new-func` → **error**

---

## Contributing

Pull requests are welcome. Please run `npm test` before submitting.

## License

[MIT](LICENSE) © GitOps Lovers