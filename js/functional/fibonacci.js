import { parseNumber } from "../helper.js";

/**
 * Create an array filled by fibonacci sequence using loop way.
 *
 * @param {number} sequence
 */
function generateFibonacciUsingLoop(sequence) {
  // write your code here
  let array = []
  if(sequence == 0){
    array = [0]
    return array
  } else if(sequence == 1){
    array = [0, 1]
    return array
  } else if(sequence > 1){
    array = [0, 1]
    for(let i=2; i<=sequence; i++){
      array.push(array[(i - 1)] + array[(i - 2)])
    }
    return array
  } else{
    return "Finonachi doesn't have minus number"
  }
}
console.log(generateFibonacciUsingLoop(10))

/**
 * Create an array filled by fibonacci sequence using recursive way.
 *
 * @param {number} sequence
 */
function generateFibonacciUsingRecursive(sequence) {
  // write your code here
  if(sequence <= 1){
    return [0, 1]
  } else{
    let array = generateFibonacciUsingRecursive(sequence -1);
    array.push(array[(sequence - 1)] + array[(sequence - 2)])
    return array
  }
}
console.log(generateFibonacciUsingRecursive(10))

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
