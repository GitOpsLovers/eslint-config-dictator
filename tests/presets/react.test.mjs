import { describe, expect, test } from 'vitest';

import config from '../../lib/presets/react.mjs';

const preset = config.at(-1);

describe('react config', () => {
  test('includes browser globals', () => {
    expect(preset.languageOptions.globals.window).toBeDefined();
  });

  test('enables JSX in languageOptions', () => {
    expect(preset.languageOptions.ecmaFeatures.jsx).toBe(true);
  });

  test('has ecmaVersion >= 2022', () => {
    expect(preset.languageOptions.ecmaVersion).toBeGreaterThanOrEqual(2022);
  });

  test('includes react version detection in settings', () => {
    expect(preset.settings.react.version).toBe('detect');
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
});
