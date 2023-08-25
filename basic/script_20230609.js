console.log("Hello world!");

let result = 1;

const ihda = 30;
const fajarDwi = 20;
const alanTanadi = 29;
const aldelaBagus = 32;
const agungFirdaus = 15;
const akbarRifqi = 27;
const faraTitis = 35;
const juniorDany = 40;

const areRWIDMemberAgeUnder40 =
  ihda < 40 && fajarDwi < 40 && alanTanadi < 40 && aldelaBagus < 40;

const isThereAnyRWIDMemberThatHasAgeUnder30 =
  ihda < 30 || fajarDwi < 30 || alanTanadi < 30 || aldelaBagus < 30;

/**
 * Determine whether all RWID Member's age are under 30 years old.
 *
 * Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
 * pariatur itaque expedita quis consectetur vitae facere soluta,
 * quam dolorum voluptatum, tenetur qui exercitationem porro
 * molestias est repellat nulla eligendi? Modi!
 *
 * @param {number} member1
 * @param {number} member2
 * @param {number} member3
 * @param {number} member4
 * @returns {boolean}
 */
function areRWIDMemberAgeUnder30(member1, member2, member3, member4) {
  return member1 < 30 && member2 < 30 && member3 < 30 && member4 < 30;
}

document.writeln("<pre>");
document.writeln(
  "areRWIDMemberAgeUnder30 (ihda, fajarDwi, alanTanadi, aldelaBagus): " +
    areRWIDMemberAgeUnder30(ihda, fajarDwi, alanTanadi, aldelaBagus)
);
document.writeln(
  "areRWIDMemberAgeUnder30 (agungFirdaus, akbarRifqi, faraTitis, juniorDany): " +
    areRWIDMemberAgeUnder30(agungFirdaus, akbarRifqi, faraTitis, juniorDany)
);
document.writeln("\n");
document.writeln("</pre>");

const choosenPizza = 1;

choosenPizza == "1";
