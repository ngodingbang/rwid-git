const person = {
  name: "Ian",
  age: 27,
  address: "Yogyakarta",
};

for (const property in person) {
  const value = person[property];

  console.info(`Property: ${property}, value: ${value}`);
}

const members = ["Ian", "Angga", "Eko"];

for (const index in members) {
  const member = members[index];

  console.info(`Index: ${index}, member: ${member}`);
}
