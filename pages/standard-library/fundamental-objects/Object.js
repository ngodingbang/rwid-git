const x = { name: "Ian", age: 27 };
const y = { address: "Yogyakarta" };

const z = Object.assign(x, y);

const a = { ...x, ...z };

console.log(z);
console.log(a);
console.log(a === z);
