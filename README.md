# eslint-config-multistack

Opinionated ESLint flat config presets for modern JavaScript and TypeScript projects.

Install it, choose a preset, and get a solid default ruleset for JavaScript, TypeScript, tests, security and common code-style decisions.

## Why use it

- One package with reusable configuration presets
- Ready for ESLint flat config
- Shared baseline for JS, TS, test and security rules
- Easy to extend with your own rules on top

## Requirements

- Node `>= 24`
- ESLint `>= 10.3.0`

## Installation

```bash
npm install --save-dev eslint @gitopslovers/eslint-config-multistack
```

If you use `pnpm`:

```bash
pnpm add -D eslint @gitopslovers/eslint-config-multistack
```

## Quick start

Create an `eslint.config.mjs` file and spread the preset you want to use.

```js
import dictator from '@gitopslovers/eslint-config-multistack';

export default [
  ...dictator.configs.presetName,
];
```

## Current presets

These are the presets currently available on the package:

- `dictator.configs.react` for React projects
- `dictator.configs.angular` for Angular projects
- `dictator.configs.express` for Express and Node backends

Example:

```js
import dictator from '@gitopslovers/eslint-config-multistack';

export default [
  ...dictator.configs.react,
];
```

## What is included in every preset

Every preset already bundles rules for:

- JavaScript best practices
- JSDoc
- Arrow function preference
- Regex optimization
- Security and secret detection
- Vitest on `*.test.*`, `*.spec.*`, `tests/**` and `__tests__/**`
- TypeScript best practices on `*.ts`, `*.tsx`, `*.mts` and `*.cts`

## Customize it

You can append your own config after the preset to override any rule.

```js
import dictator from '@gitopslovers/eslint-config-multistack';

export default [
  ...dictator.configs.yourPreset,
  {
    rules: {
      'no-console': 'off',
    },
  },
];
```

## License

[MIT](LICENSE) © GitOps Lovers