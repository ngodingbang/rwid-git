console.log(isFinite(Infinity)); // false
console.log(isFinite(NaN)); // false
console.log(isFinite(-Infinity)); // false

console.log(isFinite(0)); // true
console.log(isFinite(2e64)); // true
console.log(isFinite(910)); // true

// Would've been false with the more robust Number.isFinite():
console.log(isFinite(null)); // true
console.log(isFinite("0")); // true
console.log(Number.isFinite(null)); // false
console.log(Number.isFinite("0")); // false
