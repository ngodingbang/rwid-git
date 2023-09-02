function showFullnameAtConsole({ firstName, middleName = "Rizky", lastName }) {
  console.info(firstName);
  console.info(middleName);
  console.info(lastName);
}

showFullnameAtConsole({
  firstName: "Septianata",
  lastName: "Pratama",
});
