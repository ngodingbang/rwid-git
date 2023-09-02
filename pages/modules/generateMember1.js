import { Member } from "./Member.js";

function generateMember1() {
  const member = new Member(
    "Dian Prasetyo",
    1,
    "Boyolali, Jawa Tengah",
    "08",
    "https://github.com/dianprsty"
  );

  member.generateTrElement();
}

export { generateMember1 };
