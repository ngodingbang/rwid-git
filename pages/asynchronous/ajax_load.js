const ajax = new XMLHttpRequest();

ajax.open("GET", "http://rwid-javascript.tests/userss.json");
ajax.addEventListener("load", function () {
  if (ajax.status !== 200) {
    throw new Error(`Failed response`);
  }

  const json = JSON.parse(ajax.responseText);

  console.info(`Response status: ${ajax.status}`);
  console.info(json);
});

ajax.send();
