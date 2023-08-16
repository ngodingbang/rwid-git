import { parseString } from "../helper.js";

/**
 * Determine whether the given value is a palindrome or not using reverse way.
 *
 * @param {string} value
 */
function isPalindromeUsingReverse(value) {
  const lowerValue = value.toLowerCase();
  const reversedString = lowerValue.split("").reverse().join("");
  return lowerValue === reversedString;
}

/**
 * Determine whether the given value is a palindrome or not using loop way.
 *
 * @param {string} value
 */
function isPalindromeUsingLoop(value) {
  const lowerValue = value.toLowerCase();
  const arrayValue = lowerValue.split("");
  const arrayWords = [];
  for (const arrayWord of arrayValue) {
    arrayWords.unshift(arrayWord);
  }
  const reversedString = arrayWords.join("");
  return reversedString === lowerValue;
}

/**
 * Determine whether the given value is a palindrome or not using recursive way.
 *
 * @param {string} value
 * @param {number} index
 */
function isPalindromeUsingRecursive(value, index = 0) {
  const lowerValue = value.toLowerCase();

  // if the length of current string is less than equal to 1, auto palindrome
  if (lowerValue.length <= 1) {
    return true;
  }

  // if the beginning letter is different from last letter, auto not a palindrome
  if (lowerValue[0] !== lowerValue[lowerValue.length - 1]) {
    return false;
  }

  // if the beginning letter is same as last letter, check the second early and the second last, recursive
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
