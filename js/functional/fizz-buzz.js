import { parseNumber } from "../helper.js";

/**
 * Create an array filled by "fizz", "buzz", or "fizz buzz" based on
 * this requirement below (highest priority from above).
 *
 * Muliples of 4 or 7: "fizz buzz"
 * Odd sequence: "fizz"
 * Even sequence: "buzz"
 *
 * @param {number} sequence
 * @returns {Array}
 */
function generateFizzBuzz(sequence) {
  sequence = parseNumber(sequence);

  let result = [];

  for (let index = 1; index <= sequence; index++) {
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
function generateFizzBuzzResultHTML(array) {
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

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const sequence = event.target["sequence"].value;

    const result = generateFizzBuzz(sequence);

    document.getElementById("result").innerHTML =
      generateFizzBuzzResultHTML(result);
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
