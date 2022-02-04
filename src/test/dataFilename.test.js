import { describe, expect, it } from '@jest/globals';
import { dataFilename } from '../lib/utils';

describe('dataFilename', () => {
  it('returns null for invalid input of filename', () => {
    expect(dataFilename(null)).toBe(null);
    expect(dataFilename(true)).toBe(null);
    expect(dataFilename([])).toBe(null);
    expect(dataFilename('')).toBe(null);
  });

  it('returns a filename for valid input', () => {
    expect(dataFilename('test')).toBe('test.html');
  });

  it('returns a filename w/basepath for valid input', () => {
    expect(dataFilename('test', 'foo')).toBe('foo\\test.html');
  });
});
