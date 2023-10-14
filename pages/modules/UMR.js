import { Region } from "./region.js";
import { generateTrElement } from "./generateTrElement.js";

export class Umr extends Region {
  /** @type {number} */
  index;

  /** @type {string} */
  country;

  /** @type {string} */
  basic_salary;

  /** @type {string} */
  web_source;

  /**
   * @param {number} index
   * @param {string} region 
   * @param {string} country 
   * @param {string} basic_salary 
   * @param {string} web_source 
   */
  constructor (index, region, country, basic_salary, web_source) {
      super (region);

      this.index = index;
      this.country = country;
      this.basic_salary = basic_salary;
      this.web_source = web_source;
  }

  
  generateTrElement (tbodyTarget = "member-tbody") { //Different method with a same name
      generateTrElement ( //Input Data From Class
        {
          index: this.index,
          region: this.region,
          country: this.country,
          basic_salary: this.basic_salary,
          web_source: this.web_source,
        },
        tbodyTarget
      );
    }
}