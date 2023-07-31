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
  reverse() {
    const cleanedValue = this.value.toLowerCase().replace(/[^a-z0-9]/g, "");

    const reversedValue = cleanedValue.split("").reverse().join("");

    return cleanedValue === reversedValue;
  }

  loop() {
    const cleanedValue = this.value.toLowerCase().replace(/[^a-z0-9]/g, "");

    const length = cleanedValue.length;

    for (let i = 0; i < length / 2; i++) {
      if (cleanedValue[i] !== cleanedValue[length - 1 - i]) {
        return false;
      }
    }

    return true;
  }

  recursive() {
    this.value = this.value.replace(/[^a-zA-Z]/g, "").toLowerCase();
  }

  isPalindromeRecursive(index = 0) {
    // Clean the string before checking for palindrome
    this.recursive();

    // Base case: if the index reaches the middle of the string or beyond, the string is a palindrome
    if (index >= Math.floor(this.value.length / 2)) {
      return true;
    }

    // If the character at the first index and the last index are not the same, the string is not a palindrome
    if (this.value[index] !== this.value[this.value.length - 1 - index]) {
      return false;
    }

    // Recursive call to check the next pair of characters towards the middle
    return this.isPalindromeRecursive(index + 1);
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const word = event.target["word"].value;
    const method = event.target["method"].value;

    let isPalindrome;

    if (method === "reverse") {
      isPalindrome = new Palindrome(word).reverse();
    } else if (method === "loop") {
      isPalindrome = new Palindrome(word).loop();
    } else if (method === "recursive") {
      isPalindrome = new Palindrome(word).recursive();
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
