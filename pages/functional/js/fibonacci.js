import { parseNumber } from "../../js/helper.js";

/**
* Using Recursive
* @param {number} sequence 
* @returns 
*/
function fibbonaciUsingRecursive (sequence) {
  return sequence < 1
  ? 0 //cancelling execution for unreal number
  : sequence <= 2
  ? 1
  : fibbonaciUsingRecursive (sequence - 1) +
    fibbonaciUsingRecursive (sequence - 2);
}

/**
* Using Loop
* @param {number} sequence 
* @returns 
*/
function fibbonaciUsingLoop (sequence) {
  if (sequence < 1) {
      return 0;
  }
  else if (sequence <= 2) {
      return 1
  }
  let previous = 0;
  let next = 1;
  let result = 1;

  for(let iteration = 2; iteration <= sequence; iteration++) {
      result = previous + next;
      previous = next;
      next = result; //I failed to notice the pattern
  }
  return result;
}

console.log(fibbonaciUsingLoop(8));
console.log(fibbonaciUsingRecursive(8));
