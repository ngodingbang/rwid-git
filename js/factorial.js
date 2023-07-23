/**
 * Count factorial number from the given "n" value.
 *
 * @param {number} n
 */
function countFactorial(n) {
  // write your code here
  return n;
}

/**
 * @param {Event} event
 */
function submitForm(event) {
  event.preventDefault();

  const n = event.target["n"].value;
  const result = countFactorial(n);

  document.getElementById("result").textContent = result;
}
