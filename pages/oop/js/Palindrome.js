import { parseString } from "../../js/helper.js";

/**
 * Palindrome class to check if a given string is a palindrome.
 */
class Palindrome {
  /**
   * Initializes a new instance of the Palindrome class.
   * @param {string} n 
   */
  constructor(n) {
    this.input = n;
  }

  /**
   * Checks if the provided string (or the one set during class instantiation) is a palindrome.
   * @param {string} [i=this.input] 
   * @returns {boolean} 
   */
  isPalindrome(i = this.input) {
    const cleanedInput = i.replace(/\s/g, "").toLowerCase();
    const reversedInput = cleanedInput.split("").reverse().join("");
    return cleanedInput === reversedInput;
  }

  /**
   * Displays in the console whether the provided string (or the one set during class instantiation) is a palindrome.
   * @param {string} [i=this.input] 
   */
  showAtConsole(i = this.input) {
    console.info(`Is "${i}" a Palindrome : ${this.isPalindrome()}`);
  }
}

const Palindrome1 = new Palindrome("Race Car");
Palindrome1.showAtConsole();
