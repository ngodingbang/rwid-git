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

  cleanString() {
    this.value = this.value.toLowerCase().replace(/[^a-z0-9]/g, "");
  }

  checkPalindromeReverse() {
    this.cleanString();
    const cleanedValue = this.value;
    const reversedValue = cleanedValue.split("").reverse().join("");

    return cleanedValue === reversedValue;
  }

  checkPalindromeLoop() {
    this.cleanString();
    const cleanedValue = this.value;
    const length = cleanedValue.length;

    for (let index = 0; index < length / 2; index++) {
      if (cleanedValue[index] !== cleanedValue[length - 1 - index]) {
        return false;
      }
    }

    return true;
  }

  checkPalindromeRecursive(index = 0) {
    this.cleanString();
    if (index >= Math.floor(this.value.length / 2)) {
      return true;
    }
    if (this.value[index] !== this.value[this.value.length - 1 - index]) {
      return false;
    }

    return this.isPalindromeRecursive(index + 1);
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const word = event.target["word"].value;
    const method = event.target["method"].value;

    const palindrome = new Palindrome(word);
    const result =
      palindrome.checkPalindromeReverse() ||
      palindrome.checkPalindromeLoop() ||
      palindrome.checkPalindromeRecursive();

    document.getElementById("result").textContent = result;
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
