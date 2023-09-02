import debug from "debug";
import { createServer } from "http";
import app from "../app.js";
import "../env.js";

/**
 * Normalize a port into a number, string, or false.
 *
 * @param {*} val
 */
function generatePort(value) {
  const port = parseInt(value, 10);

  return isNaN(port) ? value : port >= 0 ? port : false;
}

const port = generatePort(process.env.PORT || "3000");

/**
 * Get port from environment and store in Express.
 */
app.set("port", port);

/**
 * Create HTTP server.
 */
const server = createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on("error", error => {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`;

  /**
   * Handle specific listen errors with friendly messages.
   */
  switch (error.code) {
    case "EACCES":
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);

    case "EADDRINUSE":
      console.error(`${bind} is already in use`);
      process.exit(1);

    default:
      throw error;
  }
});
server.on("listening", () => {
  const address = server.address();
  const bind =
    typeof address === "string" ? `pipe ${address}` : `port ${address.port}`;

  debug("rwid-git:server")(`Listening on ${bind}`);
});
