import { parseNumber } from "../helper.js";

/**
 * Count factorial number from the given "n" value using loop way.
 *
 * @param {number} n
 */
function countFactorialUsingLoop(n) {
  n = parseNumber(n);
  let result = n <= 0 ? 1 : n;

  for (let i = 1; i < n; i++) {
    result = result * (n - i);
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
  } else {
    return n * countFactorialUsingRecursive(n - 1);
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
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
});
