function thisFunction(params) {
  console.info(this.performance);
}

thisFunction();

// const person = {
//   name: "Ian",
//   generateAge: function () {
//     const age = 27;

//     // Ian's age: 27
//     console.info(`${this.name}'s age: ${age}`);

//     return "27";
//   },
// };

// person.generateAge();
