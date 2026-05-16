'use strict';

const config = require('../../lib/configs/recommended');

describe('recommended config', () => {
  test('has env with es2021 and node enabled', () => {
    expect(config.env.es2021).toBe(true);
    expect(config.env.node).toBe(true);
  });

  test('has parserOptions with ecmaVersion 2021 and sourceType module', () => {
    expect(config.parserOptions.ecmaVersion).toBe(2021);
    expect(config.parserOptions.sourceType).toBe('module');
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
