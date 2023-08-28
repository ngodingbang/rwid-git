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

  /**
   * Create an array filled by "fizz", "buzz", or "fizz buzz" based on
   * this requirement below (highest priority from above).
   *
   * Muliples of 4 or 7: "fizz buzz"
   * Odd sequence: "fizz"
   * Even sequence: "buzz"
   *
   * @returns {Array}
   */
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

  /**
   * Create string of html code that contain the result of fizz buzz item
   *
   * @param {Array} array
   * @returns {string}
   */
  generateHTML(array) {
    let result = "";

    for (let index = 0; index < array.length; index++) {
      switch (array[index]) {
        case "fizz buzz":
          result += `<div class="result-item-fizzbuzz bg-red">${index + 1} ${
            array[index]
          }</div>`;
          break;
        case "fizz":
          result += `<div class="result-item-fizzbuzz bg-blue">${index + 1} ${
            array[index]
          }</div>`;
          break;
        case "buzz":
          result += `<div class="result-item-fizzbuzz bg-green">${index + 1} ${
            array[index]
          }</div>`;
          break;
        default:
          break;
      }
    }

    return result;
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const sequence = event.target["sequence"].value;

    const fizzbuzz = new FizzBuzz(sequence);
    let result = fizzbuzz.generate();

    document.getElementById("result").innerHTML = fizzbuzz.generateHTML(result);
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
