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

  test('registers no-secrets and security plugins', () => {
    expect(entry.plugins).toBeDefined();
    expect(entry.plugins['no-secrets']).toBeDefined();
    expect(typeof entry.plugins['no-secrets']).toBe('object');
    expect(entry.plugins.security).toBeDefined();
    expect(typeof entry.plugins.security).toBe('object');
  });

  test('enforces security-sensitive rules', () => {
    expect(entry.rules).toBeDefined();
    expect(entry.rules['no-secrets/no-secrets']).toBe('error');
    expect(entry.rules['security/detect-eval-with-expression']).toBe('error');
    expect(entry.rules['security/detect-child-process']).toBe('error');
    expect(entry.rules['security/detect-unsafe-regex']).toBe('error');
    expect(entry.rules['security/detect-object-injection']).toBe('warn');
  });
});
