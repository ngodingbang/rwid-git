import { parseString } from "../helper.js";

/**
 * Determine whether the given value is a palindrome or not using reverse way.
 *
 * @param {string} value
 */
function isPalindromeUsingReverse(value) {
  value = parseString(value);

  let newValue = "";

  for (let index = value.length - 1; index >= 0; index--) {
    newValue += value[index];
  }

  return value === newValue;
}

/**
 * Determine whether the given value is a palindrome or not using loop way.
 *
 * @param {string} value
 */
function isPalindromeUsingLoop(value) {
  value = parseString(value);

  for (let index = 0; index < Math.floor(value.length / 2); index++) {
    const lastCharacterIndex = value.length - (index + 1);

    const firstCharacter = value[index];
    const lastCharacter = value[lastCharacterIndex];

    if (firstCharacter !== lastCharacter) {
      return false;
    }
  }

  return true;
}

/**
 * Determine whether the given value is a palindrome or not using recursive way.
 *
 * @param {string} value
 * @param {number} index
 */
function isPalindromeUsingRecursive(value, index = 0) {
  value = parseString(value);

  if (index < Math.floor(value.length / 2)) {
    const lastCharacterIndex = value.length - (index + 1);

    const firstCharacter = value[index];
    const lastCharacter = value[lastCharacterIndex];

    if (firstCharacter !== lastCharacter) {
      return false;
    }

    return isPalindromeUsingRecursive(value, index + 1);
  }

  return true;
}

/**
 * Determine whether the given value is a palindrome or not.
 *
 * @typedef {"reverse" | "loop" | "recursive"} Method
 * @param {string} word
 * @param {Method} method
 * @throws {TypeError}
 */
export function isPalindrome(word, method) {
  if (method === "reverse") {
    return isPalindromeUsingReverse(word);
  } else if (method === "loop") {
    return isPalindromeUsingLoop(word);
  } else if (method === "recursive") {
    return isPalindromeUsingRecursive(word);
  } else {
    throw new TypeError("Method must be reverse, loop, or recursive.");
  }
}

/**
 * Return palindrome human-readable description.
 *
 * @param {string} word
 * @param {Method} method
 * @throws {Error}
 */
export function generatePalindromeStatus(word, method) {
  return isPalindrome(word, method)
    ? "Yes, this word is a palindrome."
    : "No, this word is not a palindrome.";
}
