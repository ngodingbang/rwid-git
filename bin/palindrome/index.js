#!/usr/bin/env node

import readline from "readline";
import { generatePalindromeStatus } from "../../src/functional/palindrome.js";
import { Palindrome } from "../../src/oop/Palindrome.js";
import { validateApproach } from "../../src/utils/validateApproach.js";
import { validateFactorialMethod } from "../../src/utils/validateMethod.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Select the palindrome approach (functional / oop) : ",
  approach => {
    validateApproach(approach);

    rl.question(
      "Select the palindrome method (loop / recursive) : ",
      method => {
        validateFactorialMethod(method);

        rl.question("Input the word : ", word => {
          let result = 0;

          if (approach == "functional") {
            result = generatePalindromeStatus(word, method);
          }

          if (approach == "oop") {
            result = new Palindrome(word).generateStatus(method);
          }

          console.log(
            `------generate palindrom status using ${method} (${approach})------`,
          );
          console.log(`is ${word} a palindrome?`);
          console.log(result);

          rl.close();
        });
      },
    );
  },
);
