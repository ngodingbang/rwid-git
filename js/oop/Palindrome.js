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

  /**
   * Determine whether the given value is a palindrome or not using reverse method.
   * @returns {boolean}
   */

  isPalindromeUsingReverse() {
    const cleanValue = this.value;
    const reversedValue = cleanValue.split("").reverse().join("");

    return cleanValue === reversedValue;
  }

  /**
   * Determine whether the given value is a palindrome or not using loop method.
   * @returns {boolean}
   */

  isPalindromeUsingLoop() {
    const cleanValue = this.value;
    const length = cleanValue.length;

    for (let i = 0; i < Math.floor(length / 2); i++) {
      if (cleanValue[i] !== cleanValue[length - i - 1]) {
        return false;
      }
    }
    return true;
  }

  /**
   * Determine whether the given value is a palindrome or not using recursive method.
   * @param {number} index 
   * @returns {boolean}
   */

  isPalindromeUsingRecursive(index = 0) {
    const cleanValue = this.value;
    const length = cleanValue.length;

    if (index >= Math.floor(length / 2)) {
      return true;
    }

    if (cleanValue[index] !== cleanValue[length - 1 - index]) {
      return false;
    }

    return this.isPalindromeUsingRecursive(index + 1);
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const word = event.target["word"].value;
    const method = event.target["method"].value;

    const palindromeInstance = new Palindrome(word);
    let result;

    if (method === "reverse") {
      result = palindromeInstance.isPalindromeUsingReverse();
    } else if (method === "loop") {
      result = palindromeInstance.isPalindromeUsingLoop();
    } else if (method === "recursive") {
      result = palindromeInstance.isPalindromeUsingRecursive();
    } else {
      throw new Error("Method must be reverse, loop or recursive.")
    }

    const resultText = result
      ? "Yes, this word is palindrome."
      : "No, this word is not palindrome.";

    document.getElementById("result").textContent = result;
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
