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
   * Create an array filled by fibonacci sequence using loop way.
   *
   * @param {number} sequence
   */
  generateFibonacciUsingLoop() {
    let result = [];
    let n1 = 0,
      n2 = 1,
      nextTerm;

    for (let i = 1; i <= this.sequence; i++) {
      result.push(n1);
      nextTerm = n1 + n2;
      n1 = n2;
      n2 = nextTerm;
    }

    return result;
  }

  /**
   * Create an array filled by fibonacci sequence using recursive way.
   *
   * @param {number} number
   */
  generateFibonacciUsingRecursive(number) {
    if (number <= 2) return [0, 1].slice(0, number);

    const result = this.generateFibonacciUsingRecursive(number - 1);
    result.push(result[result.length - 1] + result[result.length - 2]);

    return result;
  }

  /**
   * splitting function
   * @param {string} method
   */
  type(method) {
    let result;
    if (method === "loop") {
      result = this.generateFibonacciUsingLoop();
    } else if (method === "recursive") {
      result = this.generateFibonacciUsingRecursive(this.sequence);
    } else {
      throw new Error("Method must be loop or recursive.");
    }

    return result;
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const sequence = event.target["sequence"].value;
    const method = event.target["method"].value;

    const result = new Fibonacci(sequence).type(method);

    document.getElementById("result").textContent = JSON.stringify(result);
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
