import { parseNumber } from "../helper.js";

export class Factorial {
  /** @type {number} */
  n;

  /**
   * @param {number} n
   */
  constructor(n) {
    this.n = parseNumber(n);
  }

  /**
   * Count factorial number from the given "n" value using loop way.
   *
   * @returns {number}
   */
  countFactorialLoop() {
    let result = 1;

    for (let index = this.n; index > 0; index--) {
      result *= index;
    }

    return result;
  }

  /**
   * Count factorial number from the given "n" value using recursive way.
   *
   * @returns {number}
   */
  countFactorialRecursive() {
    if (this.n == 0) {
      return 1;
    }

    return this.n * this.countFactorialRecursive(this.n--);
  }

  /**
   * Get factorial number using the way that specified in selected method
   *
   * @param {string} method
   * @returns {string}
   */
  getFactorialByMethod(method) {
    let result = "";

    if (method == "loop") {
      result = this.countFactorialLoop();
    } else if (method == "recursive") {
      result = this.countFactorialRecursive();
    } else {
      throw new Error("Method must be loop or recursive.");
    }

    return result;
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const n = event.target["n"].value;
    const method = event.target["method"].value;

    const result = new Factorial(n);

    document.getElementById("result").textContent =
      result.getFactorialByMethod(method);
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
