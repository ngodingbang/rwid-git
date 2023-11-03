import { parseNumber, parseString } from "./parser.js";

export const validateInputNumber = input => {
  let parsedInput = parseNumber(input);
  if (typeof parsedInput != "number") {
    throw TypeError("only numbers are allowed as input");
  }
};
