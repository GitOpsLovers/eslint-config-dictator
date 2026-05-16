'use strict';

const config = require('../../lib/configs/recommended');

describe('recommended config', () => {
  test('has languageOptions with ES2021 and module source type', () => {
    expect(config.languageOptions.ecmaVersion).toBe(2021);
    expect(config.languageOptions.sourceType).toBe('module');
  });

  test('exposes node globals in languageOptions', () => {
    expect(config.languageOptions.globals.process).toBeDefined();
  });

  test('enforces no-var', () => {
    expect(config.rules['no-var']).toBe('error');
  });

  test('enforces prefer-const', () => {
    expect(config.rules['prefer-const']).toBe('error');
  });

  test('enforces eqeqeq', () => {
    expect(config.rules['eqeqeq']).toEqual(['error', 'always', { null: 'ignore' }]);
  });

  test('warns on no-console', () => {
    expect(config.rules['no-console']).toBe('warn');
  });

  test('enforces no-eval', () => {
    expect(config.rules['no-eval']).toBe('error');
  });

  test('enforces semi', () => {
    expect(config.rules['semi']).toEqual(['error', 'always']);
  });

  test('enforces single quotes', () => {
    expect(config.rules['quotes'][0]).toBe('error');
    expect(config.rules['quotes'][1]).toBe('single');
  });
});
