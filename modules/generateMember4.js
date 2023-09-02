import { Member } from "./Member.js";

function generateMember4() {
  const data = new Member(
    "Ady Bagus",
    4,
    "Jakarta Barat",
    "07",
    "https://github.com/itsmeeep"
  );

  data.generateTrElement();
}

export { generateMember4 };
