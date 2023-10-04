const string1 = "A string primitive";
const string2 = "Also a string primitive";
const string3 = `Yet another string primitive`;
const string4 = new String("A String object");

const strPrim = "foo"; // A literal is a string primitive
const strPrim2 = String(1); // Coerced into the string primitive "1"
const strPrim3 = String(true); // Coerced into the string primitive "true"
const strObj = new String(strPrim); // String with new returns a string wrapper object.

console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
console.log(typeof strObj); // "object"

const fullName = "Septianata Rizky";

console.log(fullName.length); // 16
console.log(fullName.toLowerCase()); // septianata rizky
console.log(fullName.toUpperCase()); // SEPTIANATA RIZKY
console.log(fullName.split(" ")); // [ 'Septianata', 'Rizky' ]
