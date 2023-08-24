import { parseString } from "../../js/helper.js";
/**
 * Determine whether the given value is a palindrome or not using reverse way.
 *
 * @param {string} value
 */
function isPalindromeUsingReverse(value) {
  // write your code here
  value = value.replace(/[^a-zA-Z]/g, "").toLowerCase();
  let reverseValuestr = value.split("").reverse().join("");
  return value == reverseValuestr;
}

/**
 * Determine whether the given value is a palindrome or not using loop way.
 *
 * @param {string} value
 */
function isPalindromeUsingLoop(value) {
  // write your code here
  value = value.replace(/[^a-zA-Z]/g, "").toLowerCase();
  let valueLen = value.length;

  for (let index = 1; index < valueLen / 2; index++) {
    if (value[index] == value[valueLen - index - 1]) {
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
  // write your code here

  value = value.replace(/[^a-zA-Z]/g, "").toLowerCase();
  if (index >= Math.floor(value.length / 2)) {
    return true;
  }
  if (value[index] !== value[value.length - 1 - index]) {
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
