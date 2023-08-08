import { parseNumber } from "../helper.js";

/**
 * Create an array filled by fibonacci sequence using loop way.
 *
 * @param {number} sequence
 */
function generateFibonacciUsingLoop(sequence) {
  let fibonacciArray = [];
  for (let i = 1; i <= sequence; i++) {
    if (i == 1) {
      fibonacciArray.push(0);
      continue;
    }

    if (i == 2) {
      fibonacciArray.push(1);
      continue;
    }
    let lastIndexOfFibonaciArray = fibonacciArray.length - 1;
    let currentFibonacciNumber =
      fibonacciArray[lastIndexOfFibonaciArray] +
      fibonacciArray[lastIndexOfFibonaciArray - 1];
    fibonacciArray.push(currentFibonacciNumber);
  }
  return fibonacciArray;
}

/**
 * Create an array filled by fibonacci sequence using recursive way.
 *
 * @param {number} sequence
 */
function generateFibonacciUsingRecursive(
  sequence,
  currentFibonacciArray = [],
  index = 0,
) {
  if (index == 0 || index == 1) {
    currentFibonacciArray.push(index);
    index++;
    return generateFibonacciUsingRecursive(
      sequence,
      currentFibonacciArray,
      index,
    );
  }
  if (sequence - index <= 0) {
    return currentFibonacciArray;
  } else {
    let lastIndexOfFibonaciArray = currentFibonacciArray.length - 1;
    let currentFibonacciNumber =
      currentFibonacciArray[lastIndexOfFibonaciArray] +
      currentFibonacciArray[lastIndexOfFibonaciArray - 1];
    currentFibonacciArray.push(currentFibonacciNumber);
    index++;
    return generateFibonacciUsingRecursive(
      sequence,
      currentFibonacciArray,
      index,
    );
  }
}

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

    let resultContainer = "";
    for (let fibonacciNumber of result) {
      resultContainer += `<div class="result-item-fibonacci">${fibonacciNumber}</div>`;
    }

    document.getElementById("result").innerHTML = resultContainer;
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
