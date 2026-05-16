# eslint-plugin-dictator

Opinionated ESLint flat config presets for most popular frameworks.

Install one package, pick the preset that matches your stack, and get a curated set of rules covering framework best practices.

## Requirements

- ESLint `>= 10.3.0`
- Node `>= 24`

## Installation

```bash
npm install --save-dev eslint eslint-plugin-dictator
```

## Usage

Create an `eslint.config.mjs` file at the root of your project and add the preset for your stack.

### React

```js
import dictator from 'eslint-plugin-dictator';

export default [
  ...dictator.configs.react,
];
```

### Angular

```js
import dictator from 'eslint-plugin-dictator';

export default [
  ...dictator.configs.angular,
];
```

### Express

```js
import dictator from 'eslint-plugin-dictator';

export default [
  ...dictator.configs.express,
];
```

## What you get out of the box

Every preset includes shared rules for:

- A solid JavaScript base
- JSDoc
- Arrow function preference
- Regex optimization
- Security (secrets and PII)
- TypeScript, applied automatically to `*.ts`, `*.tsx`, `*.mts` and `*.cts`

On top of that, each preset adds rules specific to its framework.

## License

[MIT](LICENSE) © GitOps Lovers