import { generateFizzBuzz } from "../../pages/functional/js/fizz-buzz.js";
import { FizzBuzz } from "../../pages/oop/js/FizzBuzz.js";
import { handleArgument } from "./handleArgument.js";

const cliArguments = process.argv.slice(2);
const { type, sequence } = handleArgument(cliArguments);
let result = 0;

if (!["oop", "functional"].includes(type)) {
  throw new Error(`invalid type ${type}. must be "oop" or "functional"`);
}

if (typeof parseInt(sequence) != "number") {
  throw new Error(`invalid number ${sequence}. n should be a number"`);
}

if (type == "functional") {
  result = generateFizzBuzz(sequence);
}

if (type == "oop") {
  const fizzbuzz = new FizzBuzz(sequence);
  result = fizzbuzz.generate();
}

console.log(`------generate fizzbuzz (${type})------`);
console.log(`fizzbuzz array with ${sequence} sequence :`);
console.log(result);
