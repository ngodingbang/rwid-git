import { parseString } from "../helper.js";

export class Palindrome {
  /** @type {string} */
  word;

  /**
   * @param {string} word
   */
  constructor(word) {
    this.word = parseString(word);
    this.arrayWord = this.word.split("");
  }

  isUsingReverse() {
    const reverseWord = this.arrayWord.reverse().join("");

    return this.word === reverseWord;
  }

  isUsingLoop() {
    let length = this.arrayWord.length;

    for (let i = 0; i < length / 2; i++) {
      if (this.arrayWord[i] !== this.arrayWord[length - 1 - i]) {
        return false;
      }
    }
    return true;
  }

  /**
   * Determine whether the given value is a palindrome or not using recursive way.
   *
   * @param {number} index
   */
  isUsingRecursive(index = 0) {
    const length = this.arrayWord.length;

    if (index < length / 2) {
      if (this.arrayWord[index] !== this.arrayWord[length - index - 1]) {
        return false;
      } else {
        return this.isUsingRecursive(index + 1);
      }
    } else {
      return true;
    }
  }

  check(method) {
    let isPalindrome;

    if (method === "reverse") {
      isPalindrome = this.isUsingReverse();
    } else if (method === "loop") {
      isPalindrome = this.isUsingLoop();
    } else if (method === "recursive") {
      isPalindrome = this.isUsingRecursive();
    } else {
      throw new Error("Method must be reverse, loop, or recursive.");
    }

    return isPalindrome;
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const word = event.target["word"].value;
    const method = event.target["method"].value;

    const result = new Palindrome(word).check(method);

    document.getElementById("result").textContent = result;
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
