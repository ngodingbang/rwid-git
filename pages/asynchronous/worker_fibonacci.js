const { parentPort, workerData } = require("worker_threads");
const { fibonacci } = require("./fibonacci");

const result = fibonacci(workerData.iterations);

parentPort.postMessage(result);
