import { parseNumber } from "../../js/helper.js";

/**
 * Create an array filled by fibonacci sequence using loop way.
 *
 * @param {number} sequence
 */
function generateFibonacciUsingLoop(sequence) {
  sequence = parseNumber(sequence);

  let result = [];
  let prev = 0;
  let next = 1;

  for (let index = 0; index < sequence; index++) {
    result.push(prev);

    const current = prev + next;
    prev = next;
    next = current;
  }

  return result;
}

/**
 * Create an array filled by fibonacci sequence using recursive way.
 *
 * @param {number} sequence
 */
function generateFibonacciUsingRecursive(sequence) {
  /**
   * @param {number} n
   * @returns {number}
   */
  function fibonacci(n) {
    return n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
  }

  sequence = parseNumber(sequence);

  let result = [];

  for (let index = 0; index < sequence; index++) {
    const current = fibonacci(index);

    result.push(current);
  }

  return result;
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
