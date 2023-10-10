import { parseNumber } from "../../js/helper.js";

export class Fibonacci {
  /**
   * @param {number} n 
   */
  constructor(n) {
    this.input = n;
  }

  /**
   * Recursive Approach
   * @param {number} [i=this.input] 
   */
  fibonacciUsingRecursive (i = this.input) {
    return i <= 0
      ? 0
      : i <= 2
      ? 1
      : this.fibonacciUsingRecursive (i - 1)
      + this.fibonacciUsingRecursive (i - 2);
  }

  /**
  * Fibonacci Loop Approach
  * @param {number} sequence 
  */
  fibbonaciUsingLoop (sequence = this.input) {
    if (sequence < 1) {
      return 0;
    } else if (sequence <= 2) {
      return 1
    }

    let previous = 0;
    
    let next = 1;
    
    let result = 1;

    for (let iteration = 2; iteration <= sequence; iteration++) {
        result = previous + next;
        previous = next;
        next = result;
    }

    return result;
  }

  /**
    * Create an array filled by fibonacci sequence.
    * @param {"loop" | "recursive"} method
    */
  generate(method) {
   if (method === "loop") {
     return this.fibbonaciUsingLoop();
   } else if (method === "recursive") {
     return this.fibonacciUsingRecursive();
   } else {
     throw new Error("Method must be loop or recursive.");
   }
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
event.preventDefault(); 
try {
  const sequence = event.target["sequence"].value;
  
  const method = event.target["method"].value;
  
  const numbers = new Fibonacci(sequence).generate(method);
  
  document.getElementById("result").innerHTML = document.getElementById(
    "result",
    ).innerHTML = numbers
    .map(number => `<div class="result-item-fibonacci">${number}</div>`)
    .join("");
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
  