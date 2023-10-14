import { Person } from "./Person.js";
import { generateTrElement } from "../generateTrElement.js";

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
  constructor(name, index, username, sim_batch, github_url) {
    super(name);

    this.index = index;
    this.username = username;
    this.sim_batch = sim_batch;
    this.github_url = github_url;
  }
}
