import { Member } from "./Member.js";

const member = new Member(
  "Dian Prasetyo",
  1,
  "Boyolali, Jawa Tengah",
  "08",
  "https://github.com/dianprsty",
  "dianprsty",
  "rwid-git",
);

function generateMember() {
  member.generateTrElement();
}

export { member, generateMember };
