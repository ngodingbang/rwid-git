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
  loop() {
    let result = 1;

    for (let index = this.n; index > 0; index--) {
      result = result * index;
    }

    return result;
  }

  recursive() {
    if (this.n < 2) {
      return 1;
    }

    return this.n * new Factorial(this.n - 1).recursive();
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const n = event.target["n"].value;
    const method = event.target["method"].value;

    const result =
      method === "loop"
        ? new Factorial(n).loop()
        : new Factorial(n).recursive();

    document.getElementById("result").textContent = result;
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
