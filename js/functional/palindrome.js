import { parseString } from "../helper.js";

/**
 * Determine whether the given value is a palindrome or not using reverse way.
 *
 * @param {string} value
 * @returns {string}
 */
function isPalindromeUsingReverse(value) {
  value = parseString(value);

  let reversedValue = value.split("").reverse().join("");

  return value == reversedValue;
}

/**
 * Determine whether the given value is a palindrome or not using loop way.
 *
 * @param {string} value
 * @returns {string}
 */
function isPalindromeUsingLoop(value) {
  value = parseString(value);

  let reversedValue = "";

  for (let index = value.length - 1; index >= 0; index--) {
    reversedValue += value[index];
  }

  return value == reversedValue;
}

/**
 * Determine whether the given value is a palindrome or not using recursive way.
 *
 * @param {string} value
 * @param {number} index
 */
function isPalindromeUsingRecursive(value, reversedValue = "", index = 0) {
  value = parseString(value);

  let lastIndexOfValue = value.length - 1;

  if (reversedValue.length == value.length) {
    return reversedValue == value;
  }

  reversedValue += value[lastIndexOfValue - index];
  index++;

  return isPalindromeUsingRecursive(value, reversedValue, index);
}

/**
 * Generate string that describe is the word palindrome or not
 *
 * @param {string} word
 * @param {string} method
 * @returns {string}
 */
function generatePalindromeTextResult(word, method) {
  let isPalindrome;

  switch (method) {
    case "reverse":
      isPalindrome = isPalindromeUsingReverse(word);
      break;
    case "loop":
      isPalindrome = isPalindromeUsingLoop(word);
      break;
    case "recursive":
      isPalindrome = isPalindromeUsingRecursive(word);
      break;
    default:
      throw new Error("Method must be reverse, loop or recursive.");
  }

  return isPalindrome
    ? "Yes, this word is a palindrome."
    : "No, this word is not a palindrome.";
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const word = event.target["word"].value;
    const method = event.target["method"].value;

    document.getElementById("result").textContent =
      generatePalindromeTextResult(word, method);
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
