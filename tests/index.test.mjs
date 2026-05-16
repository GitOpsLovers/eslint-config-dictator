import { describe, expect, test } from 'vitest';

import plugin from '../index.mjs';

describe('eslint-plugin-dictator', () => {
  test('exports a meta object with name and version', () => {
    expect(plugin.meta).toBeDefined();
    expect(plugin.meta.name).toBe('eslint-plugin-dictator');
    expect(typeof plugin.meta.version).toBe('string');
  });

  test('exports a rules object', () => {
    expect(plugin.rules).toBeDefined();
    expect(typeof plugin.rules).toBe('object');
  });

  test('exports flat configs for all presets', () => {
    const expected = ['angular', 'react', 'express'];
    expect(Object.keys(plugin.configs)).toEqual(expect.arrayContaining(expected));
  });

  test('keeps flatConfigs alias for backwards compatibility', () => {
    const expected = ['angular', 'react', 'express'];
    expect(Object.keys(plugin.flatConfigs)).toEqual(expect.arrayContaining(expected));
  });

  test.each(['angular', 'react', 'express'])(
    'flat config "%s" is an array and includes dictator in plugins object',
    (preset) => {
      expect(Array.isArray(plugin.configs[preset])).toBe(true);
      expect(plugin.configs[preset][0].plugins).toBeDefined();
      expect(plugin.configs[preset][0].plugins.dictator).toBe(plugin);
    },
  );

  test.each(['angular', 'react', 'express'])(
    'config "%s" has a name field',
    (preset) => {
      expect(plugin.configs[preset][0].name).toBe(`dictator/${preset}`);
    },
  );

  test.each(['angular', 'react', 'express'])(
    'config "%s" has a rules object',
    (preset) => {
      expect(plugin.configs[preset].at(-1).rules).toBeDefined();
      expect(typeof plugin.configs[preset].at(-1).rules).toBe('object');
    },
  );

  test.each(['angular', 'react', 'express'])(
    'config "%s" includes jsdoc plugin config',
    (preset) => {
      const jsdocEntry = plugin.configs[preset].find((entry) => entry.plugins?.jsdoc);
      expect(jsdocEntry).toBeDefined();
      expect(jsdocEntry.rules['jsdoc/no-types']).toBe('error');
    },
  );

  test.each(['angular', 'react', 'express'])(
    'config "%s" includes prefer-arrow plugin config',
    (preset) => {
      const preferArrowEntry = plugin.configs[preset].find((entry) => entry.plugins?.['prefer-arrow']);
      expect(preferArrowEntry).toBeDefined();
      expect(preferArrowEntry.rules['prefer-arrow/prefer-arrow-functions']).toBeDefined();
    },
  );

  test.each(['angular', 'react', 'express'])(
    'config "%s" includes optimize-regex plugin config',
    (preset) => {
      const regexEntry = plugin.configs[preset].find((entry) => entry.plugins?.['optimize-regex']);
      expect(regexEntry).toBeDefined();
      expect(regexEntry.rules['optimize-regex/optimize-regex']).toBe('error');
    },
  );

  test.each(['angular', 'react', 'express'])(
    'config "%s" includes security plugin config',
    (preset) => {
      const securityEntry = plugin.configs[preset].find(
        (entry) => entry.plugins?.pii && entry.plugins?.['no-secrets'],
      );
      expect(securityEntry).toBeDefined();
      expect(securityEntry.rules['pii/no-email']).toBe('error');
      expect(securityEntry.rules['no-secrets/no-secrets']).toBe('error');
    },
  );
});
