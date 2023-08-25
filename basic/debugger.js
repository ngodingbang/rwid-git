/**
 * @param {...number} numbers
 */
function sum(...numbers) {
  debugger;
  let result = 0;

  for (const number of numbers) {
    result += number;
  }

  return result;
}

document.writeln(sum(1, 2, 3));
