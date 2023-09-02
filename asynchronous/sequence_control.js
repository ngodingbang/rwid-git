function showAtConsole(message) {
  console.info(message);
}

/**
 * @param {string} first
 * @param {string} middle
 * @param {string} last
 */
function generateFullName(first, middle, last) {
  const fullname = `${first} ${middle} ${last}`;

  showAtConsole(fullname);
}

generateFullName("Ian", "Rizky", "Gunawan");
