import nodemon from "nodemon";
import "../env.js";

nodemon({ script: "./bin/www", ext: "js" })
  .on("start", () => console.info(`Nodemon started at ${process.env.APP_URL}.`))
  .on("quit", () => console.info("Killing nodemon."));
