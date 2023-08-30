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
   * Count factorial number from the given "n" value.
   *
   * @param {"loop" | "recursive"} method
   */
  count(method) {
    if (method !== "loop" && method !== "recursive") {
      throw new Error("Method must be loop or recursive.");
    }

    return method === "loop"
      ? this.countUsingLoop()
      : this.countUsingRecursive();
  }

  /**
   * Count factorial number from the given "n" value using loop way.
   *
   * @returns {number}
   */
  countUsingLoop() {
    let result = 1;

    for (let index = this.n; index > 0; index--) {
      result = result * index;
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
    n ||= this.n;

    if (n < 2) {
      return 1;
    }

    return n * this.countUsingRecursive(n - 1);
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
