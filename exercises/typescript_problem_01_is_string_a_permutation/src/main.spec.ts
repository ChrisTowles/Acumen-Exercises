import { describe, it, expect } from 'vitest';

/**
 * Given to string, see if one is a permutation of the other.
  *
 * @param {string | null} str1 - first string
 * @param {string | null} str2 - second string
 *
 * @return {boolean} - true if str1 is a permutation of str2, false otherwise
 */
function is_permutation(str1: string | null, str2: string | null): boolean {

  // <-- ADD YOUR CODE HERE

  throw new Error("Function Not Implemented");
}

describe("Test is string permutation", () => {

  it("expect to find if string is a permuntation", () => {

    expect(is_permutation(null, 'foo')).toBe(false)
    expect(is_permutation('', 'foo')).toBe(false)
    expect(is_permutation('Nib', 'bin')).toBe(false)
    expect(is_permutation('dog', 'doggo')).toBe(false)

    expect(is_permutation('act', 'cat')).toBe(true)
    expect(is_permutation('a ct', 'ca t')).toBe(true)


  });
});
