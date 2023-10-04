import cookieParser from "cookie-parser";
import express from "express";
import createError from "http-errors";
import logger from "morgan";
import nunjucks from "nunjucks";
import "./env.js";

const app = express();

/**
 * View engine setup.
 */
nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.use(
  logger("dev", {
    // eslint-disable-next-line no-unused-vars
    skip: (req, res) => process.env.MUTE_LOGGER === "ON",
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/**
 * Favicon.
 */
app.get("/favicon.ico", async (req, res) => {
  const favicon = await fetch(process.env.FAVICON_URL);

  if (favicon.status !== 200) {
    throw new Error("Favicon loading failed.");
  }

  const blob = await favicon.blob();

  return res.type(blob.type).send(Buffer.from(await blob.arrayBuffer()));
});

/**
 * Static pages.
 */
app.use(express.static("pages"));

app.use(
  /**
   * Catch 404 and forward to error handler.
   */
  (req, res, next) => next(createError(404)),
);

app.use(
  /**
   * Error handler.
   *
   * @param {Error} err
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  (err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    res.status(err.status || 500);
    res.render("error");
  },
);

export default app;
