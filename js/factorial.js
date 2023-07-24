import { parseNumber } from "./helper.js";

/**
 * Count factorial number from the given "n" value using loop way.
 *
 * @param {number} n
 */
function countFactorialUsingLoop(n) {
  // write your code here
  return n;
}

/**
 * Count factorial number from the given "n" value using recursive way.
 *
 * @param {number} n
 */
function countFactorialUsingRecursive(n) {
  // write your code here
  return n;
}

/**
 * @param {Event} event
 */
function submitForm(event) {
  event.preventDefault();

  try {
    const n = event.target["n"].value;
    const method = event.target["method"].value;

    let result;

    if (method === "loop") {
      result = countFactorialUsingLoop(n);
    } else if (method === "recursive") {
      result = countFactorialUsingRecursive(n);
    } else {
      throw new Error("Method must be loop or recursive.");
    }

    document.getElementById("result").textContent = result;
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  submitForm(event);
});
