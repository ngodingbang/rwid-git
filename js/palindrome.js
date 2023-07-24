import { parseString } from "./helper.js";

/**
 * Determine whether the given value is a palindrome or not using reverse way.
 *
 * @param {string} value
 */
function isPalindromeUsingReverse(value) {
  // write your code here
  return true;
}

/**
 * Determine whether the given value is a palindrome or not using loop way.
 *
 * @param {string} value
 */
function isPalindromeUsingLoop(value) {
  // write your code here
  return true;
}

/**
 * Determine whether the given value is a palindrome or not using recursive way.
 *
 * @param {string} value
 * @param {number} index
 */
function isPalindromeUsingRecursive(value, index = 0) {
  // write your code here
  return true;
}

/**
 * @param {Event} event
 */
function submitForm(event) {
  event.preventDefault();

  const word = event.target["word"].value;
  const method = event.target["method"].value;

  let result;

  try {
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

    result = isPalindrome
      ? "Yes, this word is a palindrome."
      : "No, this word is not a palindrome.";
  } catch (error) {
    alert(error.message);
    console.error(error);
  }

  document.getElementById("result").textContent = result;
}

document.getElementById("form").addEventListener("submit", function (event) {
  submitForm(event);
});
