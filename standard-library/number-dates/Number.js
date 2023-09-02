console.log(Number("123")); // returns the number 123
console.log(Number("123") === 123); // true

console.log(Number("unicorn")); // NaN
console.log(Number(undefined)); // NaN

const biggestNum = Number.MAX_VALUE;
const smallestNum = Number.MIN_VALUE;
const infiniteNum = Number.POSITIVE_INFINITY;
const negInfiniteNum = Number.NEGATIVE_INFINITY;
const notANum = Number.NaN;

console.log(Number.isFinite(null)); // false
console.log(Number.isNaN("0")); // false

const value = Number("2023");

console.log(value.toLocaleString("id-ID")); // 2.023
console.log(value.toString(2)); // 11111100111
