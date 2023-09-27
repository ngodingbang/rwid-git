import { parseNumber } from "../../js/helper.js";

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
  countUsingLoop() {
    let result = 1;

    for (let index = this.n; index > 0; index--) {
      result *= index;
    }

    return result;
  }

  /**
   * Count factorial number from the given "n" value using recursive way.
   *
   * @param {number | undefined} n
   * @returns {number}
   */
  countUsingRecursive(n = undefined) {
    if (this.n == 0) {
      return 1;
    }

    return this.n * this.countUsingRecursive(this.n--);
  }

  /**
   * Count factorial number from the given "n" value.
   *
   * @param {"loop" | "recursive"} method
   * @throws {Error}
   */
  count(method) {
    if (method == "loop") {
      return this.countUsingLoop();
    } else if (method == "recursive") {
      return this.countUsingRecursive();
    } else {
      throw new Error("Method must be loop or recursive.");
    }
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const n = event.target["n"].value;
    const method = event.target["method"].value;

    const result = new Factorial(n).count(method);

    document.getElementById("result").textContent = result;
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
