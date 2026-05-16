import { describe, expect, test } from 'vitest';

import config from '../../lib/configs/typescript.mjs';

const entry = config[0];

describe('typescript config', () => {
  test('exports an array with a config object', () => {
    expect(Array.isArray(config)).toBe(true);
    expect(config).toHaveLength(1);
    expect(entry).toBeDefined();
  });

  test('targets only TypeScript files', () => {
    expect(entry.files).toEqual(['**/*.{ts,tsx,mts,cts}']);
  });

  test('registers the TypeScript parser and plugins', () => {
    expect(entry.languageOptions).toBeDefined();
    expect(entry.languageOptions.parser).toBeDefined();
    expect(entry.languageOptions.parserOptions).toEqual({ projectService: true });
    expect(entry.plugins).toBeDefined();
    expect(entry.plugins['@typescript-eslint']).toBeDefined();
    expect(entry.plugins['@stylistic/ts']).toBeDefined();
  });

  test('enforces representative TypeScript rules', () => {
    expect(entry.rules).toBeDefined();
    expect(entry.rules['@typescript-eslint/adjacent-overload-signatures']).toBe('error');
    expect(entry.rules['@typescript-eslint/no-unused-vars']).toBeDefined();
    expect(entry.rules['@stylistic/ts/semi']).toEqual(['error', 'always']);
    expect(entry.rules['@typescript-eslint/no-deprecated']).toBe('error');
  });
});
