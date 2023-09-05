import { Member } from "./Member.js";

function generateMember() {
  const data = new Member(
    "Ady Bagus",
    4,
    "Jakarta Barat",
    "07",
    "https://github.com/itsmeeep",
    "itsmeeep",
  );

  data.generateTrElement();
}

export { generateMember };
