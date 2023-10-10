import { parseNumber } from "../../js/helper.js";

export class FizzBuzz {
  /**
   * Initializes a new instance of the FizzBuzz class.
   * @param {number} n 
   */
  constructor(n) {
    this.n = n;
  }

  /**
   * Iterative Approach
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

  generate () {
    let result = [];

    for (const x of this.fizzBuzzGenerator ()) {
      result.push (x);
    }

    return result;
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const sequence = event.target["sequence"].value;

    const fizzBuzzs = new FizzBuzz(sequence).generate();

    document.getElementById("result").innerHTML = fizzBuzzs
      .map(
        (fizzBuzz, index) =>
          `<div class="result-item-fizzbuzz bg-${
            {
              "fizz buzz": "red",
              fizz: "blue",
              buzz: "green",
            }[fizzBuzz]
          }">${index + 1} ${fizzBuzz}</div>`,
      )
      .join("");
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
