import { generateFibonacci } from "../../pages/functional/js/fibonacci.js";
import { Fibonacci } from "../../pages/oop/js/Fibonacci.js";

import { handleArgument } from "./handleArgument.js";

const cliArguments = process.argv.slice(2);
const { type, method, sequence } = handleArgument(cliArguments);
let result = 0;

if (!["oop", "functional"].includes(type)) {
  throw new Error(`invalid type ${type}. must be "oop" or "functional"`);
}

if (!["loop", "recursive"].includes(method)) {
  throw new Error(`invalid method ${method}. must be "loop" or "recursive"`);
}

if (typeof parseInt(sequence) != "number") {
  throw new Error(`invalid number ${sequence}. n should be a number"`);
}

if (type == "functional") {
  result = generateFibonacci(sequence, method);
}

if (type == "oop") {
  const fibonacci = new Fibonacci(sequence);
  result = fibonacci.generate(method);
}

console.log(`------generate fibonacci using ${method} (${type})------`);
console.log(`fibonacci array with ${sequence} sequence :`);
console.log(result);
