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
    const expected = ['recommended', 'angular', 'react', 'express', 'typescript'];
    expect(Object.keys(plugin.configs)).toEqual(expect.arrayContaining(expected));
  });

  test('keeps flatConfigs alias for backwards compatibility', () => {
    const expected = ['recommended', 'angular', 'react', 'express', 'typescript'];
    expect(Object.keys(plugin.flatConfigs)).toEqual(expect.arrayContaining(expected));
  });

  test.each(['recommended', 'angular', 'react', 'express', 'typescript'])(
    'flat config "%s" includes dictator in plugins object',
    (preset) => {
      expect(plugin.configs[preset].plugins).toBeDefined();
      expect(plugin.configs[preset].plugins.dictator).toBe(plugin);
    },
  );

  test('typescript config includes @typescript-eslint plugin object', () => {
    expect(plugin.configs.typescript.plugins['@typescript-eslint']).toBeDefined();
  });

  test.each(['recommended', 'angular', 'react', 'express', 'typescript'])(
    'config "%s" has a name field',
    (preset) => {
      expect(plugin.configs[preset].name).toBe(`dictator/${preset}`);
    },
  );

  test.each(['recommended', 'angular', 'react', 'express', 'typescript'])(
    'config "%s" has a rules object',
    (preset) => {
      expect(plugin.configs[preset].rules).toBeDefined();
      expect(typeof plugin.configs[preset].rules).toBe('object');
    },
  );
});
