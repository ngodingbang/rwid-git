/**
 * @param {string} first // undefined
 * @param {string} middle // undefined
 * @param {string} last // ""
 */
function generateFullName(first, middle, last = "") {
  return `${first} ${middle} ${last}`;
}

// Your fullname is Septianata Rizky
console.info(`Your fullname is ${generateFullName("Septianata", "Rizky")}`);
