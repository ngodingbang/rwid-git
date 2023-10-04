/**
 * @param {(...names: string) => string} fullnameCallback
 */
const sayHelloUsingCallback = fullnameCallback =>
  `Hello, ${fullnameCallback("Septianata", "Rizky")}`;

console.info(
  sayHelloUsingCallback(
    /**
     * @param  {...string} names
     */
    function (...names) {
      let fullname = "";

      for (const name of names) {
        fullname += ` ${name}`;
      }

      return fullname;
    }
  )
);
