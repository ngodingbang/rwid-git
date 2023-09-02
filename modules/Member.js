import { Person } from "./Person.js";
import { generateTrElement } from "./generateTrElement.js";

export class Member extends Person {
  /** @type {number} */
  index;

  /** @type {string} */
  address;

  /** @type {string} */
  sim_batch;

  /** @type {string} */
  github_url;

  /**
   * @param {string} name
   * @param {number} index
   * @param {string} address
   * @param {string} sim_batch
   * @param {string} github_url
   */
  constructor(name, index, address, sim_batch, github_url) {
    super(name);

    this.index = index;
    this.address = address;
    this.sim_batch = sim_batch;
    this.github_url = github_url;
  }

  /**
   * @param {string} prefixTarget
   */
  generateTrElement(tbodyTarget = "member-tbody") {
    generateTrElement(
      {
        index: this.index,
        name: this.name,
        address: this.address,
        sim_batch: this.sim_batch,
        github_url: this.github_url,
      },
      tbodyTarget
    );
  }
}
