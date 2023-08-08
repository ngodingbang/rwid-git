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

    const result = new FizzBuzz(sequence);

    let outputFizzBuzzArray = result.generate();

    let resultContainer = "";
    let fizzBuzzNumber = 1;
    for (let fizzBuzzItem of outputFizzBuzzArray) {
      if (fizzBuzzNumber % 4 === 0 || fizzBuzzNumber % 7 === 0) {
        resultContainer += `
      <div class="result-item-fizzbuzz bg-red">${fizzBuzzNumber} ${fizzBuzzItem}</div>
      `;
      } else if (fizzBuzzNumber % 2 === 1) {
        resultContainer += `
      <div class="result-item-fizzbuzz bg-blue">${fizzBuzzNumber} ${fizzBuzzItem}</div>
      `;
      } else if (fizzBuzzNumber % 2 === 0) {
        resultContainer += `
      <div class="result-item-fizzbuzz bg-green">${fizzBuzzNumber} ${fizzBuzzItem}</div>
      `;
      }

      fizzBuzzNumber++;
    }

    document.getElementById("result").innerHTML = resultContainer;
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
