import { Member } from "./Member.js";

export function generateMember8() {
  const member = new Member(
    "Riky Ridho Pangestu",
    8,
    "Kulon Progo, DIY",
    "02",
    "https://github.com/ridhoriky"
  );

  member.generateTrElement();
}
