import { parseString } from "../helper.js";

/**
 * Determine whether the given value is a palindrome or not using reverse way.
 *
 * @param {string} value
 */
function isPalindromeUsingReverse(value) {
  // write your code here
  if(value === value.split("").reverse().join("")){
    return true
  } else{
    return false
  }
}
const word = "katak"
console.log(`Is ${word} palindrom with reverse method? : ${isPalindromeUsingReverse(word)}`)

/**
 * Determine whether the given value is a palindrome or not using loop way.
 *
 * @param {string} value
 */
function isPalindromeUsingLoop(value) {
  // write your code here
  let test = 1
  for(let i=0; i<value.length; i++){
    if(value[i] === value[((value.length-1) - i)]){
      test = test * 1
    } else {
      test = test * 0
    }
  }
  if(test === 1){
    return true
  } else{
    return false
  }
}
console.log(`Is ${word} palindrom with loop method? : ${isPalindromeUsingLoop(word)}`)

/**
 * Determine whether the given value is a palindrome or not using recursive way.
 *
 * @param {string} value
 * @param {number} index
 */
function isPalindromeUsingRecursive(value, index = 0) {
  // write your code here
  if(index > value.length){
    return value[0] === value[(value.length - 1)]? 1: 0;
  } else{
    let next = isPalindromeUsingRecursive(value, index + 1)
    let test = (value[index] === value[((value.length-1)-index)]? 1:0) * next
    return test === 0? false: true;
  }
}
console.log(`Is ${word} palindrom with recursive method? : ${isPalindromeUsingRecursive(word)}`)

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const word = event.target["word"].value;
    const method = event.target["method"].value;

    let isPalindrome;

    if (method === "reverse") {
      isPalindrome = isPalindromeUsingReverse(word);
    } else if (method === "loop") {
      isPalindrome = isPalindromeUsingLoop(word);
    } else if (method === "recursive") {
      isPalindrome = isPalindromeUsingRecursive(word);
    } else {
      throw new Error("Method must be reverse, loop, or recursive.");
    }

    const result = isPalindrome
      ? "Yes, this word is a palindrome."
      : "No, this word is not a palindrome.";

    document.getElementById("result").textContent = result;
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
