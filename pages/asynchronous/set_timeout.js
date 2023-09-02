/**
 * @param {string} message
 * @param {Date} startDate
 */
function showAtConsole(message, startDate) {
  const now = new Date();

  console.info(now.toISOString());
  console.info(message);
  console.info(`Duration (in ms): ${now - startDate}`);
}

console.info(new Date().toISOString());
setTimeout(showAtConsole, 3000, "Hello World!", new Date());
