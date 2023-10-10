import { parseNumber } from "../../js/helper.js";

/**
* FizzBuzz Loop Approach
* @param {number} sequence
*/
function generateFizzBuzz (sequence) {
    let array = [];
    
    for (let i = 1; i <= sequence; i++) {
        if (i % 4 === 0 || i % 7 === 0) {
          array.push (`fizz buzz ${i}`);
          continue;
        } else if (i % 2 === 1) {
          array.push (`fizz ${i}`)
        } else if (i % 2 === 0) {
          array.push (`buzz ${i}`)
        } 
    }

    return array;
}

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