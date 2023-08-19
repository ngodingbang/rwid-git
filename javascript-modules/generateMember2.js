import { Member } from "./Member.js";

function generateMember2() {
  const member = new Member(
    "Ahmad Ridlo Fadlli Robbi",
    2,
    "Kudus, Jawa Tengah",
    "09",
    "https://github.com/fadlirobbi"
  );

  member.generateTrElement();
}

export { generateMember2 };
