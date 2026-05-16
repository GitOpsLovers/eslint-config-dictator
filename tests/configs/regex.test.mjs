import { describe, expect, test } from 'vitest';

import config from '../../lib/configs/regex.mjs';

const entry = config[0];

describe('regex config', () => {
  test('exports an array with a config object', () => {
    expect(Array.isArray(config)).toBe(true);
    expect(config).toHaveLength(1);
    expect(entry).toBeDefined();
  });

  test('registers the optimize-regex plugin', () => {
    expect(entry.plugins).toBeDefined();
    expect(entry.plugins['optimize-regex']).toBeDefined();
    expect(typeof entry.plugins['optimize-regex']).toBe('object');
    expect(entry.plugins['optimize-regex'].rules).toBeDefined();
  });

  test('enforces optimize-regex/optimize-regex', () => {
    expect(entry.rules).toBeDefined();
    expect(entry.rules['optimize-regex/optimize-regex']).toBe('error');
  });
});
