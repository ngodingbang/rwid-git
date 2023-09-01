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
   * Determine whether the given value is a palindrome or not.
   *
   * @param {"reverse" | "loop" | "recursive"} method
   */
  evaluate(method) {
    if (method !== "reverse" && method !== "loop" && method !== "recursive") {
      throw new Error("Method must be reverse, loop, or recursive.");
    }

    return method === "reverse"
      ? this.evaluateUsingReverse()
      : method === "loop"
      ? this.evaluateUsingLoop()
      : this.evaluateUsingRecursive();
  }

  /**
   * Return palindrome human-readable description.
   *
   * @param {"reverse" | "loop" | "recursive"} method
   */
  getDescription(method) {
    return this.evaluate(method)
      ? "Yes, this word is a palindrome."
      : "No, this word is not a palindrome.";
  }

  /**
   * Determine whether the given value is a palindrome or not using reverse way.
   */
  evaluateUsingReverse() {
    let newValue = "";

    for (let index = this.value.length - 1; index >= 0; index--) {
      newValue += this.value[index];
    }

    return this.value === newValue;
  }

  /**
   * Determine whether the given value is a palindrome or not using loop way.
   */
  evaluateUsingLoop() {
    for (let index = 0; index < Math.floor(this.value.length / 2); index++) {
      const lastCharacterIndex = this.value.length - (index + 1);

      const firstCharacter = this.value[index];
      const lastCharacter = this.value[lastCharacterIndex];

      if (firstCharacter !== lastCharacter) {
        return false;
      }
    }

    return true;
  }

  /**
   * Determine whether the given value is a palindrome or not using recursive way.
   *
   * @param {number | undefined} index
   */
  evaluateUsingRecursive(index = undefined) {
    index ||= 0;

    if (index < Math.floor(this.value.length / 2)) {
      const lastCharacterIndex = this.value.length - (index + 1);

      const firstCharacter = this.value[index];
      const lastCharacter = this.value[lastCharacterIndex];

      if (firstCharacter !== lastCharacter) {
        return false;
      }

      return this.evaluateUsingRecursive(this.value, index + 1);
    }

    return true;
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const word = event.target["word"].value;
    const method = event.target["method"].value;

    const result = new Palindrome(word).getDescription(method);

    document.getElementById("result").textContent = result;
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
