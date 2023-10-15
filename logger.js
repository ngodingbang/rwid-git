import "./env.js";
import morgan from "morgan";
import { createLogger, format, transports } from "winston";
import winstonTelegram from "winston-telegram";

export const winston = createLogger({
  level: "http",
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss.SSS" }),
    format.json(),
  ),
  transports: [
    new transports.Console({}),
    new winstonTelegram({
      token: process.env.TELEGRAM_TOKEN,
      chatId: process.env.TELEGRAM_CHAT_ID,
    }),
  ],
});

export const morganMiddleware = morgan(
  ":method :url :status :res[content-length] - :response-time ms",
  {
    // eslint-disable-next-line no-unused-vars
    skip: (req, res) => process.env.MUTE_LOGGER === "ON",
    stream: {
      write: message => winston.http(message.trim()),
    },
  },
);
