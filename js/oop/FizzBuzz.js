import { parseNumber } from "../helper.js";

export class FizzBuzz {
  /** @type {number} */
  sequence;

  /**
   * @param {number} sequence
   */
  constructor(sequence) {
    this.sequence = parseNumber(sequence);
  }

  generate() {
    let result = [];

    for (let i = 1; i <= this.sequence; i++) {
      if (i % 4 === 0 || i % 7 === 0) {
        result.push("fizz buzz");
      } else if (i % 2 === 1) {
        result.push("fizz");
      } else if (i % 2 === 0) {
        result.push("buzz");
      }
    }

    return result;
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const sequence = event.target["sequence"].value;

    const generator = new FizzBuzz(sequence);
    const result = generator.generate();

    document.getElementById("result").textContent = JSON.stringify(result);
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
