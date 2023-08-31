import { parseString } from "../helper.js";

/**
 * Determine whether the given value is a palindrome or not using reverse way.
 *
 * @param {string} value
 */

function isPalindromeUsingReverse(value) {
  const cleanValue = parseString(value);

  const reversedValue = cleanValue.split("").reverse().join("");

  return cleanValue === reversedValue
}

/**
 * Determine whether the given value is a palindrome or not using loop way.
*
* @param {string} value
*/

function isPalindromeUsingLoop(value) {
  const cleanValue = parseString(value);

  const length = cleanValue.length;

  for (let index = 0; index < Math.floor(length / 2); i++) {
    if (cleanValue[index] !== cleanValue[length - 1 - index]) {

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

  const cleanValue = parseString(value);

  const length = cleanValue.length;

  if (index >= Math.floor(length / 2)) {
    return true;
  }

  if (cleanValue[index] !== cleanValue[length - 1 - index]) {

    return false;
  }

  return isPalindromeUsingRecursive(value, index + 1)

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
