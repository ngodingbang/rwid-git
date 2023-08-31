import { parseNumber } from "../helper.js";

/**
 * Create an array filled by "fizz", "buzz", or "fizz buzz" based on
 * this requirement below (highest priority from above).
 *
 * Muliples of 4 or 7: "fizz buzz"
 * Odd sequence: "fizz"
 * Even sequence: "buzz"
 *
 * @param {number} sequence
 */
function generateFizzBuzz(sequence) {
  let number = parseNumber(sequence)
  let array = []
  for(let i=1; i<=number; i++){
    if(i%4 === 0 || i%7 === 0){
      array.push("fizz buzz")
    } else if(i%2 === 0){
      array.push("buzz")
    } else{
      array.push("fizz")
    }
  }
  return array
}
console.log(generateFizzBuzz(50))

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const sequence = event.target["sequence"].value;

    const result = generateFizzBuzz(sequence);

    document.getElementById("result").textContent = JSON.stringify(result);
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
