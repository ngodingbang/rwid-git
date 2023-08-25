// without ternary
const age = 27;
let ageStatus;

if (age < 20) {
  ageStatus = "Still young";
} else {
  ageStatus = "Already old";
}

// using ternary
ageStatus = age < 20 ? "Still young" : "Already old";
