/**
 * @param {"log" | "info" | "warn" | "error" | "table"} consoleType
 * @param {string} message
 */
function sayAtConsole(consoleType, message) {
  switch (consoleType) {
    case "log":
      console.log(message);
      break;

    case "info":
      console.info(message);
      break;

    case "warn":
      console.warn(message);
      break;

    case "error":
      console.error(message);
      break;

    case "table":
      console.table(message);
      break;

    default:
      break;
  }
}

sayAtConsole("table", "Hello Ian!");
