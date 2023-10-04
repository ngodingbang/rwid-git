export class Person {
  /** @type {string} */
  name;

  /**
   * @param {Person["name"]} name
   */
  constructor(name) {
    this.name = name;
  }
}
