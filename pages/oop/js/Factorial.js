import { parseNumber } from "../../js/helper.js";

/**
 * Factorial class to compute factorial of a number using both iterative and recursive methods.
 */
class Factorial {
  /**
   * Initializes a new instance of the Factorial class.
   * @param {number} n 
   */
  constructor(n) {
    this.n = n;
  }

  /**
   * Computes the factorial using an iterative approach.
   * @returns {number} 
   */
  factorialUsingLoop() {
    let result = 1;
    for (let index = 2; index <= this.n; index++) {
      result *= index;
    }
    return result;
  }

  /**
   * Computes the factorial using a recursive approach.
   * @param {number} [n=this.n] 
   * @returns {number} 
   */
  factorialUsingRecursive(n = this.n) {
    return n <= 1
      ? 1
      : this.factorialUsingRecursive(n - 1) * n;
  }

  /**
   * Logs the factorial results (for both iterative and recursive methods) to the console.
   */
  showAtConsole() {
    const loopResult = this.factorialUsingLoop();
    const recursiveResult = this.factorialUsingRecursive();
    console.info(`Factorial (Loop): ${loopResult}`);
    console.info(`Factorial (Recursive): ${recursiveResult}`);
  }
}

const Factorial5 = new Factorial(10);
Factorial5.showAtConsole();
