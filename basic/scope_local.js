function addNumberToCount(number) {
  let count = 0;

  count += number;

  return count;
}

addNumberToCount(1);
addNumberToCount(2);

// ReferenceError: count is not defined
console.info(count);
