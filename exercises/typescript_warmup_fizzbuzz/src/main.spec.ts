import { describe, it, expect } from 'vitest';
import { fizzBuzz } from './main';

describe('fizzBuzz', () => {
  it('returns empty array for 0', () => {
    expect(fizzBuzz(0)).toEqual([]);
  });

  it('returns ["1"] for 1', () => {
    expect(fizzBuzz(1)).toEqual(['1']);
  });

  it('returns correct output for 15', () => {
    const result = fizzBuzz(15);
    expect(result[2]).toBe('Fizz');     // 3
    expect(result[4]).toBe('Buzz');     // 5
    expect(result[14]).toBe('FizzBuzz'); // 15
    expect(result[0]).toBe('1');
    expect(result.length).toBe(15);
  });
});
