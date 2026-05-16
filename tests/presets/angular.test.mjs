import { describe, expect, test } from 'vitest';

import config from '../../lib/presets/angular.mjs';

const preset = config.at(-1);

describe('angular config', () => {
  test('includes browser globals', () => {
    expect(preset.languageOptions.globals.window).toBeDefined();
  });

  test('has ecmaVersion >= 2022', () => {
    expect(preset.languageOptions.ecmaVersion).toBeGreaterThanOrEqual(2022);
  });

  test('limits classes to one per file', () => {
    expect(preset.rules['max-classes-per-file']).toEqual(['error', 1]);
  });

  test('enforces prefer-arrow-callback', () => {
    expect(preset.rules['prefer-arrow-callback']).toBe('error');
  });

  test('disallows duplicate imports', () => {
    expect(preset.rules['no-duplicate-imports']).toBe('error');
  });

  test('enforces no-var', () => {
    expect(preset.rules['no-var']).toBe('error');
  });

  test('enforces prefer-const', () => {
    expect(preset.rules['prefer-const']).toBe('error');
  });
});
