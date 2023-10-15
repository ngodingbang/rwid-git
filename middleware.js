import { morganMiddleware } from "./logger.js";
import cookieParser from "cookie-parser";
import express from "express";

/**
 * @param {import("express").Express} app
 */
export function middleware(app) {
  /** Logger middleware */
  app.use(morganMiddleware);

  /**
   * Application-level middleware.
   *
   * @see https://expressjs.com/en/guide/using-middleware.html#middleware.application
   */
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
}
