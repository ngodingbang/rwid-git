import { parseString } from "../helper.js";

/**
 * Determine whether the given value is a palindrome or not using reverse way.
 *
 * @param {string} value
 */
function isPalindromeUsingReverse(value) {
  const lower = value.toLowerCase();

  const reversedString = lower.split("").reverse().join("");

  return lower === reversedString;
}

/**
 * Determine whether the given value is a palindrome or not using loop way.
 *
 * @param {string} value
 */
function isPalindromeUsingLoop(value) {
  const lower = value.toLowerCase();

  const array = lower.split("");

  const newArray = [];

  for (const word of array) {
    newArray.unshift(word);
  }

  const reversed = newArray.join("");

  return reversed === lower;
}

/**
 * Determine whether the given value is a palindrome or not using recursive way.
 *
 * @param {string} value
 * @param {number} index
 */
function isPalindromeUsingRecursive(value, index = 0) {
  const lowerValue = value.toLowerCase();

  if (lowerValue.length <= 1) {
    return true;
  }

  if (lowerValue[0] !== lowerValue[lowerValue.length - 1]) {
    return false;
  }

  return isPalindromeUsingRecursive(value.substring(1, value.length - 1));
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
