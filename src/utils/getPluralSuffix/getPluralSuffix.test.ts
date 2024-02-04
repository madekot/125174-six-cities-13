import { getPluralSuffix } from './getPluralSuffix';

describe('getPluralSuffix function', () => {
  test('should return an empty string for count equal to 1', () => {
    const result = getPluralSuffix(1);
    expect(result).toBe('');
  });

  test('should return "s" for count not equal to 1', () => {
    const resultA = getPluralSuffix(0);
    expect(resultA).toBe('s');

    const resultB = getPluralSuffix(2);
    expect(resultB).toBe('s');

    const resultC = getPluralSuffix(100);
    expect(resultC).toBe('s');
  });

  test('should handle negative count values', () => {
    const result = getPluralSuffix(-5);
    expect(result).toBe('s');
  });

  test('should handle decimal count values', () => {
    const result = getPluralSuffix(1.5);
    expect(result).toBe('s');
  });
});
