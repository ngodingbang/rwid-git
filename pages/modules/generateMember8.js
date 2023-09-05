import { Member } from "./Member.js";

export function generateMember() {
  const member = new Member(
    "Riky Ridho Pangestu",
    8,
    "Kulon Progo, DIY",
    "02",
    "https://github.com/ridhoriky",
    "ridhoriky",
  );

  member.generateTrElement();
}
