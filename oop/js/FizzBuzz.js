import { parseNumber } from "../../js/helper.js";

export class FizzBuzz {
  /** @type {number} */
  sequence;

  /**
   * @param {number} sequence
   */
  constructor(sequence) {
    this.sequence = parseNumber(sequence);
  }

  /**
   * Create an array filled by "fizz", "buzz", or "fizz buzz" based on
   * this requirement below (highest priority from above).
   *
   * Muliples of 4 or 7: "fizz buzz"
   * Odd sequence: "fizz"
   * Even sequence: "buzz"
   *
   * @returns {("fizz buzz" | "fizz" | "buzz")[]}
   */
  generate() {
    // write your code here
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
