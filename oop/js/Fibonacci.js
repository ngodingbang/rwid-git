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

  /**
   * Create an array filled by fibonacci sequence using loop way.
   *
   * @returns {number[]}
   */
  generateUsingLoop() {
    // write your code here
  }

  /**
   * Create an array filled by fibonacci sequence using recursive way.
   *
   * @returns {number[]}
   */
  generateUsingRecursive() {
    // write your code here
  }

  /**
   * Create an array filled by fibonacci sequence.
   *
   * @param {"loop" | "recursive"} method
   */
  generate(method) {
    if (method === "loop") {
      return this.generateUsingLoop();
    } else if (method === "recursive") {
      return this.generateUsingRecursive();
    } else {
      throw new Error("Method must be loop or recursive.");
    }
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const sequence = event.target["sequence"].value;
    const method = event.target["method"].value;

    const numbers = new Fibonacci(sequence).generate(method);

    document.getElementById("result").innerHTML = document.getElementById(
      "result",
    ).innerHTML = numbers
      .map(number => `<div class="result-item-fibonacci">${number}</div>`)
      .join("");
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
