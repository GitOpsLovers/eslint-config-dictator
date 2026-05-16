import { describe, expect, test } from 'vitest';

import config from '../../lib/configs/express.mjs';
import recommended from '../../lib/configs/recommended.mjs';

describe('express config', () => {
  test('includes node globals', () => {
    expect(config.languageOptions.globals.process).toBeDefined();
  });

  test('does not include browser globals', () => {
    expect(config.languageOptions.globals.window).toBeUndefined();
  });

  test('allows console (turns off no-console)', () => {
    expect(config.rules['no-console']).toBe('off');
  });

  test('enforces no-return-await', () => {
    expect(config.rules['no-return-await']).toBe('error');
  });

  test('enforces require-await', () => {
    expect(config.rules['require-await']).toBe('error');
  });

  test('enforces no-promise-executor-return', () => {
    expect(config.rules['no-promise-executor-return']).toBe('error');
  });

  test('enforces no-async-promise-executor', () => {
    expect(config.rules['no-async-promise-executor']).toBe('error');
  });

  test('enforces no-new-func', () => {
    expect(config.rules['no-new-func']).toBe('error');
  });

  test('ignores unused args starting with _ or next', () => {
    const rule = config.rules['no-unused-vars'];
    expect(rule[1].argsIgnorePattern).toMatch(/next/);
  });

  test('has no-param-reassign with Express-specific exceptions', () => {
    const rule = config.rules['no-param-reassign'];
    expect(rule[0]).toBe('error');
    expect(rule[1].ignorePropertyModificationsFor).toContain('req');
    expect(rule[1].ignorePropertyModificationsFor).toContain('res');
  });

  test('inherits no-var from recommended', () => {
    expect(config.rules['no-var']).toBe(recommended.rules['no-var']);
  });
});
