'use strict';

const config = require('../../lib/configs/angular');
const recommended = require('../../lib/configs/recommended');

describe('angular config', () => {
  test('enables browser env', () => {
    expect(config.env.browser).toBe(true);
  });

  test('has ecmaVersion >= 2022', () => {
    expect(config.parserOptions.ecmaVersion).toBeGreaterThanOrEqual(2022);
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
