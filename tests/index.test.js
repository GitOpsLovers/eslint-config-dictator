'use strict';

const plugin = require('../index');

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

  test('exports legacy configs for all presets', () => {
    const expected = ['recommended', 'angular', 'react', 'express', 'typescript'];
    expect(Object.keys(plugin.configs)).toEqual(expect.arrayContaining(expected));
  });

  test('exports flat configs for all presets', () => {
    const expected = ['recommended', 'angular', 'react', 'express', 'typescript'];
    expect(Object.keys(plugin.flatConfigs)).toEqual(expect.arrayContaining(expected));
  });

  test.each(['recommended', 'angular', 'react', 'express', 'typescript'])(
    'legacy config "%s" includes "dictator" in plugins array',
    (preset) => {
      expect(plugin.configs[preset].plugins).toContain('dictator');
    },
  );

  test('legacy typescript config also includes @typescript-eslint plugin', () => {
    expect(plugin.configs.typescript.plugins).toContain('@typescript-eslint');
  });

  test.each(['recommended', 'angular', 'react', 'express', 'typescript'])(
    'flat config "%s" has a name field',
    (preset) => {
      expect(plugin.flatConfigs[preset].name).toBe(`dictator/${preset}`);
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
