import { convertCapitalizeFirstLetter } from './convertCapitalizeFirstLetter';

describe('convertCapitalizeFirstLetter function', () => {
  test('should capitalize the first letter of a word', () => {
    const result = convertCapitalizeFirstLetter('apple');
    expect(result).toBe('Apple');
  });

  test('should handle an empty string', () => {
    const result = convertCapitalizeFirstLetter('');
    expect(result).toBe('');
  });

  test('should handle a single-letter word', () => {
    const result = convertCapitalizeFirstLetter('a');
    expect(result).toBe('A');
  });

  test('should handle a word with already capitalized first letter', () => {
    const result = convertCapitalizeFirstLetter('Orange');
    expect(result).toBe('Orange');
  });

  test('should handle a word with numbers or special characters', () => {
    const result = convertCapitalizeFirstLetter('#hashtag');
    expect(result).toBe('#hashtag');
  });

  test('should handle a word with leading and trailing spaces', () => {
    const result = convertCapitalizeFirstLetter('  word  ');
    expect(result).toBe('Word');
  });
});
