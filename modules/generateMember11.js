import { Member } from "./Member.js";

function generateMember11() {
  const member = new Member(
    "Bambang Rewanggi",
    11,
    "Pekanbaru, Riau",
    "08",
    "https://github.com/Rewanggi"
  );

  member.generateTrElement();
}

export { generateMember11 };
