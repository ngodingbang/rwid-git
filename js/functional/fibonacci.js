import { parseNumber } from "../helper.js";

/**
 * Create an array filled by fibonacci sequence using loop way.
 *
 * @param {number} sequence
 */
function generateFibonacciUsingLoop(sequence) {
  const array = [];

  if (sequence <= 0) {
    return array;
  }

  if (sequence >= 1) {
    array.push(0);
  }

  if (sequence >= 2) {
    array.push(1);
  }

  for (let index = 0; index < sequence - 2; index++) {
    let currentNumber = array[array.length - 2] + array[array.length - 1];

    array.push(currentNumber);
  }

  return array;
}

/**
 * Create an array filled by fibonacci sequence using recursive way
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
  }

  const currentArray = generateFibonacciUsingRecursive(sequence - 1);

  const nextNumber =
    currentArray[currentArray.length - 1] +
    currentArray[currentArray.length - 2];

  currentArray.push(nextNumber);

  return currentArray;
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
