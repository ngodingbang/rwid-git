import { parseNumber } from "../helper.js";

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
   * Create an array filled by fibonacci sequence.
   *
   * @param {"loop" | "recursive"} method
   */
  generate(method) {
    if (method !== "loop" && method !== "recursive") {
      throw new Error("Method must be loop or recursive.");
    }

    return method === "loop"
      ? this.generateUsingLoop()
      : this.generateUsingRecursive();
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
   *
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
   * @param {number} n
   */
  static get(n) {
    return n < 1 ? 0 : n <= 2 ? 1 : this.get(n - 1) + this.get(n - 2);
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const sequence = event.target["sequence"].value;
    const method = event.target["method"].value;

    const result = new Fibonacci(sequence).generate(method);

    document.getElementById("result").textContent = JSON.stringify(result);
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
