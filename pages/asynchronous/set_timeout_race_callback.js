/**
 * @param {string} message
 * @param {function} callback
 */
function showAtConsole(message, callback) {
  const now = new Date();

  console.info(`${message}: ${now.toISOString()}`);

  if (callback !== undefined) {
    callback();
  }
}

console.info(`1: ${new Date().toISOString()}`);
setTimeout(showAtConsole, 3000, "2: Hello World!", function () {
  console.info(`3: ${new Date().toISOString()}`);
  setTimeout(showAtConsole, 6000, "4: Hello World!", function () {
    console.info(`5: ${new Date().toISOString()}`);
    setTimeout(showAtConsole, 9000, "6: Hello World!", function () {
      console.info(`7: ${new Date().toISOString()}`);
      setTimeout(showAtConsole, 12000, "8: Hello World!", function () {
        console.info(`9: ${new Date().toISOString()}`);
      });
    });
  });
});
