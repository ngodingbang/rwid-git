import { Member } from "./Member.js";

function generateMember() {
  const member = new Member(
    "Dian Prasetyo",
    1,
    "Boyolali, Jawa Tengah",
    "08",
    "https://github.com/dianprsty",
    "dianprsty",
  );

  member.generateTrElement();
}

export { generateMember };
