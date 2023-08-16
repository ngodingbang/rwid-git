import { parseNumber } from "../helper.js";

/**
 * Create an array filled by fibonacci sequence using loop way.
 *
 * @param {number} sequence
 */
function generateFibonacciUsingLoop(sequence) {
  const fibonacciArray = [];

  if (sequence <= 0) {
    return fibonacciArray;
  }
  if (sequence >= 1) {
    fibonacciArray.push(0);
  }
  if (sequence >= 2) {
    fibonacciArray.push(1);
  }

  for (let seq = 0; seq < sequence - 2; seq++) {
    let currentNumber =
      fibonacciArray[fibonacciArray.length - 2] +
      fibonacciArray[fibonacciArray.length - 1];
    fibonacciArray.push(currentNumber);
  }

  return fibonacciArray;
}

/**
 * Create an array filled by fibonacci sequence using recursive way.
 *
 * @param {number} sequence
 */
function generateFibonacciUsingRecursive(sequence) {
  if (sequence <= 0) {
    return [];
  } else if (sequence <= 1) {
    return [0];
  } else if (sequence <= 2) {
    return [0, 1];
  } else {
    const currentArray = generateFibonacciUsingRecursive(sequence - 1);
    const nextNumber =
      currentArray[currentArray.length - 1] +
      currentArray[currentArray.length - 2];
    currentArray.push(nextNumber);
    return currentArray;
  }
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
