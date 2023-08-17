import { NumberSequence } from "./NumberSequence.js";

export class Fibonacci extends NumberSequence {
  constructor(sequence) {
    super(sequence);
  }

  generateUsingLoop() {
    const arrayFibonacci = [];

    for (let index = 0; index < this.sequence; index++) {
      if (index === 0 || index === 1) {
        arrayFibonacci.push(index);
      } else {
        arrayFibonacci.push(
          arrayFibonacci[index - 1] + arrayFibonacci[index - 2],
        );
      }
    }

    return arrayFibonacci;
  }

  /**
   *
   * @param {number | undefined} sequence
   */

  generateUsingRecursive(sequence = undefined) {
    if (sequence === undefined) {
      sequence = this.sequence;
    }
    let arrayFibonacci = [];

    if (sequence === 1) {
      arrayFibonacci.push(0);
    } else if (sequence === 2) {
      arrayFibonacci.push(0, 1);
    } else {
      arrayFibonacci = this.generateUsingRecursive(sequence - 1);

      let len = arrayFibonacci.length;
      arrayFibonacci.push(arrayFibonacci[len - 1] + arrayFibonacci[len - 2]);
    }
    return arrayFibonacci;
  }

  generate(method) {
    let result;

    if (method === "loop") {
      result = this.generateUsingLoop();
    } else if (method === "recursive") {
      result = this.generateUsingRecursive();
    } else {
      throw new Error("Method must be loop or recursive.");
    }

    return result;
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const sequence = event.target["sequence"].value;
    const method = event.target["method"].value;

    const result = new Fibonacci(sequence).generate(method);

    document.getElementById("result").textContent = JSON.stringify(result);
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
