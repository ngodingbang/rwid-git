/**
 * @param {number} increment
 */
function generateIncrementFunction(increment) {
  return number => number + increment;
}

const increment5 = generateIncrementFunction(5);
const increment10 = generateIncrementFunction(10);

console.info(increment5(1)); // 6
console.info(increment10(2)); // 12
