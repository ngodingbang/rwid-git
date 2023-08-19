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

  generate() {
    let result = [];

    for (let index = 1; index <= this.sequence; index++) {
      if (index % 4 === 0 || index % 7 === 0) {
        result.push("fizz buzz");
      } else if (index % 2 === 1) {
        result.push("fizz");
      } else if (index % 2 === 0) {
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

    const result = new FizzBuzz(sequence).generate();

    document.getElementById("result").textContent = JSON.stringify(result);
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
