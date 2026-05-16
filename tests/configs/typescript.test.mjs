import { describe, expect, test } from '@jest/globals';

import config from '../../lib/configs/typescript.mjs';

describe('typescript config', () => {
  test('sets parser object in languageOptions', () => {
    expect(config.languageOptions.parser).toBeDefined();
  });

  test('includes @typescript-eslint plugin object', () => {
    expect(config.plugins['@typescript-eslint']).toBeDefined();
  });

  test('disables base no-unused-vars in favour of @typescript-eslint version', () => {
    expect(config.rules['no-unused-vars']).toBe('off');
    expect(config.rules['@typescript-eslint/no-unused-vars']).toBeDefined();
    expect(config.rules['@typescript-eslint/no-unused-vars'][0]).toBe('error');
  });

  test('disables base no-shadow in favour of @typescript-eslint version', () => {
    expect(config.rules['no-shadow']).toBe('off');
    expect(config.rules['@typescript-eslint/no-shadow']).toBe('error');
  });

  test('disables no-undef (TypeScript handles it)', () => {
    expect(config.rules['no-undef']).toBe('off');
  });

  test('warns on @typescript-eslint/no-explicit-any', () => {
    expect(config.rules['@typescript-eslint/no-explicit-any']).toBe('warn');
  });

  test('warns on @typescript-eslint/explicit-module-boundary-types', () => {
    expect(config.rules['@typescript-eslint/explicit-module-boundary-types']).toBe('warn');
  });

  test('warns on @typescript-eslint/no-non-null-assertion', () => {
    expect(config.rules['@typescript-eslint/no-non-null-assertion']).toBe('warn');
  });

  test('still carries over no-var from recommended', () => {
    expect(config.rules['no-var']).toBe('error');
  });

  test('still carries over prefer-const from recommended', () => {
    expect(config.rules['prefer-const']).toBe('error');
  });
});
