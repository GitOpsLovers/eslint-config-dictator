import { describe, expect, test } from 'vitest';

import config from '../../lib/configs/jsdoc.mjs';

const entry = config[0];

describe('jsdoc config', () => {
  test('exports an array with a config object', () => {
    expect(Array.isArray(config)).toBe(true);
    expect(config).toHaveLength(1);
    expect(entry).toBeDefined();
  });

  test('registers the jsdoc plugin', () => {
    expect(entry.plugins).toBeDefined();
    expect(entry.plugins.jsdoc).toBeDefined();
    expect(typeof entry.plugins.jsdoc).toBe('object');
    expect(entry.plugins.jsdoc.rules).toBeDefined();
  });

  test('enforces jsdoc/no-types', () => {
    expect(entry.rules).toBeDefined();
    expect(entry.rules['jsdoc/no-types']).toBe('error');
  });
});
