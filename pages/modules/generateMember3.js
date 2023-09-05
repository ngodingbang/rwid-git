import { Member } from "./Member.js";

const generateMember = () => {
  const member = new Member(
    "Muchamad Faiz",
    3,
    "Serang, Banten",
    "01",
    "https://github.com/muchamadfaiz",
    "muchamadfaiz",
  );

  member.generateTrElement();
};

export { generateMember };
