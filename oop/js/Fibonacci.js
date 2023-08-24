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
  generateFibonacciUsingLoop() {
    let fibonacci = [0, 1];
    if (this.sequence == 1) {
      return fibonacci.pop();
    } else if (this.sequence == 2) {
      return fibonacci;
    }

    for (let index = 2; index < this.sequence; index++) {
      fibonacci.push(fibonacci[index - 1] + fibonacci[index - 2]);
    }
    return fibonacci;
  }

  generateFibonacciUsingRecursive(sequence = this.sequence) {
    let array = [];

    if (sequence === 1) {
      array.push(0);
    } else if (sequence === 2) {
      array.push(0, 1);
    } else {
      array = this.generateFibonacciUsingRecursive(sequence - 1);

      let len = array.length;
      array.push(array[len - 1] + array[len - 2]);
    }
    return array;
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const sequence = event.target["sequence"].value;
    const method = event.target["method"].value;

    let result = [];
    const resultObj = new Fibonacci(sequence);
    if (method === "loop") {
      result = resultObj.generateFibonacciUsingLoop(sequence);
    } else if (method === "recursive") {
      result = resultObj.generateFibonacciUsingRecursive(sequence);
    } else {
      throw new Error("Method must be loop or recursive.");
    }
    document.getElementById("result").textContent = JSON.stringify(result);
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
