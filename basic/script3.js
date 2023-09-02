let age = "27.1umursaya";

if (!isNaN(age)) {
  age = Number(age);

  if (age > 20) {
  } else if (age > 30) {
  } else {
  }

  age += 5;
} else {
  console.error("age is not a number");
}

console.info("Hello! My age is " + age + " yeah!");
console.info(`Hello! My age is ${age} yeah!`);
