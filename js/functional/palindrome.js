// import { parseString } from "../helper.js";

/**
 * Determine whether the given value is a palindrome or not using reverse way.
 *
 * @param {string} value
 */
function isPalindromeUsingReverse(value) {
  let array = value.split("");

  if (value == array.reverse().join("")) {
    return true;
  }
}

/**
 * Determine whether the given value is a palindrome or not using loop way.
 *
 * @param {string} value
 */
function isPalindromeUsingLoop(value) {
  let array = value.split("");
  let newArray = [];

  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }

  if (value == newArray.join("")) {
    return true;
  }
}

/**
 * Determine whether the given value is a palindrome or not using recursive way.
 *
 * @param {string} value
 */
function isPalindromeUsingRecursive(str) {
  if (str.length < 2) {
    return true;
  }

  if (str.slice(0, 1) == str.slice(-1)) {
    return isPalindromeUsingRecursive(str.slice(1, -1));
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

// console.log(isPalindromeUsingRecursive("hehe"));
