function sleep(timeout) {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

class Person {
  name;
  age;

  constructor(name, age) {
    if (name === undefined || age === undefined) {
      throw new Error(`Name or age are undefined.`);
    }

    this.name = name;
    this.age = age;
  }

  /**
   * @returns {string}
   */
  getNameAndAge() {
    return `Name: ${this.name}, Age: ${this.age}.`;
  }

  /**
   * @returns {Promise<string>}
   */
  async getNameAndAgeInAsync() {
    return this.getNameAndAge();
  }

  async showNameAndAgeAtConsole() {
    const nameAndAge = await this.getNameAndAgeInAsync();

    console.info(new Date().toISOString());
    console.info(nameAndAge);

    await sleep(3000);
  }
}

async function main() {
  try {
    const person = new Person();

    await person.showNameAndAgeAtConsole();
    await person.showNameAndAgeAtConsole();
    await person.showNameAndAgeAtConsole();
  } catch (error) {
    console.error(error);
  }
}

main();
