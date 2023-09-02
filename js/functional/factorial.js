import { parseNumber } from "../helper.js";

/**
 * Count factorial number from the given "n" value using loop way.
 *
 * @param {number} n
 */
function countFactorialUsingLoop(n) {
  let value = 1;
  for(let i=1; i<=n; i++){
    value = value * i
  }
  return value
}
console.log(`factorial with looping : ${countFactorialUsingLoop(5)}`)

/**
 * Count factorial number from the given "n" value using recursive way.
 *
 * @param {number} n
 */
function countFactorialUsingRecursive(n) {
  if(n<=1){
    return 1;
  } else{
    let n_next = countFactorialUsingRecursive(n-1);
    return n * n_next
  }
}
console.log(`factorial with recursive : ${countFactorialUsingRecursive(5)}`)

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
