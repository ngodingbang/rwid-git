import { parseNumber } from "../helper.js";

/**
 * Count factorial number from the given "n" value using loop way.
 *
 * @param {number} n
 */
function countFactorialUsingLoop(n) {
  n = parseNumber(n);

  let result = 1;

  for (let index = n; index > 0; index--) {
    result *= index;
  }

  return result;
}

/**
 * Count factorial number from the given "n" value using recursive way.
 *
 * @param {number} n
 */
function countFactorialUsingRecursive(n) {
  n = parseNumber(n);

  if (n < 2) {
    return 1;
  }

  return n * countFactorialUsingRecursive(n - 1);
}

/**
 * Get factorial number using the way that specified in selected method
 *
 * @param {number} n
 * @param {string} method
 * @returns {string}
 */
function getFactorialByMethod(n, method) {
  let result = "";

  if (method == "loop") {
    result = countFactorialUsingLoop(n);
  } else if (method == "recursive") {
    result = countFactorialUsingRecursive(n);
  } else {
    throw new Error("Method must be loop or recursive.");
  }

  return result;
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const n = event.target["n"].value;
    const method = event.target["method"].value;

    let result = getFactorialByMethod(n, method);

    document.getElementById("result").textContent = result;
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
