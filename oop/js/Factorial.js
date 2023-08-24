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

  // write your code here
  calculateFactorialUsingLoop() {
    if (this.n === 0 || this.n === 1) {
      return 1;
    }

    let factorial = 1;
    for (let index = this.n; index > 0; index--) {
      factorial *= index;
    }
    return factorial;
  }

  calculateFactorialUsingRecursive(n = this.n) {
    if (n < 2) {
      return 1;
    }

    return n * this.calculateFactorialUsingRecursive(n - 1);
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const n = event.target["n"].value;
    const method = event.target["method"].value;

    const resultObj = new Factorial(n);

    let result = 0;

    if (method == "loop") {
      result = resultObj.calculateFactorialUsingLoop();
    } else if (method == "recursive") {
      result = resultObj.calculateFactorialUsingRecursive();
    } else {
      throw new Error("Method must be loop or recursive.");
    }

    document.getElementById("result").textContent = result;
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
