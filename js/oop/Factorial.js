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

  countUsingLoop() {
    let result = 1;

    for (let index = this.n; index > 0; index--) {
      result = result * index;
    }
    return result;
  }
  /**
   * @param {number | undefined} n
   */

  countUsingRecursive(n = undefined) {
    if (n === undefined) {
      n = this.n;
    }

    if (n < 2) {
      return 1;
    }

    return n * this.countUsingRecursive(n - 1);
  }

  count(method) {
    let result;

    if (method === "loop") {
      result = this.countUsingLoop();
    } else if (method === "recursive") {
      result = this.countUsingRecursive();
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

    const result = new Factorial(n).count(method);

    document.getElementById("result").textContent = result;
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
