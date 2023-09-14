import { Member } from "./Member.js";

function generateMember() {
  const member = new Member(
    "Ahmad Ridlo Fadlli Robbi",
    2,
    "Kudus, Jawa Tengah",
    "09",
    "https://github.com/fadlirobbi",
    "fadlirobbi",
  );

  member.generateTrElement();
}

export { generateMember };
