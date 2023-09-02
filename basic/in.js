const object = {
  name: "Ian",
  age: 27,
  address: undefined,
};

// Object with property age is exists.
console.info(
  `Object with property age is ${"age" in object ? "exists" : "not exists"}.`
);
// Object with property address is exists.
console.info(
  `Object with property address is ${
    "address" in object ? "exists" : "not exists"
  }.`
);
