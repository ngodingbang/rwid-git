import { parseString } from "../helper.js";

/**
 * Determine whether the given value is a palindrome or not using reverse way.
 *
 * @param {string} value
 */
function isPalindromeUsingReverse(value) {
  let reversedValue = value.split("").reverse().join("");
  return value == reversedValue;
}

/**
 * Determine whether the given value is a palindrome or not using loop way.
 *
 * @param {string} value
 */
function isPalindromeUsingLoop(value) {
  let reversedValue = "";
  for (let i = value.length - 1; i >= 0; i--) {
    reversedValue += value[i];
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
  let lastIndexOfValue = value.length - 1;
  if (reversedValue.length == value.length) {
    return reversedValue == value;
  } else {
    reversedValue += value[lastIndexOfValue - index];
    index++;
    return isPalindromeUsingRecursive(value, reversedValue, index);
  }
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
