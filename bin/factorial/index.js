#!/usr/bin/env node

import readline from "readline";
import { countFactorial } from "../../src/functional/factorial.js";
import { Factorial } from "../../src/oop/Factorial.js";
import { validateApproach } from "../../src/utils/validateApproach.js";
import { validateFactorialMethod } from "../../src/utils/validateMethod.js";
import { validateInputNumber } from "../../src/utils/validateInput.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Select the factorial approach (functional / oop) : ", approach => {
  validateApproach(approach);

  rl.question("Select the factorial method (loop / recursive) : ", method => {
    validateFactorialMethod(method);

    rl.question("Input the number : ", number => {
      validateInputNumber(number);

      let result = 0;

      if (approach == "functional") {
        result = countFactorial(number, method);
      }

      if (approach == "oop") {
        result = new Factorial(number).count(method);
      }

      console.log(`------count factorial using ${method} (${approach})------`);
      console.log(`factorial of ${number} is ${result}`);

      rl.close();
    });
  });
});
