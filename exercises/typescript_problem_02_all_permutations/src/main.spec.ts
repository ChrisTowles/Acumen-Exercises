import { describe, it, expect } from 'vitest';

/**
 * Given to string, find all permintations.
  *
 * @param {string} value - first string
 
 *
 * @return {string[]} - all permutations
 */
function find_permutations(value: string): string[] {

  // <-- ADD YOUR CODE HERE

  


  throw new Error("Function Not Implemented");
}

describe("Test", () => {

  it("expect null if  find all permuntations", () => {
    expect(find_permutations('')).toBe(['']);
  });

  it("expect to find all permuntations - small", () => {
    
    const testInput = 'ab'
    const expected = ['ab', 'ba']
    const result = find_permutations(testInput);
    result.sort();
    expected.sort();

    expect(result).toBe(expected);

  });
  it("expect to find all permuntations", () => {
    
    const testInput = 'AABC'
    const expected = [
        'AABC', 'AACB', 'ABAC', 'ABCA',
        'ACAB', 'ACBA', 'BAAC', 'BACA',
        'BCAA', 'CAAB', 'CABA', 'CBAA'
    ]
    const result = find_permutations(testInput);
    result.sort();
    expected.sort();

    expect(result).toBe(expected);


  });
});
