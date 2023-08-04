// import { parseNumber } from "../helper.js";

/**
 * Create an array filled by fibonacci sequence using loop way.
 *
 * @param {number} sequence
 */
function generateFibonacciUsingLoop(sequence) {
  let result = [];
  let n1 = 0,
    n2 = 1,
    nextTerm;

  for (let i = 1; i <= sequence; i++) {
    result.push(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }

  return result;
}

/**
 * Create an array filled by fibonacci sequence using recursive way.
 *
 * @param {number} sequence
 */
function generateFibonacciUsingRecursive(sequence) {
  if (sequence <= 2) return [0, 1].slice(0, sequence);

  const result = generateFibonacciUsingRecursive(sequence - 1);
  result.push(result[result.length - 1] + result[result.length - 2]);

  return result;
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
