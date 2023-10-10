import { parseNumber } from "../../js/helper.js";

/**
 * Factorial Iterative Approach
 * @param {number} n 
 */
function factorialUsingLoop (n) {
  let formula = n; 

  for (let i = 1; i < n; i += 1) {
    formula *= (n-i);
  }
  
  return formula;
}

/**
* Factorial Recursive Approach
* @param {number} n 
*/
function factorialUsingrecursive (n) {
  return n <= 1 
    ? 1 
    : factorialUsingrecursive (n - 1) * n; 
}

  /**
 * Count factorial number from the given "n" value.
 * @param {number} n
 * @param {"loop" | "recursive"} method
 * @throws {Error}
 */
function countFactorial(n, method) {
  if (method == "loop") {
    return factorialUsingLoop(n);
  } else if (method == "recursive") {
    return factorialUsingrecursive(n);
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
