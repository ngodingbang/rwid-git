import { parseString } from "../helper.js";

/**
 * Determine whether the given value is a palindrome or not using reverse way.
 *
 * @param {string} value
 */
function isPalindromeUsingReverse(value) {
  // write your code here
  value = parseString(value);

  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedValue = value.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Reverse the cleaned value using array methods
  const reversedValue = cleanedValue.split("").reverse().join("");

  // Check if the cleaned value and the reversed value are the same
  return cleanedValue === reversedValue;
}

/**
 * Determine whether the given value is a palindrome or not using loop way.
 *
 * @param {string} value
 */
function isPalindromeUsingLoop(value) {
  // write your code here
  value = parseString(value);

  const cleanedValue = value.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Initialize length of cleanedValue
  const length = cleanedValue.length;

  // Loop through the characters to check for palindrome
  for (let i = 0; i < length / 2; i++) {
    // Check each position between the first and the last character
    if (cleanedValue[i] !== cleanedValue[length - 1 - i]) {
      return false; // If characters don't match, it's not a palindrome
    }
  }

  return true; // All characters match, it's a palindrome
}

/**
 * Determine whether the given value is a palindrome or not using recursive way.
 *
 * @param {string} value
 * @param {number} index
 */
function isPalindromeUsingRecursive(value, index = 0) {
  // write your code here
  // Remove non-alphabetic characters from the value and convert it to lowercase
  value = value.replace(/[^a-zA-Z]/g, "").toLowerCase();

  // Base case: if the index reaches the middle of the string or beyond, the string is a palindrome
  if (index >= Math.floor(value.length / 2)) {
    return true;
  }

  // If the character at the first index and the last index are not the same, the string is not a palindrome
  if (value[index] !== value[value.length - 1 - index]) {
    return false;
  }

  // Recursively call the function with an incremented index to check the next character
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
