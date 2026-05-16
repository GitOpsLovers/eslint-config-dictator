import { describe, expect, test } from 'vitest';

import config from '../../lib/presets/angular.mjs';

describe('angular config', () => {
  test('includes browser globals', () => {
    expect(config.languageOptions.globals.window).toBeDefined();
  });

  test('has ecmaVersion >= 2022', () => {
    expect(config.languageOptions.ecmaVersion).toBeGreaterThanOrEqual(2022);
  });

  test('limits classes to one per file', () => {
    expect(config.rules['max-classes-per-file']).toEqual(['error', 1]);
  });

  test('enforces prefer-arrow-callback', () => {
    expect(config.rules['prefer-arrow-callback']).toBe('error');
  });

  test('disallows duplicate imports', () => {
    expect(config.rules['no-duplicate-imports']).toBe('error');
  });

  test('enforces no-var', () => {
    expect(config.rules['no-var']).toBe('error');
  });

  test('enforces prefer-const', () => {
    expect(config.rules['prefer-const']).toBe('error');
  });
});
