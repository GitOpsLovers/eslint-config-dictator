# eslint-plugin-dictator

> An opinionated ESLint plugin that provides ready-to-use preset configurations for popular JavaScript frameworks and environments — just pick a preset and go.

[![npm version](https://img.shields.io/npm/v/eslint-plugin-dictator)](https://www.npmjs.com/package/eslint-plugin-dictator)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## Available presets

| Preset | Description |
|---|---|
| `recommended` | Base rules suitable for every JavaScript project |
| `angular` | Rules for Angular applications |
| `react` | Rules for React applications (JSX support included) |
| `express` | Rules for Express / Node.js back-end projects |
| `typescript` | Rules for TypeScript projects (requires `@typescript-eslint`) |

---

## Installation

```bash
npm install --save-dev eslint-plugin-dictator
```

For the **TypeScript** preset you also need:

```bash
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

---

## Usage

### Legacy config (`.eslintrc.js` / `.eslintrc.json`)

Add `dictator` to the `plugins` array and then extend the desired preset:

```js
// .eslintrc.js
module.exports = {
  plugins: ['dictator'],
  extends: ['plugin:dictator/recommended'],
};
```

Pick any preset name:

```js
// Angular
extends: ['plugin:dictator/angular']

// React
extends: ['plugin:dictator/react']

// Express / Node
extends: ['plugin:dictator/express']

// TypeScript
extends: ['plugin:dictator/typescript']
```

### Flat config (`eslint.config.js` — ESLint ≥ 9)

```js
// eslint.config.js
const dictator = require('eslint-plugin-dictator');

module.exports = [
  dictator.flatConfigs.recommended,
  // or: dictator.flatConfigs.angular
  // or: dictator.flatConfigs.react
  // or: dictator.flatConfigs.express
  // or: dictator.flatConfigs.typescript
];
```

---

## Preset details

### `recommended` (base)

Applicable to every JavaScript project. Enables ES2021 globals, module source type and a curated set of rules:

- `no-var` → **error** (use `const`/`let`)
- `prefer-const` → **error**
- `eqeqeq` → **error** (strict equality)
- `no-eval` / `no-implied-eval` → **error**
- `no-unused-vars` → **error**
- `semi`, `quotes` (single), `comma-dangle` → enforced style
- `no-console` → **warn**

### `angular`

Extends `recommended` and adds:

- Browser environment enabled
- `max-classes-per-file: 1` (one component per file)
- `prefer-arrow-callback` → **error**
- `no-return-await` / `require-await` → **error**
- `no-duplicate-imports` → **error**

### `react`

Extends `recommended` and adds:

- Browser environment + JSX `ecmaFeatures`
- `react.version: 'detect'` setting
- `prefer-arrow-callback` → **error**
- `no-param-reassign` with common React/Express exceptions (`req`, `res`, `ctx`, …)
- `no-return-await` / `require-await` → **error**

### `express`

Extends `recommended` and adds:

- Node environment (browser disabled)
- `no-console` turned **off** (logging is intentional on the server)
- `no-unused-vars` ignores args named `next` or prefixed with `_`
- `no-param-reassign` with middleware exceptions (`req`, `res`, `ctx`, …)
- `no-promise-executor-return` / `no-async-promise-executor` → **error**
- `no-new-func` → **error**

### `typescript`

Extends `recommended` and adds:

- Uses `@typescript-eslint/parser`
- Replaces `no-unused-vars` / `no-shadow` with TypeScript-aware equivalents
- Disables `no-undef` (TypeScript handles it)
- `@typescript-eslint/no-explicit-any` → **warn**
- `@typescript-eslint/explicit-module-boundary-types` → **warn**
- `@typescript-eslint/no-non-null-assertion` → **warn**

---

## Contributing

Pull requests are welcome. Please run `npm test` before submitting.

## License

[MIT](LICENSE) © GitOps Lovers