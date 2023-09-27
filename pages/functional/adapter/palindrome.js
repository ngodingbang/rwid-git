import { generatePalindromeStatus } from "../js/palindrome.js";

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const word = event.target["word"].value;
    const method = event.target["method"].value;

    const result = generatePalindromeStatus(word, method);

    document.getElementById("result").textContent = result;
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
