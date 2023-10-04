/**
 * Simple version.
 */
function* generateNumbers() {
  yield 0;
  yield 1;
  yield 2;
  yield 3;
}

// for (const number of generateNumbers()) {
//   console.info(`Generated number: ${number}`);
// }

/**
 * @param {number} sequence
 */
function* generateEvenNumbers(sequence) {
  for (let number = 0; number < sequence; number++) {
    console.info(`Current number: ${number}`);

    if (number % 2 === 1) {
      yield number;
    }
  }
}

/**
 *
 * @param {number} sequence
 */
function generateEvenNumbersWithoutGenerator(sequence) {
  let numbers = [];

  for (let number = 0; number < sequence; number++) {
    console.info(`Current number: ${number}`);

    if (number % 2 === 1) {
      numbers.push(number);
    }
  }

  return numbers;
}

const evenNumbers = generateEvenNumbers(100);
// const evenNumbers = generateEvenNumbersWithoutGenerator(100);

// Lazy loading
console.info(`Even number: ${evenNumbers.next().value}`);
console.info(`Even number: ${evenNumbers.next().value}`);
console.info(`Even number: ${evenNumbers.next().value}`);

// Eager loading
// console.info(`Even number: ${evenNumbers[0]}`);
// console.info(`Even number: ${evenNumbers[1]}`);
// console.info(`Even number: ${evenNumbers[2]}`);
