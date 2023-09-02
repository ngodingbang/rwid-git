let x; // create a variable but assign it no value

console.log(`x's value is ${x}`); // logs "x's value is undefined"

function y(z) {
  console.log(`z's value is ${x}`); // logs "z's value is undefined"
}

y();
