// // using var
var varIndex = 20;

for (var varIndex = 0; varIndex < 10; varIndex++) {
  console.info(`Local var: ${varIndex}`);
}

// Global var: 10
console.info(`Global var: ${varIndex}`);

// using let
let letIndex = 20;

for (let letIndex = 0; letIndex < 10; letIndex++) {
  console.info(`Local let: ${letIndex}`);
}

// Global let: 20
console.info(`Global let: ${letIndex}`);
