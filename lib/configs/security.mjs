import noSecrets from 'eslint-plugin-no-secrets';
import security from 'eslint-plugin-security';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    ignores: [
      '**/*.json',
      '**/*.jsonc',
      '**/tsconfig*.json',
      '**/package*.json',
      '**/.vscode/**',
      '**/.devcontainer/**',
    ],
    plugins: {
      'no-secrets': noSecrets,
      security,
    },
    rules: {
      'no-secrets/no-secrets': 'error',
      'security/detect-buffer-noassert': 'error',
      'security/detect-child-process': 'error',
      'security/detect-disable-mustache-escape': 'error',
      'security/detect-eval-with-expression': 'error',
      'security/detect-new-buffer': 'error',
      'security/detect-no-csrf-before-method-override': 'error',
      'security/detect-non-literal-fs-filename': 'warn',
      'security/detect-non-literal-regexp': 'warn',
      'security/detect-non-literal-require': 'warn',
      'security/detect-object-injection': 'warn',
      'security/detect-possible-timing-attacks': 'warn',
      'security/detect-pseudoRandomBytes': 'error',
      'security/detect-unsafe-regex': 'error',
      'security/detect-bidi-characters': 'error',
    },
  },
];
