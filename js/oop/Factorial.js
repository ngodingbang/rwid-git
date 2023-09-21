import { parseNumber } from "../helper.js";

export class Factorial {
  /** @type {number} */
  number;

  /**
   * @param {number} number
   */
  constructor(number) {
    this.number = parseNumber(number);
  }

  /**
   * Count factorial number from the given "n" value using loop way.
   *
   */
  countUsingLoop() {
    var result = this.number <= 0 ? 1 : this.number;

    for (let i = 1; i < this.number; i++) {
      result = result * (this.number - i);
    }

    return result;
  }

  /**
   * Count factorial number from the given "n" value using recursive way.
   *
   * @param {number | undefined} n
   */
  countUsingRecursive(number = undefined) {
    if (number == undefined || number < 2) {
      return 1;
    }

    return number * this.countUsingRecursive(number - 1);
  }

  count(method) {
    let result;

    if (method === "loop") {
      result = this.countUsingLoop();
    } else if (method === "recursive") {
      result = this.countUsingRecursive(this.number);
    } else {
      throw new Error("Method must be loop or recursive.");
    }

    return result;
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const number = event.target["n"].value;
    const method = event.target["method"].value;

    // console.log(number);
    // console.log(method);

    const result = new Factorial(number).count(method);

    document.getElementById("result").textContent = result;
  } catch (error) {
    alert(error.message);
    // console.error(error);
  }
});
