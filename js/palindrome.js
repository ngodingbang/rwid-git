/**
 * Determine whether the given value is a palindrome or not.
 *
 * @param {string} value
 */
function isPalindrome(value) {
  // write your code here
  return true;
}

/**
 * @param {Event} event
 */
function submitForm(event) {
  event.preventDefault();

  const word = event.target["word"].value;
  const result = isPalindrome(word)
    ? "Yes, this word is a palindrome."
    : "No, this word is not a palindrome.";

  document.getElementById("result").textContent = result;
}
