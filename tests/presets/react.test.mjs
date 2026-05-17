import { describe, expect, test } from 'vitest';

import config from '../../lib/presets/react.mjs';

const preset = config.at(-1);
const importsEntry = config.find((entry) => entry.plugins?.import && entry.plugins?.['unused-imports']);

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

  test('includes imports config with import and unused-imports plugins', () => {
    expect(importsEntry).toBeDefined();
    expect(importsEntry.rules['unused-imports/no-unused-imports']).toBe('error');
    expect(importsEntry.rules['import/order'][0]).toBe('error');
  });
});
