import { countFactorial } from "../../pages/functional/js/factorial.js";

import { Factorial } from "../../pages/oop/js/Factorial.js";

import { handleArgument } from "./handleArgument.js";

const cliArguments = process.argv.slice(2);
const { type, method, n } = handleArgument(cliArguments);
let result = 0;

if (!["oop", "functional"].includes(type)) {
  throw new Error(`invalid type ${type}. must be "oop" or "functional"`);
}

if (!["loop", "recursive"].includes(method)) {
  throw new Error(`invalid method ${method}. must be "loop" or "recursive"`);
}

if (typeof parseInt(n) != "number") {
  throw new Error(`invalid number ${n}. n should be a number"`);
}

if (type == "functional") {
  result = countFactorial(n, method);
}

if (type == "oop") {
  const factorial = new Factorial(n);
  result = factorial.count(method);
}

console.log(`------count factorial using ${method} (${type})------`);
console.log(`factorial of ${n} is ${result}`);
