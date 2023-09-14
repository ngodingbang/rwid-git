/**
 * Count factorial number from the given "n" value using loop way.
 *
 * @param {number} n
 * @returns {number}
 */
function countFactorialUsingLoop(n) {
  // write your code here
}

/**
 * Count factorial number from the given "n" value using recursive way.
 *
 * @param {number} n
 * @returns {number}
 */
function countFactorialUsingRecursive(n) {
  // write your code here
}

/**
 * Count factorial number from the given "n" value.
 *
 * @param {number} n
 * @param {"loop" | "recursive"} method
 * @throws {Error}
 */
function countFactorial(n, method) {
  if (method == "loop") {
    return countFactorialUsingLoop(n);
  } else if (method == "recursive") {
    return countFactorialUsingRecursive(n);
  } else {
    throw new Error("Method must be loop or recursive.");
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const n = event.target["n"].value;
    const method = event.target["method"].value;

    const result = countFactorial(n, method);

    document.getElementById("result").textContent = result;
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
