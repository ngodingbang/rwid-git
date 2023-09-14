/**
 * @param {...number} numbers
 */
function average(...numbers) {
  let total = 0;
  let count = 0;

  for (const number of numbers) {
    total += number;
    count++;
  }

  return total / count;
}

const numbers = [1, 2, 3];

console.info(average(...numbers));
