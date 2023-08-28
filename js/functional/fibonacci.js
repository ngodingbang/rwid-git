import { parseNumber } from "../helper.js";

/**
 * Create an array filled by fibonacci sequence using loop way.
 *
 * @param {number} sequence
 *
 * @returns {Array}
 */
function generateFibonacciUsingLoop(sequence) {
  sequence = parseNumber(sequence);

  let result = [];

  for (let index = 0; index < sequence; index++) {
    if ([0, 1].includes(index)) {
      result.push(index);
      continue;
    }

    let lastIndex = result.length - 1;
    let currentNumber = result[lastIndex] + result[lastIndex - 1];

    result.push(currentNumber);
  }

  return result;
}

/**
 * Create an array filled by fibonacci sequence using recursive way.
 *
 * @param {number} sequence
 * @param {Array} result
 * @param {number} index
 *
 * @returns {Array}
 */
function generateFibonacciUsingRecursive(sequence, result = [], index = 0) {
  sequence = parseNumber(sequence);

  if (sequence - index <= 0) {
    return result;
  }

  if ([0, 1].includes(index)) {
    result.push(index);
    index++;

    return generateFibonacciUsingRecursive(sequence, result, index);
  }

  let lastIndex = result.length - 1;
  let currentNumber = result[lastIndex] + result[lastIndex - 1];

  result.push(currentNumber);
  index++;

  return generateFibonacciUsingRecursive(sequence, result, index);
}

/**
 * Get fibonacci array using specified method
 *
 * @param {number} sequence
 * @param {string} method
 * @returns {string}
 */
function getFibonacciByMethod(sequence, method) {
  let result = [];

  if (method === "loop") {
    result = generateFibonacciUsingLoop(sequence, method);
  } else if (method === "recursive") {
    result = generateFibonacciUsingRecursive(sequence);
  } else {
    throw new Error("Method must be loop or recursive.");
  }

  return result;
}

/**
 * Create string of html code that contain the result of fibbonacci item
 *
 * @param {Array} array
 * @returns {string}
 */
function generateFibonacciResultHTML(array) {
  let result = "";

  for (let number of array) {
    result += `<div class="result-item-fibonacci">${number}</div>`;
  }

  return result;
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const sequence = event.target["sequence"].value;
    const method = event.target["method"].value;

    let result = getFibonacciByMethod(sequence, method);

    document.getElementById("result").innerHTML =
      generateFibonacciResultHTML(result);
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
