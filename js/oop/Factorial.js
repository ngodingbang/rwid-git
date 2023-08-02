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

  countUsingRecursive() {
    if (this.n < 2) {
      return 1;
    }

    return this.n * new Factorial(this.n - 1).countUsingRecursive();
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const n = event.target["n"].value;
    const method = event.target["method"].value;

    const factorial = new Factorial(n);

    let result;

    if (method === "loop") {
      result = factorial.countUsingLoop();
    } else if (method === "recursive") {
      result = factorial.countUsingRecursive();
    } else {
      throw new Error("Method must be loop or recursive.");
    }

    document.getElementById("result").textContent = result;
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
