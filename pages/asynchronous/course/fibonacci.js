/**
 * @param {number} iteration
 * @returns {number}
 */
function fibonacci(iteration) {
  return iteration < 1
    ? 0
    : iteration <= 2
    ? 1
    : fibonacci(iteration - 1) + fibonacci(iteration - 2);
}

module.exports = { fibonacci };
