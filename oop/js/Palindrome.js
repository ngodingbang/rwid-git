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

  /**
   * Determine whether the given value is a palindrome or not using reverse way.
   *
   * @returns {boolean}
   */
  evaluateUsingReverse() {
    let reversedValue = this.value.split("").reverse().join("");

    return this.value == reversedValue;
  }

  /**
   * Determine whether the given value is a palindrome or not using loop way.
   *
   * @returns {boolean}
   */
  evaluateUsingLoop() {
    let reversedValue = "";

    for (let index = this.value.length - 1; index >= 0; index--) {
      reversedValue += this.value[index];
    }

    return this.value == reversedValue;
  }

  /**
   * Determine whether the given value is a palindrome or not using recursive way.
   *
   * @param {string} [reversedValue=""]
   * @param {number} [index=0]
   * @returns {boolean}
   */
  evaluateUsingRecursive(reversedValue = "", index = 0) {
    let lastIndex = this.value.length - 1;

    if (reversedValue.length == this.value.length) {
      return reversedValue == this.value;
    }

    reversedValue += this.value[lastIndex - index];
    index++;

    return this.evaluateUsingRecursive(reversedValue, index);
  }

  /**
   * Determine whether the given value is a palindrome or not.
   *
   * @typedef {"reverse" | "loop" | "recursive"} Method
   * @param {Method} method
   */
  evaluate(method) {
    if (method === "reverse") {
      return this.evaluateUsingReverse();
    } else if (method === "loop") {
      return this.evaluateUsingLoop();
    } else if (method === "recursive") {
      return this.evaluateUsingRecursive();
    } else {
      throw new Error("Method must be reverse, loop, or recursive.");
    }
  }

  /**
   * Return palindrome human-readable description.
   *
   * @param {Method} method
   */
  generateStatus(method) {
    return this.evaluate(method)
      ? "Yes, this word is a palindrome."
      : "No, this word is not a palindrome.";
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const word = event.target["word"].value;
    const method = event.target["method"].value;

    const result = new Palindrome(word).generateStatus(method);

    document.getElementById("result").textContent = result;
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
