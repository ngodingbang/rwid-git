import { Member } from "./Member.js";

function generateMember() {
  const member = new Member(
    "Abdurrochman Alfian",
    10,
    "DKI Jakarta, Jakarta Selatan",
    "10",
    "https://github.com/Alfian-IDN",
    "Alfian-IDN",
  );

  member.generateTrElement();
}

export { generateMember };
