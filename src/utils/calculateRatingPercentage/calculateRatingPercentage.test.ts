import { calculateRatingPercentage } from './calculateRatingPercentage';

describe('calculateRatingPercentage function', () => {
  test('should calculate percentage for a whole number rating', () => {
    const result = calculateRatingPercentage(3, 5);
    expect(result).toBe(60);
  });

  test('should calculate percentage for a decimal rating', () => {
    const result = calculateRatingPercentage(3.1, 5);
    expect(result).toBe(60);
  });

  test('should use default stars (5) when stars parameter is not provided', () => {
    const result = calculateRatingPercentage(4);
    expect(result).toBe(80);
  });

  test('should handle rounding correctly for a decimal rating (case 1)', () => {
    const result = calculateRatingPercentage(3.1, 10);
    expect(result).toBe(30);
  });

  test('should handle rounding correctly for a decimal rating (case 2)', () => {
    const result = calculateRatingPercentage(4.5, 10);
    expect(result).toBe(50);
  });

  test('should handle rounding correctly for a whole number rating', () => {
    const result = calculateRatingPercentage(4.25, 5);
    expect(result).toBe(80);
  });
});
