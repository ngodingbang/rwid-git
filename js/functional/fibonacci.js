import { parseNumber } from "../helper.js";

/**
 * Create an array filled by fibonacci sequence using loop way.
 *
 * @param {number} sequence
 */
function generateFibonacciUsingLoop(sequence) {
  sequence = parseNumber(sequence);

  const arrayFibonacci = [];

  for (let index = 0; index < sequence; index++) {
    if (index === 0 || index === 1) {
      arrayFibonacci.push(index);
    } else {
      arrayFibonacci.push(
        arrayFibonacci[index - 1] + arrayFibonacci[index - 2],
      );
    }
  }

  return arrayFibonacci;
}

/**
 * Create an array filled by fibonacci sequence using recursive way.
 *
 * @param {number} sequence
 */

function generateFibonacciUsingRecursive(sequence) {
  sequence = parseNumber(sequence);

  let arrayFibonacci = [];

  if (sequence === 1) {
    arrayFibonacci.push(0);
  } else if (sequence === 2) {
    arrayFibonacci.push(0, 1);
  } else {
    arrayFibonacci = generateFibonacciUsingRecursive(sequence - 1);

    let len = arrayFibonacci.length;
    arrayFibonacci.push(arrayFibonacci[len - 1] + arrayFibonacci[len - 2]);
  }
  return arrayFibonacci;
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const sequence = event.target["sequence"].value;
    const method = event.target["method"].value;

    let result;

    if (method === "loop") {
      result = generateFibonacciUsingLoop(sequence);
    } else if (method === "recursive") {
      result = generateFibonacciUsingRecursive(sequence);
    } else {
      throw new Error("Method must be loop or recursive.");
    }

    document.getElementById("result").textContent = JSON.stringify(result);
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
