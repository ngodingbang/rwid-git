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
   * @returns {Array}
   */
  generateFibonacciUsingLoop() {
    let result = [];

    for (let index = 1; index <= this.sequence; index++) {
      if (index == 1) {
        result.push(0);
        continue;
      }

      if (index == 2) {
        result.push(1);
        continue;
      }

      let lastIndex = result.length - 1;
      let currentNumber = result[lastIndex] + result[lastIndex - 1];

      result.push(currentNumber);
    }

    return result;
  }

  /**
   * Create an array filled by fibonacci sequence.
   *
   * @param {number[]} result
   * @param {number} index
   * @returns {number[]}
   */
  generateFibonacciUsingRecursive(result = [], index = 0) {
    if ([0, 1].includes(index)) {
      result.push(index);
      index++;

      return this.generateFibonacciUsingRecursive(result, index);
    }

    if (this.sequence - index <= 0) {
      return result;
    }

    let lastIndex = result.length - 1;
    let currentNumber = result[lastIndex] + result[lastIndex - 1];

    result.push(currentNumber);
    index++;

    return this.generateFibonacciUsingRecursive(result, index);
  }

  /**
   * Get fibonacci array using specified method
   *
   * @param {string} method
   * @returns {string}
   */
  getFibonacciByMethod(method) {
    let result = [];

    if (method === "loop") {
      result = this.generateFibonacciUsingLoop();
    } else if (method === "recursive") {
      result = this.generateFibonacciUsingRecursive();
    } else {
      throw new Error("Method must be loop or recursive.");
    }

    return result;
  }

  /**
   * Generate String of HTML elements that display fibonacci result
   *
   * @param {Array} array
   * @returns {string}
   */
  generateFibonacciResultHTML(array) {
    let result = "";

    for (let number of array) {
      result += `<div class="result-item-fibonacci">${number}</div>`;
    }

    return result;
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const sequence = event.target["sequence"].value;
    const method = event.target["method"].value;

    const fibonacci = new Fibonacci(sequence);
    const result = fibonacci.getFibonacciByMethod(method);

    document.getElementById("result").innerHTML =
      fibonacci.generateFibonacciResultHTML(result);
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
