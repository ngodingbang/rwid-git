/**
 * Create an array filled by fibonacci sequence using loop way.
 *
 * @param {number} sequence
 */
function generateFibonacciUsingLoop(sequence) {
  // write your code here
  let fibonacci = [0, 1];

  if (sequence == 1) {
    fibonacci.pop();
    return fibonacci;
  } else if (sequence == 2) {
    return fibonacci;
  }

  for (let index = 2; index < sequence; index++) {
    fibonacci.push(fibonacci[index - 1] + fibonacci[index - 2]);
  }

  return fibonacci;
}

/**
 * Create an array filled by fibonacci sequence using recursive way.
 *
 * @param {number} sequence
 */
function generateFibonacciUsingRecursive(sequence) {
  // write your code here
  let array = [];

  if (sequence == 1) {
    array.push(0);
  } else if (sequence == 2) {
    array.push(0, 1);
  } else {
    array = generateFibonacciUsingRecursive(sequence - 1);

    let len = array.length;
    array.push(array[len - 1] + array[len - 2]);
  }
  return array;
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

    document.getElementById("result").textContent = JSON.stringify(result);
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
