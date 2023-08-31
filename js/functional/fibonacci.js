import { parseNumber } from "../helper.js";

/**
 * Create an array filled by fibonacci sequence using loop way.
 *
 * @param {number} sequence
 */
function generateFibonacciUsingLoop(sequence) {
  sequence = parseNumber(sequence);

  if (sequence <= 0) {
    return [];
  } else if (sequence === 1) {
    return [0];
  }

  const fibonacciArray = [0, 1];

  for (let index = 2; index < sequence; index++) {
    const nextFibonacci = fibonacciArray[index - 1] + fibonacciArray[index - 2];
    fibonacciArray.push(nextFibonacci);
  }

  return fibonacciArray;
}

/**
 * Create an array filled by fibonacci sequence using recursive way.
*
* @param {number} sequence
*/
function generateFibonacciUsingRecursive(sequence) {
  sequence = parseNumber(sequence);

  if (sequence <= 0) {
    return [];
  } else if (sequence === 1) {
    return [0];
  } else if (sequence === 2) {
    return [0, 1];
  }

  const fibonacciArray = generateFibonacciUsingRecursive(sequence - 1);

  const nextFibonacci = fibonacciArray[fibonacciArray.length - 1] + fibonacciArray[fibonacciArray.length - 2];

  fibonacciArray.push(nextFibonacci);

  return fibonacciArray;
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
