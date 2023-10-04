/**
 * @param  {...string} names
 */
function generateFullName(...names) {
  let fullname = "";

  for (const name of names) {
    fullname += ` ${name}`;
  }

  return fullname;
}

const generate = generateFullName;

console.info(generateFullName("Septianata", "Rizky"));
console.info(generate("Septianata", "Rizky"));
