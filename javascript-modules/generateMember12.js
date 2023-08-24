import { Member } from "./Member.js";

function generateMember12() {
  const member = new Member(
    "Habib Al Fitrah",
    12,
    "Makassar, Sulawesi Selatan",
    "07",
    "https://github.com/habibalftrh",
  );

  member.generateTrElement();
}

export { generateMember12 };
