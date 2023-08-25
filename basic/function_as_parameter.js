/**
 * @param {...string} names
 */
function generateFullName(...names) {
  let fullname = "";

  for (const name of names) {
    fullname += ` ${name}`;
  }

  return fullname;
}

/**
 * @param {(...names: string) => string} fullnameCallback
 */
function sayHello(fullnameCallback) {
  return `Hello, ${fullnameCallback("Septianata", "Rizky")}`;
}

console.info(sayHello(generateFullName));
