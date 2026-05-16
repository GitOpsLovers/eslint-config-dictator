import { describe, expect, test } from '@jest/globals';

import config from '../../lib/configs/angular.mjs';
import recommended from '../../lib/configs/recommended.mjs';

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

  test('inherits no-var from recommended', () => {
    expect(config.rules['no-var']).toBe(recommended.rules['no-var']);
  });

  test('inherits prefer-const from recommended', () => {
    expect(config.rules['prefer-const']).toBe(recommended.rules['prefer-const']);
  });
});
