import "./env.js";
import { errorHandler, notFoundErrorHandler } from "./error-handler.js";
import { middleware } from "./middleware.js";
import { router } from "./routes.js";
import { view } from "./view.js";
import express from "express";

const app = express();

view(app);
middleware(app);

app.use(router);

app.use(notFoundErrorHandler);
app.use(errorHandler);

export default app;
