console.log(isNaN(NaN)); // true
console.log(isNaN(undefined)); // true
console.log(isNaN({})); // true

console.log(isNaN(true)); // false
console.log(isNaN(null)); // false
console.log(isNaN(37)); // false

// Strings
console.log(isNaN("37")); // false: "37" is converted to the number 37 which is not NaN
console.log(isNaN("37.37")); // false: "37.37" is converted to the number 37.37 which is not NaN
console.log(isNaN("37,5")); // true
console.log(isNaN("123ABC")); // true: Number("123ABC") is NaN
console.log(isNaN("")); // false: the empty string is converted to 0 which is not NaN
console.log(isNaN(" ")); // false: a string with spaces is converted to 0 which is not NaN

// Dates
console.log(isNaN(new Date())); // false; Date objects can be converted to a number (timestamp)
console.log(isNaN(new Date().toString())); // true; the string representation of a Date object cannot be parsed as a number
