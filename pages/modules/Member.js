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

  /** @type {string | undefined} */
  github_owner;

  /** @type {string | undefined} */
  github_repo;

  /**
   * @param {Member["name"]} name
   * @param {Member["index"]} index
   * @param {Member["address"]} address
   * @param {Member["sim_batch"]} sim_batch
   * @param {Member["github_url"]} github_url
   * @param {Member["github_owner"]} github_owner
   * @param {Member["github_repo"]} github_repo
   */
  constructor(
    name,
    index,
    address,
    sim_batch,
    github_url,
    github_owner,
    github_repo,
  ) {
    super(name);

    this.index = index;
    this.address = address;
    this.sim_batch = sim_batch;
    this.github_url = github_url;
    this.github_owner = github_owner;
    this.github_repo = github_repo;
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
      tbodyTarget,
    );
  }
}
