/**
 * Determine whether the given string is contains specific character.
 *
 * @param {string} array
 * @param {string} search
 */
function isContainsChar(string, search) {
  for (const character of string) {
    if (character === search) {
      console.info(`Character 1 ${character}`);

      return true;
    }

    console.info(`Character 2 ${character}`);
  }

  return false;
}

console.info(isContainsChar("Ian", "f"));
