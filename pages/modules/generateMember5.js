import { Member } from "./Member.js";

function generateMember() {
  const member = new Member(
    "Bagus Irawan",
    5,
    "Tangerang, Banten",
    "6",
    "https://www.github.com/oombagus",
    "oombagus",
  );

  member.generateTrElement();
}

export { generateMember };
