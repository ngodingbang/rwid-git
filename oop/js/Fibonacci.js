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
   * @param {number} n
   * @returns {number}
   */
  static get(n) {
    return n < 1 ? 0 : n <= 2 ? 1 : this.get(n - 1) + this.get(n - 2);
  }

  /**
   * Create an array filled by fibonacci sequence using loop way.
   */
  generateUsingLoop() {
    let result = [];
    let prev = 0;
    let next = 1;

    for (let index = 0; index < this.sequence; index++) {
      result.push(prev);

      const current = prev + next;
      prev = next;
      next = current;
    }

    return result;
  }

  /**
   * Create an array filled by fibonacci sequence using recursive way.
   */
  generateUsingRecursive() {
    let result = [];

    for (let index = 0; index < this.sequence; index++) {
      const current = Fibonacci.get(index);

      result.push(current);
    }

    return result;
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
