import app from "../app.js";

test("responds to /functional/factorial.html", async () => {
  const res = await app.get("/functional/factorial.html");

  expect(res.header["content-type"]).toBe("text/html; charset=UTF-8");
  expect(res.statusCode).toBe(200);
});
