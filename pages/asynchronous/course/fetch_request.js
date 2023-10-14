const response = fetch(
  new Request("http://rwid-javascript.test/users.json", {
    method: "GET",
  })
);

response
  .then(function (value) {
    return value.text();
  })
  .then(function (text) {
    console.info(text);
  });
