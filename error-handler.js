import createError from "http-errors";

/**
 * @param {Error} err
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 *
 * @see https://expressjs.com/en/guide/error-handling.html
 */
export function errorHandler(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  return res.status(err.status || 500).render("error");
}

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
export function notFoundErrorHandler(req, res, next) {
  return next(createError(404));
}
