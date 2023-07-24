import { parseNumber } from "./helper.js";

/**
 * Create an array filled by fibonacci sequence using loop way.
 *
 * @param {number} sequence
 * @returns {number}
 */
function generateFibonacciUsingLoop(sequence) {
  // write your code here
  return [];
}

/**
 * Create an array filled by fibonacci sequence using recursive way.
 *
 * @param {number} sequence
 * @returns {number}
 */
function generateFibonacciUsingRecursive(sequence) {
  // write your code here
  return [];
}

/**
 * @param {Event} event
 */
function submitForm(event) {
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
}

document.getElementById("form").addEventListener("submit", function (event) {
  submitForm(event);
});
