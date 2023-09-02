/**
 * @param {string} message
 */
function showAtConsole(message) {
  return new Promise(function (resolve, reject) {
    if (message === undefined) {
      return reject(`Message is undefined.`);
    }

    setTimeout(
      () => resolve(console.info(`${message}: ${new Date().toISOString()}`)),
      3000
    );
  });
}

showAtConsole("1: Hello World!")
  .then(function () {
    console.info(`2: ${new Date().toISOString()}`);
  })
  .catch(function (error) {
    throw new Error(error);
  })
  .finally(function () {
    console.info("Success.");
  });
