import { Member } from "./Member.js";

function generateMember() {
  const member = new Member(
    "Bambang Rewanggi",
    11,
    "Pekanbaru, Riau",
    "08",
    "https://github.com/Rewanggi",
    "Rewanggi",
  );

  member.generateTrElement();
}

export { generateMember };
