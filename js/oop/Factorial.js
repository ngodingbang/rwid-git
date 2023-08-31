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
   * @return {number}
   */
  countFactorialUsingLoop() {
    let result = 1;

    for (let index = this.n; index > 0; index--) {
      result *= index;
    }

    return result;
  }

  countFactorialUsingRecursive() {
    if (this.n < 2) {
      return 1;
    }

    return this.n * new Factorial(this.n - 1).countFactorialUsingRecursive();
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const n = event.target["n"].value;

    const method = event.target["method"].value;

    const factorialInstance = new Factorial(n);

    let result;

    if (method === "loop") {
      result = factorialInstance.countFactorialUsingLoop();
    } else if (method === "recursive") {
      result = factorialInstance.countFactorialUsingRecursive();
    } else {
      throw new Error("Method must be loop or recursive.");
    }

    document.getElementById("result").textContent = result;
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});