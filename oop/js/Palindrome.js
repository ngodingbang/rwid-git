import { parseString } from "../../js/helper.js";
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
  isPalindromeUsingReverse(value = this.value) {
    value = value.replace(/[^a-zA-Z]/g, "").toLowerCase();
    let reverseValuestr = value.split("").reverse().join("");
    return value == reverseValuestr;
  }

  isPalindromeUsingLoop(value = this.value) {
    value = value.replace(/[^a-zA-Z]/g, "").toLowerCase();
    let valueLen = value.length;

    for (let index = 0; index < Math.floor(valueLen / 2); index++) {
      if (value[index] !== value[valueLen - index - 1]) {
        return false;
      }
    }
    return true;
  }

  isPalindromeUsingRecursive(value = this.value, index = 0) {
    value = value.replace(/[^a-zA-Z]/g, "").toLowerCase();
    if (index >= Math.floor(value.length / 2)) {
      return true;
    }
    if (value[index] !== value[value.length - 1 - index]) {
      return false;
    }

    return this.isPalindromeUsingRecursive(value, index + 1);
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const word = event.target["word"].value;
    const method = event.target["method"].value;

    let result;
    if (method === "reverse") {
      result = new Palindrome(word).isPalindromeUsingReverse(word);
    } else if (method === "loop") {
      result = new Palindrome(word).isPalindromeUsingLoop(word);
    } else if (method === "recursive") {
      result = new Palindrome(word).isPalindromeUsingRecursive(word);
    }

    document.getElementById("result").textContent = result;
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
