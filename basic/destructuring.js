const person = {
  name: "Ian",
  address: "Yogyakarta",
};

const { name, address, age = 27 } = person;

console.info(name);
console.info(address);
console.info(age);
