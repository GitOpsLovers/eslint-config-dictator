'use strict';

const config = require('../../lib/configs/react');
const recommended = require('../../lib/configs/recommended');

describe('react config', () => {
  test('enables browser env', () => {
    expect(config.env.browser).toBe(true);
  });

  test('enables JSX in parserOptions', () => {
    expect(config.parserOptions.ecmaFeatures.jsx).toBe(true);
  });

  test('has ecmaVersion >= 2022', () => {
    expect(config.parserOptions.ecmaVersion).toBeGreaterThanOrEqual(2022);
  });

  test('includes react version detection in settings', () => {
    expect(config.settings.react.version).toBe('detect');
  });

  test('enforces prefer-arrow-callback', () => {
    expect(config.rules['prefer-arrow-callback']).toBe('error');
  });

  test('disallows duplicate imports', () => {
    expect(config.rules['no-duplicate-imports']).toBe('error');
  });

  test('has no-param-reassign with prop exceptions', () => {
    const rule = config.rules['no-param-reassign'];
    expect(rule[0]).toBe('error');
    expect(rule[1].props).toBe(true);
    expect(rule[1].ignorePropertyModificationsFor).toContain('req');
    expect(rule[1].ignorePropertyModificationsFor).toContain('res');
  });

  test('inherits no-var from recommended', () => {
    expect(config.rules['no-var']).toBe(recommended.rules['no-var']);
  });
});
