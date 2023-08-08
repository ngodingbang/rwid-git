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

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const sequence = event.target["sequence"].value;

    const result = generateFizzBuzz(sequence);

    let resultContainer = "";
    let fizzBuzzNumber = 1;
    for (let fizzBuzzItem of result) {
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
