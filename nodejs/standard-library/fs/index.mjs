import fs from "fs";
import path from "path";

const buffer = fs.readFileSync(path.join(__dirname, "hello-world.txt"));

console.info(buffer.toString());
