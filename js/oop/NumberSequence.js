import { parseNumber } from "../helper.js";

export class NumberSequence {
  /** @type {number} */
  sequence;

  /**
   * @param {number} sequence
   */
  constructor(sequence) {
    this.sequence = parseNumber(sequence);
  }
}
