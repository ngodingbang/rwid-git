import { countFactorial } from "../../../src/index.js";

test("countFactorial with 5 using loop", () => {
  expect(countFactorial(5, "loop")).toBe(120);
});
