import { generatePalindromeStatus } from "../../pages/functional/js/palindrome.js";
import { Palindrome } from "../../pages/oop/js/Palindrome.js";
import { handleArgument } from "./handleArgument.js";

const cliArguments = process.argv.slice(2);
const { type, method, word } = handleArgument(cliArguments);
let result = 0;

if (!["oop", "functional"].includes(type)) {
  throw new Error(`invalid type ${type}. must be "oop" or "functional"`);
}

if (!["loop", "recursive", "reverse"].includes(method)) {
  throw new Error(
    `invalid method ${method}. must be "loop", "recursive" or "reverse"`,
  );
}

if (type == "functional") {
  result = generatePalindromeStatus(word, method);
}

if (type == "oop") {
  const palindrome = new Palindrome(word);
  result = palindrome.generateStatus(method);
}

console.log(`------generate palindrom status using ${method} (${type})------`);
console.log(`is ${word} a palindrome?`);
console.log(result);
