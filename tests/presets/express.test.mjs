import { describe, expect, test } from 'vitest';

import config from '../../lib/presets/express.mjs';

const preset = config.at(-1);

describe('express config', () => {
  test('includes node globals', () => {
    expect(preset.languageOptions.globals.process).toBeDefined();
  });

  test('does not include browser globals', () => {
    expect(preset.languageOptions.globals.window).toBeUndefined();
  });

  test('allows console (turns off no-console)', () => {
    expect(preset.rules['no-console']).toBe('off');
  });

  test('enforces require-await', () => {
    expect(preset.rules['require-await']).toBe('error');
  });

  test('enforces no-promise-executor-return', () => {
    expect(preset.rules['no-promise-executor-return']).toBe('error');
  });

  test('enforces no-async-promise-executor', () => {
    expect(preset.rules['no-async-promise-executor']).toBe('error');
  });

  test('ignores unused args starting with _ or next', () => {
    const rule = preset.rules['no-unused-vars'];
    expect(rule[1].argsIgnorePattern).toMatch(/next/);
  });

  test('enforces no-var', () => {
    expect(preset.rules['no-var']).toBe('error');
  });
});
