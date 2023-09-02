function showAtConsole(message) {
  console.info(message);
}

/**
 * @param {string} first
 * @param {string} middle
 * @param {string} last
 * @param {(message) => void} callback
 */
function generateFullName(first, middle, last, callback) {
  const fullname = `${first} ${middle} ${last}`;

  if (callback !== undefined) {
    callback(fullname);
  }
}

generateFullName("Ian", "Rizky", "Gunawan", showAtConsole);
