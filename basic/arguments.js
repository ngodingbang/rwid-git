function average() {
  let total = 0;
  let count = 0;

  const numbers = arguments;

  for (const number of numbers) {
    total += number;
    count++;
  }

  return total / count;
}

console.info(average(1, 2, 3));
