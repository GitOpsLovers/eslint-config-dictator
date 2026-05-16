import { describe, expect, test } from 'vitest';

import config from '../../lib/presets/typescript.mjs';

const preset = config.at(-1);

describe('typescript config', () => {
  test('sets parser object in languageOptions', () => {
    expect(preset.languageOptions.parser).toBeDefined();
  });

  test('includes @typescript-eslint plugin object', () => {
    expect(preset.plugins['@typescript-eslint']).toBeDefined();
  });

  test('disables base no-unused-vars in favour of @typescript-eslint version', () => {
    expect(preset.rules['no-unused-vars']).toBe('off');
    expect(preset.rules['@typescript-eslint/no-unused-vars']).toBeDefined();
    expect(preset.rules['@typescript-eslint/no-unused-vars'][0]).toBe('error');
  });

  test('disables base no-shadow in favour of @typescript-eslint version', () => {
    expect(preset.rules['no-shadow']).toBe('off');
    expect(preset.rules['@typescript-eslint/no-shadow']).toBe('error');
  });

  test('disables no-undef (TypeScript handles it)', () => {
    expect(preset.rules['no-undef']).toBe('off');
  });

  test('warns on @typescript-eslint/no-explicit-any', () => {
    expect(preset.rules['@typescript-eslint/no-explicit-any']).toBe('warn');
  });

  test('warns on @typescript-eslint/explicit-module-boundary-types', () => {
    expect(preset.rules['@typescript-eslint/explicit-module-boundary-types']).toBe('warn');
  });

  test('warns on @typescript-eslint/no-non-null-assertion', () => {
    expect(preset.rules['@typescript-eslint/no-non-null-assertion']).toBe('warn');
  });

  test('carries over no-var', () => {
    expect(preset.rules['no-var']).toBe('error');
  });

  test('carries over prefer-const', () => {
    expect(preset.rules['prefer-const']).toBe('error');
  });
});
