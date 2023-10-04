import { Member } from "./Member.js";

const member = new Member(
  "Septianata Rizky Pratama",
  12,
  "Sleman, Daerah Istimewa Yogyakarta",
  "00",
  "https://github.com/ianriizky",
  "ianriizky",
  "rwid-git",
);

function generateMember() {
  member.generateTrElement();
}

export { member, generateMember };
