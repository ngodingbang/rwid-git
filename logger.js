import "./env.js";
import morgan from "morgan";

export const morganMiddleware = morgan(
  ":method :url :status :res[content-length] - :response-time ms",
  {
    // eslint-disable-next-line no-unused-vars
    skip: (req, res) => process.env.MUTE_LOGGER === "ON",
  },
);
