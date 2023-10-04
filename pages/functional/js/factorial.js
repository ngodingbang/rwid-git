import { parseNumber } from "../../js/helper.js";

/**
 * Factorial Using Loop
 * @param {*} n 
 * @returns 
 */
function factorialUsingLoop (n) {
  let formula = n; 

  for (let i = 1; i < n; i += 1) {
      formula *= (n-i);
  }
  
  return formula;
}

console.log (factorialUsingLoop (6));

/**
*Factorial Using Recursive 
* @param {number} n 
* @returns 
*/
function factorialUsingrecursive (n) {
  return n <= 1 
  ? 1
  : factorialUsingrecursive (n - 1) * n; 
  }

console.log (factorialUsingrecursive (6));
