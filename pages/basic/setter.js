const person = {
  firstName: "Septianata",
  lastName: "Rizky",
  /**
   * @param {string} name
   */
  set fullName(name) {
    const splittedName = name.split(" ");

    this.firstName = splittedName[0];
    this.lastName = splittedName[1];
  },
};

person.fullName = "Septianata Rizky";

console.info(person.firstName);
console.info(person.lastName);
