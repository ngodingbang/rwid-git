import { config } from "dotenv";
import { expand } from "dotenv-expand";

/**
 * @param {import("dotenv").DotenvConfigOptions} [options]
 */
export function loadEnv(options = undefined) {
  expand(config(options));
}

loadEnv();
