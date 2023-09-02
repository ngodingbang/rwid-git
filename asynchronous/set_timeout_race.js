/**
 * @param {string} message
 */
function showAtConsole(message) {
  const now = new Date();

  console.info(`${message}: ${now.toISOString()}`);
}

console.info(`1: ${new Date().toISOString()}`);
setTimeout(showAtConsole, 3000, "2: Hello World!");
console.info(`3: ${new Date().toISOString()}`);
setTimeout(showAtConsole, 6000, "4: Hello World!");
console.info(`5: ${new Date().toISOString()}`);
