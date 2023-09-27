import { parseNumber } from "../../js/helper.js";

/**
 * Create an array filled by fibonacci sequence using loop way.
 *
 * @param {number} sequence
 * @returns {number[]}
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
 * @param {number[]} [result=[]]
 * @param {number} [index=0]
 * @returns {number[]}
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
 * Create an array filled by fibonacci sequence.
 *
 * @param {number} sequence
 * @param {"loop"| "recursive"} method
 * @throws {Error}
 */
function generateFibonacci(sequence, method) {
  if (method === "loop") {
    return generateFibonacciUsingLoop(sequence);
  } else if (method === "recursive") {
    return generateFibonacciUsingRecursive(sequence);
  } else {
    throw new Error("Method must be loop or recursive.");
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const sequence = event.target["sequence"].value;
    const method = event.target["method"].value;

    const numbers = generateFibonacci(sequence, method);

    document.getElementById("result").innerHTML = numbers
      .map(number => `<div class="result-item-fibonacci">${number}</div>`)
      .join("");
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
