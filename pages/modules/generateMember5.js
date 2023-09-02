import { Member } from "./Member.js";

function generateMember5() {
  const member = new Member(
    "Bagus Irawan",
    5,
    "Tangerang, Banten",
    "6",
    "https://www.github.com/oombagus",
  );

  member.generateTrElement();
}

export { generateMember5 };
