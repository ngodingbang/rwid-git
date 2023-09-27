import { parseString } from "../../js/helper.js";

/**
 * Determine whether the given value is a palindrome or not using reverse way.
 *
 * @param {string} value
 * @param {boolean}
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
 * @returns {boolean}
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
 * @param {string} [reversedValue=""]
 * @param {number} [index=0]
 * @returns {boolean}
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
 * Return palindrome human-readable description.
 *
 * @param {string} word
 * @param {"reverse" | "loop" | "recursive"} method
 * @throws {Error}
 */
function generatePalindromeStatus(word, method) {
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

  return isPalindrome
    ? "Yes, this word is a palindrome."
    : "No, this word is not a palindrome.";
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const word = event.target["word"].value;
    const method = event.target["method"].value;

    const result = generatePalindromeStatus(word, method);

    document.getElementById("result").textContent = result;
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
