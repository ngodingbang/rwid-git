import { parseNumber } from "../utils/parser.js";

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
