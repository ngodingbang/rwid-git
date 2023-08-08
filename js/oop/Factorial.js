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

  // write your code here
  /**
   *
   * @returns {number}
   */
  countFactorialLoop() {
    let factorialResult = 1;
    for (let i = this.n; i > 0; i--) {
      factorialResult *= i;
    }
    return factorialResult;
  }

  /**
   *
   * @returns {number}
   */
  countFactorialRecursive() {
    if (this.n == 0) {
      return 1;
    } else {
      return this.n * this.countFactorialRecursive(this.n--);
    }
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const n = event.target["n"].value;
    const method = event.target["method"].value;

    const result = new Factorial(n);
    if (method == "loop") {
      document.getElementById("result").textContent =
        result.countFactorialLoop();
    } else if (method == "recursive") {
      document.getElementById("result").textContent =
        result.countFactorialRecursive();
    } else {
      document.getElementById("result").textContent = result;
    }
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
