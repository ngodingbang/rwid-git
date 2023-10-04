import { parseNumber } from "../../js/helper.js";

/**
* Using Simple Loop
* @param {number} sequence
*/
function generateFizzBuzz (sequence) {
  for (let i = 1; i <= sequence; i++) {
      if (i % 4 === 0 || i % 7 === 0) {
          console.log (`fizz buzz ${i}`);
          continue;
      } else if (i % 2 === 1) {
          console.log (`fizz ${i}`)
      } else if (i % 2 === 0) {
          console.log (`buzz ${i}`)
      } 
  }
}

generateFizzBuzz (8);

/**
* Using concept "Const of" and  "Function as a parameter"
* @param {()} sequence 
*/
function generateFizzBuzz2 (sequence) {
  for (const i of sequence)
  if (i % 4 === 0 || i % 7 === 0) {
      console.log (`fizz buzz ${i}`);
  } else if (i % 2 === 1) {
      console.log (`fizz ${i}`)
  } else if (i % 2 === 0) {
      console.log (`buzz ${i}`)
  }
}

/**
* 
* @param {number} customNumber 
*/
numberGenerator = function (customNumber) {
  let array = []; 
  
  for (let i = 1; i <= customNumber; i++) {
      array [i - 1] = i;
   }

  return array;
}

generateFizzBuzz2 (numberGenerator (8));
