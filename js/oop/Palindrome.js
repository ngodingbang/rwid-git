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
   * checking palindrome word using reverse method
   * @param {string} value
   */
  isPalindromeUsingReverse() {
    let array = this.value.split("");

    if (this.value == array.reverse().join("")) {
      return true;
    }
  }

  /**
   * checking palindrome word using loop method
   * @param {string} value
   */
  isPalindromeUsingLoop() {
    let array = this.value.split("");
    let newArray = [];

    for (let i = array.length - 1; i >= 0; i--) {
      newArray.push(array[i]);
    }

    if (this.value == newArray.join("")) {
      return true;
    }
  }

  /**
   * checking palindrome word using recursive method
   * @param {string} value
   */
  isPalindromeUsingRecursive(value) {
    if (value.length < 2) {
      return true;
    }

    if (value.slice(0, 1) == value.slice(-1)) {
      return this.isPalindromeUsingRecursive(value.slice(1, -1));
    }
  }

  /**
   * checking method type
   * @param {string} method
   */
  type(method) {
    let result;

    if (method == "reverse") {
      result = this.isPalindromeUsingReverse();
    } else if (method == "loop") {
      result = this.isPalindromeUsingLoop();
    } else if (method == "recursive") {
      result = this.isPalindromeUsingRecursive(this.value);
    }

    return result;
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const word = event.target["word"].value;
    const method = event.target["method"].value;

    let result = new Palindrome(word).type(method);
    result = result
      ? "Yes, this word is a palindrome."
      : "No, this word is not a palindrome.";

    document.getElementById("result").textContent = result;
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
