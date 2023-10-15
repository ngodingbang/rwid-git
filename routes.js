import "./env.js";
import express from "express";

const router = express.Router();

router.get(
  "/favicon.ico",
  /**
   * Favicon routes.
   */
  async (req, res) => {
    const favicon = await fetch(process.env.FAVICON_URL);

    if (favicon.status !== 200) {
      throw new ReferenceError("Favicon loading failed.");
    }

    const blob = await favicon.blob();

    return res.type(blob.type).send(Buffer.from(await blob.arrayBuffer()));
  },
);

/**
 * Static pages routes.
 *
 * @see https://expressjs.com/en/starter/static-files.html
 */
router.use(express.static("pages"));
router.use("/src", express.static("src"));

export { router };
