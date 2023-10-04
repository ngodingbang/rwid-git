/**
 * Count fibonacci number using loop.
 *
 * @param {number} sequence
 */
function fibonacciUsingLoop(sequence) {
  if (sequence < 1) {
    return 0;
  }

  if (sequence <= 2) {
    return 1;
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
 * Count fibonacci number using recursive function.
 *
 * @param {number} sequence
 */
function fibonacciUsingRecursive(sequence) {
  return sequence < 1
    ? 0
    : sequence <= 2
    ? 1
    : fibonacciUsingRecursive(sequence - 1) +
      fibonacciUsingRecursive(sequence - 2);
}

let fibonaccis = [];

for (let iteration = 0; iteration < 10; iteration++) {
  fibonaccis[iteration] = fibonacciUsingLoop(iteration);
}

console.table(fibonacciU);

// 0, 1, 1, 2, 3, 5, 8, 13, 21,
