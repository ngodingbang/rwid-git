import nunjucks from "nunjucks";

/**
 * View engine setup.
 *
 * @param {object} express
 * @param {string} path
 */
export function view(express, path = "views") {
  return nunjucks.configure(path, {
    autoescape: true,
    express,
  });
}
