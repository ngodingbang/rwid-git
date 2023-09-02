let person = {
  name: "Ian",
  age: 27,
  0: 1234,
};

const agePropertyName = "age";

const name = person.agePropertyName;
const age = person[agePropertyName];

console.info(`My name is ${name}`);
console.info(`Im ${age} years old`);
