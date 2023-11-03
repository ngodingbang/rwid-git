#!/usr/bin/env node

import readline from "readline";
import { generateFibonacci } from "../../src/functional/fibonacci.js";
import { Fibonacci } from "../../src/oop/Fibonacci.js";
import { validateApproach } from "../../src/utils/validateApproach.js";
import { validateFibonacciMethod } from "../../src/utils/validateMethod.js";
import { validateInputNumber } from "../../src/utils/validateInput.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Select the fibonacci approach (functional / oop) : ", approach => {
  validateApproach(approach);

  rl.question("Select the fibonacci method (loop / recursive) : ", method => {
    validateFibonacciMethod(method);

    rl.question("Input the sequence : ", sequence => {
      validateInputNumber(sequence);

      let result = [];

      if (approach == "functional") {
        result = generateFibonacci(sequence, method);
      }

      if (approach == "oop") {
        result = new Fibonacci(sequence).generate(method);
      }

      console.log(
        `------generate fibonacci using ${method} (${approach})------`,
      );
      console.log(`fibonacci array with ${sequence} sequence : `);
      console.log(result);

      rl.close();
    });
  });
});
