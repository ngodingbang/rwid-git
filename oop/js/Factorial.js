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
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const n = event.target["n"].value;
    const method = event.target["method"].value;

    const result = new Factorial(n);

    document.getElementById("result").textContent = result;
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
