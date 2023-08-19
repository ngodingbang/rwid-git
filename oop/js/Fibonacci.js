import { parseNumber } from "../../js/helper.js";

export class Fibonacci {
  /** @type {number} */
  sequence;

  /**
   * @param {number} sequence
   */
  constructor(sequence) {
    this.sequence = parseNumber(sequence);
  }

  // write your code here
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const sequence = event.target["sequence"].value;
    const method = event.target["method"].value;

    const result = new Fibonacci(sequence);

    document.getElementById("result").textContent = JSON.stringify(result);
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
