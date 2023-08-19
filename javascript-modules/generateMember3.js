import { Member } from "./Member.js";

const generateMember3 = () => {
  const member3 = new Member(
    "Muchamad Faiz",
    3,
    "Serang, Banten",
    "01",
    "https://github.com/muchamadfaiz"
  );

  member3.generateTrElement();
};

export { generateMember3 };
