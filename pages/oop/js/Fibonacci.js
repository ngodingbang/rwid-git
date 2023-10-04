import { parseNumber } from "../../js/helper.js";

/**
 * Fibonacci class to generate Fibonacci sequences.
 */
class Fibonacci {
  /**
   * Initializes a new instance of the Fibonacci class.
   * @param {number} n 
   */
  constructor(n) {
    this.input = n;
  }

  /**
   * Recursively generates a Fibonacci sequence up to the specified position.
   * @param {number} [i=this.input] 
   * @returns {number} 
   */
  generateSequence(i = this.input) {
    return i <= 0
      ? 0
      : i <= 2
      ? 1
      : this.generateSequence(i - 1)
      + this.generateSequence(i - 2);
  }

  /**
   * Logs the Fibonacci sequence value of the specified position to the console.
   * @param {number} [i=this.input] 
   */
  showAtConsole(i = this.input) {
    console.info(`Fibonacci Sequence of ${i} is ${this.generateSequence()} `);
  }
}

const generateFibonacci1 = new Fibonacci(10);
generateFibonacci1.showAtConsole();
