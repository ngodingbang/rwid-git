import { parseNumber } from "../../js/helper.js";

/**
* Fibonacci Recursive Approach
* @param {number} sequence 
*/
function fibbonaciUsingRecursive (sequence) {
  return sequence < 1
    ? 0 
    : sequence <= 2
    ? 1
    : fibbonaciUsingRecursive (sequence - 1) 
    + fibbonaciUsingRecursive (sequence - 2);
}

/**
* Fibonacci Loop Approach
* @param {number} sequence 
*/
function fibbonaciUsingLoop (sequence) {
  if (sequence < 1) {
    return 0;
  } else if (sequence <= 2) {
    return 1
  }

  let previous = 0;
  
  let next = 1;
  
  let result = 1;

  for (let iteration = 2; iteration <= sequence; iteration++) {
      result = previous + next;
      previous = next;
      next = result;
  }

  return result;
}

/**
 * Create an array filled by fibonacci sequence.
 * @param {number} sequence
 * @param {"loop"| "recursive"} method
 * @throws {Error}
 */
function generateFibonacci(sequence, method) {
  if (method === "loop") {
    return fibbonaciUsingLoop(sequence);
  } else if (method === "recursive") {
    return fibbonaciUsingRecursive(sequence);
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
