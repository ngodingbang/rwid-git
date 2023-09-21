import { parseNumber } from "../../js/helper.js";

export class Fibonacci {
  /** @type {number} */
  sequence;

  /**
   * @param {number} sequence
   */
  constructor(sequence) {
    this.sequence = parseNumber(sequence);
  }

  /**
   * Create an array filled by fibonacci sequence using loop way.
   *
   * @returns {number[]}
   */
  generateUsingLoop() {
    let result = [];

    for (let index = 1; index <= this.sequence; index++) {
      if (index == 1) {
        result.push(0);
        continue;
      }

      if (index == 2) {
        result.push(1);
        continue;
      }

      let lastIndex = result.length - 1;
      let currentNumber = result[lastIndex] + result[lastIndex - 1];

      result.push(currentNumber);
    }

    return result;
  }

  /**
   * Create an array filled by fibonacci sequence using recursive way.
   *
   * @param {number[]} [result=[]]
   * @param {number} [index=0]
   * @returns {number[]}
   */
  generateUsingRecursive(result = [], index = 0) {
    if ([0, 1].includes(index)) {
      result.push(index);
      index++;

      return this.generateUsingRecursive(result, index);
    }

    if (this.sequence - index <= 0) {
      return result;
    }

    let lastIndex = result.length - 1;
    let currentNumber = result[lastIndex] + result[lastIndex - 1];

    result.push(currentNumber);
    index++;

    return this.generateUsingRecursive(result, index);
  }

  /**
   * Create an array filled by fibonacci sequence.
   *
   * @param {"loop" | "recursive"} method
   */
  generate(method) {
    if (method === "loop") {
      return this.generateUsingLoop();
    } else if (method === "recursive") {
      return this.generateUsingRecursive();
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
