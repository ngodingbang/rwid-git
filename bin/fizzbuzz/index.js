#!/usr/bin/env node

import readline from "readline";
import { FizzBuzz } from "../../src/oop/FizzBuzz.js";
import { generateFizzBuzz } from "../../src/functional/fizz-buzz.js";
import { validateApproach } from "../../src/utils/validateApproach.js";
import { validateInputNumber } from "../../src/utils/validateInput.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Select the fizz-buzz approach (functional / oop) : ", approach => {
  validateApproach(approach);

  rl.question("Input the sequence : ", sequence => {
    validateInputNumber(sequence);

    let result = 0;

    if (approach == "functional") {
      result = generateFizzBuzz(sequence);
    }

    if (approach == "oop") {
      result = new FizzBuzz(sequence).generate();
    }

    console.log(`------generate fizzbuzz (${approach})------`);
    console.log(`fizzbuzz array with ${sequence} sequence : `);
    console.log(result);

    rl.close();
  });
});
