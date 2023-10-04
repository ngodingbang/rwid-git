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
export function generateFizzBuzz(sequence) {
  sequence = parseNumber(sequence);

  let result = [];

  for (let index = 1; index <= sequence; index++) {
    if (index % 4 === 0 || index % 7 === 0) {
      result.push("fizz buzz");
    } else if (index % 2 === 1) {
      result.push("fizz");
    } else if (index % 2 === 0) {
      result.push("buzz");
    }
  }

  return result;
}
