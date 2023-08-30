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

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const word = event.target["word"].value;
    const method = event.target["method"].value;

    let isPalindrome;

    if (method === "reverse") {
      isPalindrome = isPalindromeUsingReverse(word);
    } else if (method === "loop") {
      isPalindrome = isPalindromeUsingLoop(word);
    } else if (method === "recursive") {
      isPalindrome = isPalindromeUsingRecursive(word);
    } else {
      throw new Error("Method must be reverse, loop, or recursive.");
    }

    const result = isPalindrome
      ? "Yes, this word is a palindrome."
      : "No, this word is not a palindrome.";

    document.getElementById("result").textContent = result;
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
