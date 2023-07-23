/**
 * Create an array filled by fibonacci sequence.
 *
 * @param {number} sequence
 * @returns {number}
 */
function generateFibonacci(sequence) {
  // write your code here
  return [];
}

/**
 * @param {Event} event
 */
function submitForm(event) {
  event.preventDefault();

  const sequence = event.target["sequence"].value;
  const result = generateFibonacci(sequence);

  document.getElementById("result").textContent = JSON.stringify(result);
}
