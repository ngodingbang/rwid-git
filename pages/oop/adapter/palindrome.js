import { Palindrome } from "../js/palindrome.js";

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const word = event.target["word"].value;
    const method = event.target["method"].value;

    const result = new Palindrome(word).generateStatus(method);

    document.getElementById("result").textContent = result;
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
