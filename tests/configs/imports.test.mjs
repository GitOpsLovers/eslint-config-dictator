import { describe, expect, test } from 'vitest';

import config from '../../lib/configs/imports.mjs';

const entry = config[0];

describe('imports config', () => {
  test('exports an array with a config object', () => {
    expect(Array.isArray(config)).toBe(true);
    expect(config).toHaveLength(1);
    expect(entry).toBeDefined();
  });

  test('registers import and unused-imports plugins', () => {
    expect(entry.plugins).toBeDefined();
    expect(entry.plugins.import).toBeDefined();
    expect(entry.plugins['unused-imports']).toBeDefined();
  });

  test('sets import resolver for typescript and node', () => {
    expect(entry.settings['import-x/resolver']).toBeDefined();
    expect(entry.settings['import-x/resolver'].typescript.project).toContain('tsconfig.json');
    expect(entry.settings['import-x/resolver'].node.project).toContain('tsconfig.json');
  });

  test('registers TypeScript parser for supported TS extensions', () => {
    expect(entry.settings['import-x/parsers']).toBeDefined();
    expect(entry.settings['import-x/parsers']['@typescript-eslint/parser']).toEqual([
      '.ts',
      '.tsx',
      '.mts',
      '.cts',
    ]);
  });

  test('enables TypeScript resolver type lookup', () => {
    expect(entry.settings['import-x/resolver'].typescript.alwaysTryTypes).toBe(true);
  });

  test('enforces unused import removal and import ordering', () => {
    expect(entry.rules['unused-imports/no-unused-imports']).toBe('error');
    expect(entry.rules['import/no-unresolved']).toBe('error');
    expect(entry.rules['import/order'][0]).toBe('error');
    expect(entry.rules['import/order'][1]['newlines-between']).toBe('always');
  });
});
