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
   * Generate the Fibonacci sequence using the loop method.
   * @returns {number[]}
   */

  generateLoop() {
    const sequence = [0, 1];

    for (let i = 2; i < this.sequence; i++) {
      const nextNumber = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextNumber);
    }

    return sequence;
  }

  /**
   * Generate the Fibonacci sequence using the recursive method.
   * @param {number} n
   * @returns {number}
   */

  generateRecursive(n) {
    if (n <= 1) {
      return n;
    }

    return this.generateRecursive(n - 1) + this.generateRecursive(n - 2);
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const sequence = event.target["sequence"].value;
    const method = event.target["method"].value;

    const fibonacciInstance = new Fibonacci(sequence);
    let result;

    if (method === "loop") {
      result = fibonacciInstance.generateLoop();
    } else if (method === "recursive") {
      result = [];
      for (let i = 0; i < fibonacciInstance.sequence; i++) {
        result.push(fibonacciInstance.generateRecursive(i));
      }
    } else {
      throw new Error("Method must be loop or recursive.");
    }

    document.getElementById("result").textContent = JSON.stringify(result);
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});

