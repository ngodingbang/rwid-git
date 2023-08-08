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

  // write your code here
  /**
   * Create an array filled by fibonacci sequence.
   *
   * @returns {Array}
   */
  generateFibonacciUsingLoop() {
    let fibonacciArray = [];
    for (let i = 1; i <= this.sequence; i++) {
      if (i == 1) {
        fibonacciArray.push(0);
        continue;
      }

      if (i == 2) {
        fibonacciArray.push(1);
        continue;
      }
      let lastIndexOfFibonaciArray = fibonacciArray.length - 1;
      let currentFibonacciNumber =
        fibonacciArray[lastIndexOfFibonaciArray] +
        fibonacciArray[lastIndexOfFibonaciArray - 1];
      fibonacciArray.push(currentFibonacciNumber);
    }
    return fibonacciArray;
  }

  /**
   *
   * @param {number[]} currentFibonacciArray
   * @param {number} index
   * @returns {number[]}
   */
  generateFibonacciUsingRecursive(currentFibonacciArray = [], index = 0) {
    if (index == 0 || index == 1) {
      currentFibonacciArray.push(index);
      index++;
      return this.generateFibonacciUsingRecursive(currentFibonacciArray, index);
    }
    if (this.sequence - index <= 0) {
      return currentFibonacciArray;
    } else {
      let lastIndexOfFibonaciArray = currentFibonacciArray.length - 1;
      let currentFibonacciNumber =
        currentFibonacciArray[lastIndexOfFibonaciArray] +
        currentFibonacciArray[lastIndexOfFibonaciArray - 1];
      currentFibonacciArray.push(currentFibonacciNumber);
      index++;
      return this.generateFibonacciUsingRecursive(currentFibonacciArray, index);
    }
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const sequence = event.target["sequence"].value;
    const method = event.target["method"].value;
    let outputArray = [];
    const result = new Fibonacci(sequence);
    if (method === "loop") {
      outputArray = result.generateFibonacciUsingLoop();
    } else if (method === "recursive") {
      outputArray = result.generateFibonacciUsingRecursive();
    } else {
      throw new Error("Method must be loop or recursive.");
    }

    let resultContainer = "";
    for (let fibonacciNumber of outputArray) {
      resultContainer += `<div class="result-item-fibonacci">${fibonacciNumber}</div>`;
    }

    document.getElementById("result").innerHTML = resultContainer;
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
