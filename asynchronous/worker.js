const { Worker } = require("worker_threads");
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

/**
 * @param {number} iteration
 */
async function doFibonacciWithPromise(iteration) {
  return new Promise(resolve => {
    const start = Date.now();

    return resolve(
      doFibonacci(iteration, now =>
        console.info(`doFibonacciWithPromise() done in ${now - start}ms`)
      )
    );
  });
}

async function doFibonacciWithWorker(iterations) {
  return new Promise((resolve, reject) => {
    const start = Date.now();

    const worker = new Worker("./async/worker_fibonacci.js", {
      workerData: { iterations },
    });

    worker.once("message", data => {
      console.info(
        `doFibonacciWithWorker() [${worker.threadId}]: done in ${
          Date.now() - start
        }ms`
      );

      return resolve(data);
    });

    worker.once("error", error => reject(error));
  });
}

async function main() {
  const start = Date.now();

  const values = await Promise.all([
    doFibonacciWithWorker(40),
    doFibonacciWithWorker(40),
    doFibonacciWithWorker(40),
    doFibonacciWithWorker(40),
    doFibonacciWithWorker(40),
    doFibonacciWithWorker(40),
    doFibonacciWithWorker(40),
    doFibonacciWithWorker(40),
    doFibonacciWithWorker(40),
    doFibonacciWithWorker(40),
  ]);

  console.info("values:", values);
  console.info(`Done in ${Date.now() - start}ms`);
}

main();
