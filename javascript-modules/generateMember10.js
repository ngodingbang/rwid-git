import { Member } from "./Member.js";

function generateMember10() {
  const member = new Member(
    "Abdurrochman Alfian",
    10,
    "DKI Jakarta, Jakarta Selatan",
    "10",
    "https://github.com/Alfian-IDN"
  );

  member.generateTrElement();
}

export { generateMember10 };
