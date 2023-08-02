import { parseString } from "../helper.js";

/**
 * Add cleanString to avoid repeating the cleaning process for cleanedValue in each function.
 *
 * @param {string} value
 */
function cleanString(value) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

/**
 * Determine whether the given value is a palindrome or not using reverse way.
 *
 * @param {string} value
 */
function isPalindromeUsingReverse(value) {
  value = parseString(value);

  const cleanedValue = cleanString(value);
  const reversedValue = cleanedValue.split("").reverse().join("");
  return cleanedValue === reversedValue;
}

/**
 * Determine whether the given value is a palindrome or not using loop way.
 *
 * @param {string} value
 */
function isPalindromeUsingLoop(value) {
  value = parseString(value);

  const cleanedValue = cleanString(value);
  const length = cleanedValue.length;
  for (let index = 0; index < length / 2; index++) {
    if (cleanedValue[index] !== cleanedValue[length - 1 - index]) {
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

  const cleanedValue = cleanString(value);
  if (index >= Math.floor(cleanedValue.length / 2)) {
    return true;
  }

  if (cleanedValue[index] !== cleanedValue[cleanedValue.length - 1 - index]) {
    return false;
  }

  return isPalindromeUsingRecursive(value, index + 1);
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
