import { describe, expect, it } from '@jest/globals';
import { parse } from '../parser';

describe('parser', () => {
  it('parses regular numbers', () => {
    const input = `123
    -345`;

    const parsed = parse(input);

    expect(parsed).toStrictEqual([123, -345]);
  });

  it('parses a comment and plain text', () => {
    const input = `# hello world!
    hæ`;

    const parsed = parse(input);

    expect(parsed).toStrictEqual([]);
  });

  it('parses mixed data', () => {
    const input = `123aa22
    111
    aaaaa`;

    const parsed = parse(input);

    expect(parsed).toStrictEqual([111]);
  });

  it('parses number with the form x.xxx,xxx, x.xxx.xxx,x and x,xx', () => {
    const input = `1.234,567
1.111.111,1
9,87`;

    const parsed = parse(input);

    expect(parsed).toStrictEqual([1234.567, 1111111.1, 9.87]);
  });

  it('parses scientific notation', () => {
    const input = '6.4e3';

    const parsed = parse(input);

    expect(parsed).toStrictEqual([6400]);
  });

  it('parses empty string', () => {
    const input = '';

    const parsed = parse(input);

    expect(parsed).toStrictEqual([]);
  });

  it('parses newline and whitespace', () => {
    const input = `0


    `;

    const parsed = parse(input);

    expect(parsed).toStrictEqual([0]);
  });
});
