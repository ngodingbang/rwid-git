import { parseString } from "../helper.js";

export class Palindrome {
  /** @type {string} */
  value;

  /**
   * @param {string} value
   */
  constructor(value) {
    this.value = parseString(value);
  }

  // write your code here
  /**
   * Determine whether the given value is a palindrome or not.
   *
   * @returns {bool}
   */
  isPalindromeUsingReverse() {
    let reversedValue = this.value.split("").reverse().join("");
    return this.value == reversedValue;
  }

  /**
   * Determine whether the given value is a palindrome or not.
   *
   * @returns {bool}
   */
  isPalindromeUsingLoop() {
    let reversedValue = "";
    for (let i = this.value.length - 1; i >= 0; i--) {
      reversedValue += this.value[i];
    }
    return this.value == reversedValue;
  }

  /**
   * Determine whether the given value is a palindrome or not.
   *
   * @param {string} reversedValue
   * @param {number} index
   * @returns {bool}
   */
  isPalindromeUsingRecursive(reversedValue = "", index = 0) {
    let lastIndexOfValue = this.value.length - 1;
    if (reversedValue.length == this.value.length) {
      return reversedValue == this.value;
    } else {
      reversedValue += this.value[lastIndexOfValue - index];
      index++;
      return this.isPalindromeUsingRecursive(reversedValue, index);
    }
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const word = event.target["word"].value;
    const method = event.target["method"].value;
    let isPalindrome;
    const result = new Palindrome(word);
    if (method === "reverse") {
      isPalindrome = result.isPalindromeUsingReverse();
    } else if (method === "loop") {
      isPalindrome = result.isPalindromeUsingLoop();
    } else if (method === "recursive") {
      isPalindrome = result.isPalindromeUsingRecursive();
    } else {
      throw new Error("Method must be reverse, loop, or recursive.");
    }

    const outputText = isPalindrome
      ? "Yes, this word is a palindrome."
      : "No, this word is not a palindrome.";

    document.getElementById("result").textContent = outputText;
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
