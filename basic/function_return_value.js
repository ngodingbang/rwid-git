/**
 * @param {string} name
 */
function sayHello(name) {
  return `Hello, ${name}!`;
}

const result = sayHello("Ian");

console.info(result);
console.error(result);
console.log(result);
alert(result);

/**
 * Using array as return value.
 *
 * @param {number} age
 */
function getAgeStatusIntoArray(age) {
  if (age < 20) {
    return [true, "young"];
  }

  return [false, "old"];
}

/**
 * Using object as return value.
 *
 * @param {number} age
 */
function getAgeStatusIntoObject(age) {
  if (age < 20) {
    return { isYoung: true, ageStatus: "young" };
  }

  return { isYoung: false, ageStatus: "old" };
}
