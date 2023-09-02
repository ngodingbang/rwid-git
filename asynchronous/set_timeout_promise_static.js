/**
 * @param {string} message
 */
function showAtConsole(message) {
  return new Promise(function (resolve, reject) {
    if (message === undefined) {
      return reject(`Message is undefined.`);
    }

    // random number from 1-3000
    const timeout = Math.floor(Math.random() * 3000 + 1);
    const newMessage = `${message}: ${new Date().toISOString()} (${timeout} ms)`;

    setTimeout(() => resolve(console.info(newMessage)), timeout);
  });
}

Promise.any([
  showAtConsole("1: Hello World!"),
  showAtConsole("2: Hello World!"),
  showAtConsole("3: Hello World!"),
  showAtConsole(),
  showAtConsole("5: Hello World!"),
  showAtConsole("6: Hello World!"),
  showAtConsole("7: Hello World!"),
]).catch(function (error) {
  throw new Error(error);
});
