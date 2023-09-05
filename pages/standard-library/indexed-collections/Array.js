const fruits = ["Apple", "Banana"];

console.log(fruits.length); // 2
console.log(fruits[0]); // "Apple"

const arrayEmpty = new Array(2);

console.log(arrayEmpty.length); // 2
console.log(arrayEmpty[0]); // undefined; actually, it is an empty slot
console.log(0 in arrayEmpty); // false
console.log(1 in arrayEmpty); // false

const members = ["Ian", "Yusri", "Sigit"];

// 0: Ian
// 1: Yusri
// 2: Sigit
for (const index in members) {
  const member = members[index];

  console.log(`${index}: ${member}`);
}

// Ian
// Yusri
// Sigit
for (const member of members) {
  console.log(member);
}

// 0: Ian
// 1: Yusri
// 2: Sigit
members.forEach(function (member, index) {
  console.log(`${index}: ${member}`);
});

const array1 = [1, 2, 3];
const firstElement = array1.shift();

console.log(array1); // [2, 3]
console.log(firstElement); // 1

const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

console.log(plants.pop()); // "tomato"
console.log(plants); // ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();
console.log(plants); // ["broccoli", "cauliflower", "cabbage"]
