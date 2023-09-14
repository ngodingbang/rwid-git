const person = {
  firstName: "Septianata",
  lastName: "Rizky",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.info(person.fullName);
