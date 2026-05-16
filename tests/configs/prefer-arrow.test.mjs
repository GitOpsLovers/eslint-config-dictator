import { describe, expect, test } from 'vitest';

import config from '../../lib/configs/prefer-arrow.mjs';

const entry = config[0];
const rule = entry.rules['prefer-arrow/prefer-arrow-functions'];

describe('prefer-arrow config', () => {
  test('exports an array with a config object', () => {
    expect(Array.isArray(config)).toBe(true);
    expect(config).toHaveLength(1);
    expect(entry).toBeDefined();
  });

  test('registers the prefer-arrow plugin', () => {
    expect(entry.plugins).toBeDefined();
    expect(entry.plugins['prefer-arrow']).toBeDefined();
    expect(typeof entry.plugins['prefer-arrow']).toBe('object');
    expect(entry.plugins['prefer-arrow'].rules).toBeDefined();
  });

  test('enforces prefer-arrow/prefer-arrow-functions', () => {
    expect(rule[0]).toBe('error');
    expect(rule[1]).toEqual({
      allowStandaloneDeclarations: true,
      disallowPrototype: true,
      singleReturnOnly: false,
      classPropertiesAllowed: false,
    });
  });
});
