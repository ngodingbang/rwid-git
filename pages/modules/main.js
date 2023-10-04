import * as generateMember from "./generateMember.js";
import { generateMentor } from "./generateMentor.js";

function main() {
  generateMentor();

  for (let index = 1; index <= 12; index++) {
    generateMember[`m${index}`]();
  }
}

main();
