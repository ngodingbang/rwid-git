/**
 * @param {*} value
 * @returns {number}
 * @throws {RangeError}
 */
export function parseNumber(value) {
  value = Number(value);

  if (isNaN(value) || value < 0) {
    throw new RangeError("n must be a number and bigger or equal than 0.");
  }

  return value;
}

/**
 * @param {*} value
 * @returns {string}
 */
export function parseString(value) {
  return `${value}`;
}
