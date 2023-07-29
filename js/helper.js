/**
 * @param {*} value
 * @returns {number}
 */
export function parseNumber(value) {
  value = Number(value);

  if (isNaN(value) || value < 0) {
    throw new Error("n must be a number and bigger or equal than 0.");
  }

  return value;
}

/**
 * @param {*} value
 * @returns {string}
 */
export function parseString(value) {
  return `${value}`;
}

/**
 * Load javascript file using DOM in asynchronous way.
 *
 * @param {{ [key: string]: string }} attributes
 */
export async function loadJavaScript(attributes) {
  return new Promise(function (resolve, reject) {
    try {
      const script = document.createElement("script");

      for (const key in attributes) {
        script.setAttribute(key, attributes[key]);
      }

      document.body.appendChild(script);

      script.addEventListener("load", function () {
        return resolve(true);
      });

      script.addEventListener("error", function (error) {
        return reject(error);
      });
    } catch (error) {
      return reject(error);
    }
  });
}
