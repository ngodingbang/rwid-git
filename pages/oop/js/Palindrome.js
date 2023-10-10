import { parseString } from "../../js/helper.js";

export class Palindrome {
  /**
   * Initializes a new instance of the Palindrome class.
   * @param {string} n 
   */
  constructor(n) {
    this.input = n;
  }

  /**
   * Reverse Approach
   * @param {string} [value = this.input] 
   */
  isPalindrome(value = this.input) {
    const cleanedInput = value.replace(/\s/g, "").toLowerCase();
    
    const reversedInput = cleanedInput.split("").reverse().join("");
    
    return cleanedInput === reversedInput;
  }

  /**
  * Iterative Approach
  * @param {string} [value = this.input]
  */
  isPalindrome2 (value = this.input) {
    console.log (value.length);

    label : for (let index = 0; index < Math.ceil(value.length/2); index++) {
      const firstChar = value [index];
        
      const lastChar = value [value.length - (index + 1)];
        
      if (lastChar !== firstChar) {
        return false;
      } console.log (`iteration ${value} ${index + 1}`);
        continue label; 
      }    

    return true;
  }

  /** 
  * Recursive Approach
  * @param {string} [value = this.input]
  * @param {number} index
  */
  isPalindrome3 (value = this.input, index = 0) { 
    const firstChar = value [index];
    
    const lastChar = value [value.length - (index + 1)]

    if (firstChar !== lastChar) {
      return false;
    } else if (index < Math.ceil (value.length/2)) {
      return this.isPalindrome3 (value, index + 1);
    } console.log (`iteration ${value} ${index + 1}`);  
      return true;
    }

  /**
  * Determine whether the given value is a palindrome or not.
  * @typedef {"reverse" | "loop" | "recursive"} Method
  * @param {Method} method
  */
  evaluate(method) {
    if (method === "reverse") {
      return this.isPalindrome();
    } else if (method === "loop") {
      return this.isPalindrome2();
    } else if (method === "recursive") {
      return this.isPalindrome3();
    } else {
      throw new Error("Method must be reverse, loop, or recursive.");
    }
  }

  /**
   * Return palindrome human-readable description.
   * @param {Method} method
   */
  generateStatus(method) {
    return this.evaluate(method)
      ? "Yes, this word is a palindrome."
      : "No, this word is not a palindrome.";
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const word = event.target["word"].value;
    
    const method = event.target["method"].value;

    const result = new Palindrome(word).generateStatus(method);

    document.getElementById("result").textContent = result;
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
