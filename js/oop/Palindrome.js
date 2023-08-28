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

    for (let index = this.value.length - 1; index >= 0; index--) {
      reversedValue += this.value[index];
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
    let lastIndex = this.value.length - 1;

    if (reversedValue.length == this.value.length) {
      return reversedValue == this.value;
    }

    reversedValue += this.value[lastIndex - index];
    index++;

    return this.isPalindromeUsingRecursive(reversedValue, index);
  }

  /**
   * Check is value palindrome using given method
   *
   * @param {string} method
   * @returns {string}
   */
  getPalindromeResultText(method) {
    let isPalindrome = false;

    switch (method) {
      case "reverse":
        isPalindrome = this.isPalindromeUsingReverse();
        break;
      case "loop":
        isPalindrome = this.isPalindromeUsingLoop();
        break;
      case "recursive":
        isPalindrome = this.isPalindromeUsingRecursive();
        break;
      default:
        throw new Error("Method must be reverse, loop or recursive.");
    }

    return isPalindrome
      ? "Yes, this word is a palindrome."
      : "No, this word is not a palindrome.";
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const word = event.target["word"].value;
    const method = event.target["method"].value;

    const result = new Palindrome(word);

    document.getElementById("result").textContent =
      result.getPalindromeResultText(method);
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
