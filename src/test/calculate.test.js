import { describe, expect, it } from '@jest/globals';
import { calculate } from '../calculate';
import { parse } from '../parser';

describe('calculate', () => {
  it('calculates stats for nice data', () => {
    const input = [1, 2, 3, 4, 5];

    const parsed = calculate(input);

    expect(parsed.Frávik).toBe(2.5);
    expect(parsed.Hæstagildi).toBe(5);
    expect(parsed.Meðaltal).toBe(3);
    expect(parsed.Miðgildi).toBe(3);
    expect(parsed.Minnstagildi).toBe(1);
    expect(parsed.StaðalFrávik).toBe(Math.sqrt(2.5));
    expect(parsed.Summa).toBe(15);
    expect(parsed.Svið).toBe(4)
  });

  it('calculates stats for data with gaps', () => {
    const input = `1
    2
    3
    4
    5
    ''`;

    const parsed = parse(input);
    const calculated = calculate(parsed);

    expect(calculated.Frávik).toBe(2.5);
    expect(calculated.Hæstagildi).toBe(5);
  });

  it('skilar null ef engin gögn', () => {
    const input = [];

    const parsed = calculate(input);

    expect(parsed).toStrictEqual(null);
  });
});
