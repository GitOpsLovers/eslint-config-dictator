import { describe, expect, test } from 'vitest';

import config from '../../lib/configs/react.mjs';
import recommended from '../../lib/configs/recommended.mjs';

describe('react config', () => {
  test('includes browser globals', () => {
    expect(config.languageOptions.globals.window).toBeDefined();
  });

  test('enables JSX in languageOptions', () => {
    expect(config.languageOptions.ecmaFeatures.jsx).toBe(true);
  });

  test('has ecmaVersion >= 2022', () => {
    expect(config.languageOptions.ecmaVersion).toBeGreaterThanOrEqual(2022);
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
