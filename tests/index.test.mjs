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
    const expected = ['angular', 'react', 'express', 'typescript'];
    expect(Object.keys(plugin.configs)).toEqual(expect.arrayContaining(expected));
  });

  test('keeps flatConfigs alias for backwards compatibility', () => {
    const expected = ['angular', 'react', 'express', 'typescript'];
    expect(Object.keys(plugin.flatConfigs)).toEqual(expect.arrayContaining(expected));
  });

  test.each(['angular', 'react', 'express', 'typescript'])(
    'flat config "%s" is an array and includes dictator in plugins object',
    (preset) => {
      expect(Array.isArray(plugin.configs[preset])).toBe(true);
      expect(plugin.configs[preset][0].plugins).toBeDefined();
      expect(plugin.configs[preset][0].plugins.dictator).toBe(plugin);
    },
  );

  test('typescript config includes @typescript-eslint plugin object', () => {
    expect(plugin.configs.typescript.at(-1).plugins['@typescript-eslint']).toBeDefined();
  });

  test.each(['angular', 'react', 'express', 'typescript'])(
    'config "%s" has a name field',
    (preset) => {
      expect(plugin.configs[preset][0].name).toBe(`dictator/${preset}`);
    },
  );

  test.each(['angular', 'react', 'express', 'typescript'])(
    'config "%s" has a rules object',
    (preset) => {
      expect(plugin.configs[preset].at(-1).rules).toBeDefined();
      expect(typeof plugin.configs[preset].at(-1).rules).toBe('object');
    },
  );
});
