import { generateFizzBuzz } from "../js/fizz-buzz.js";

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const sequence = event.target["sequence"].value;

    const fizzBuzzs = generateFizzBuzz(sequence);

    document.getElementById("result").innerHTML = fizzBuzzs
      .map(
        (fizzBuzz, index) =>
          `<div class="result-item-fizzbuzz bg-${
            {
              "fizz buzz": "red",
              fizz: "blue",
              buzz: "green",
            }[fizzBuzz]
          }">${index + 1} ${fizzBuzz}</div>`,
      )
      .join("");
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
