import { parseNumber } from "../../js/helper.js";

/**
 * FizzBuzz class to generate and display a modified FizzBuzz sequence.
 */
class FizzBuzz {
  /**
   * Initializes a new instance of the FizzBuzz class.
   * @param {number} n 
   */
  constructor(n) {
    this.n = n;
  }

  /**
   * A generator function to yield a modified FizzBuzz sequence up to the specified number.
   * @param {number} [index=this.n] 
   * @yields {string} 
   */
  *fizzBuzzGenerator(index = this.n) {
    for (let i = 1; i < index + 1; i++) {
      yield i % 4 === 0 || i % 7 === 0
        ? `Iteration ${i} : Fizz Buzz`
        : i % 2 === 0
        ? `Iteration ${i} : Fizz`
        : i % 2 === 1
        ? `Iteration ${i} : Buzz`
        : undefined;
    }
  }

  /**
   * Displays the modified FizzBuzz sequence up to the number specified during class instantiation in the console.
   */
  showAtConsole() {
    for (const x of this.fizzBuzzGenerator()) {
      console.info(x);
    }
  }
}

const FizzBuzz5 = new FizzBuzz(7);
FizzBuzz5.showAtConsole();
