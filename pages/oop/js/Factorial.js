import { parseNumber } from "../../js/helper.js";

class Factorial {
  /**
   * @param {number} n 
   */
  constructor(n) {
    this.n = n;
  }

  /**
   * Iterative Approach
   * @param {number} [n=this.n] 
   */
  factorialUsingLoop() {
    let result = 1;
    
    for (let index = 2; index <= this.n; index++) {
      result *= index;
    }
    
    return result;
  }

  /**
   * Recursive approach.
   * @param {number} [n=this.n] 
   */
  factorialUsingRecursive(n = this.n) {
    return n <= 1
      ? 1
      : this.factorialUsingRecursive(n - 1) * n;
  }

    /**
   * Count factorial number from the given "n" value.
   * @param {"loop" | "recursive"} method
   * @throws {Error}
   */
    count(method) {
      if (method == "loop") {
        return this.factorialUsingLoop();
      } else if (method == "recursive") {
        return this.factorialUsingRecursive();
      } else {
        throw new Error("Method must be loop or recursive.");
      }
    }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const n = event.target["n"].value;
    
    const method = event.target["method"].value;

    const result = new Factorial(n).count(method);

    document.getElementById("result").textContent = result;
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
