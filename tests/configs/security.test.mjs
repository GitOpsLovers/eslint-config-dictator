import { describe, expect, test } from 'vitest';

import config from '../../lib/configs/security.mjs';

const entry = config[0];

describe('security config', () => {
  test('exports an array with a config object', () => {
    expect(Array.isArray(config)).toBe(true);
    expect(config).toHaveLength(1);
    expect(entry).toBeDefined();
  });

  test('targets JS and TS files while ignoring common config JSON files', () => {
    expect(entry.files).toEqual(['**/*.{js,mjs,cjs,ts,tsx}']);
    expect(entry.ignores).toContain('**/*.json');
    expect(entry.ignores).toContain('**/tsconfig*.json');
    expect(entry.ignores).toContain('**/package*.json');
  });

  test('registers pii and no-secrets plugins', () => {
    expect(entry.plugins).toBeDefined();
    expect(entry.plugins.pii).toBeDefined();
    expect(typeof entry.plugins.pii).toBe('object');
    expect(entry.plugins['no-secrets']).toBeDefined();
    expect(typeof entry.plugins['no-secrets']).toBe('object');
  });

  test('enforces security-sensitive rules', () => {
    expect(entry.rules).toBeDefined();
    expect(entry.rules['pii/no-email']).toBe('error');
    expect(entry.rules['pii/no-ip']).toBe('error');
    expect(entry.rules['pii/no-phone-number']).toBe('error');
    expect(entry.rules['no-secrets/no-secrets']).toBe('error');
  });
});
