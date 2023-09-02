const { fibonacci } = require("./fibonacci");

/**
 * @param {number} iteration
 * @param {(now: number) => {}} logCallback
 */
function doFibonacci(iteration, logCallback) {
  const start = Date.now();
  const result = fibonacci(iteration);

  if (logCallback !== undefined) {
    logCallback(Date.now());
  } else {
    console.info(`doFibonacci() done in ${Date.now() - start}ms`);
  }

  return result;
}

const start = Date.now();

let values = [];

for (let index = 0; index < 10; index++) {
  values[index] = doFibonacci(40);
}

console.info("values:", values);
console.info(`Done in ${Date.now() - start}ms`);
