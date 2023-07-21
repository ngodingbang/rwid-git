/**
 * @param {number} n
 */
function countFactorial(n) {
  let result = 1;

  for (let index = n; index > 0; index--) {
    result = result * index;
  }

  return result;
}
