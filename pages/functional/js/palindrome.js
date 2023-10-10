import { parseString } from "../../js/helper.js";

/**
 * Reverse Method Approach
 * @param {string} value
 */
function isPalindrome(value) {
  let array = [];

  for (const spread of value) {
    array.push(spread);
  }

  let reverseArray = [];

  for (i = 1; i <= array.length; i++) {
    reverseArray.push(array[array.length - i]);
  }

  return JSON.stringify(array) === JSON.stringify(reverseArray);
}

/**
 * Iterative Approach
 * @param {string} value
 */
function isPalindrome2(value) {
  console.log(value.length);

  label: for (let index = 0; index < Math.ceil(value.length / 2); index++) {
    const firstChar = value[index];

    const lastChar = value[value.length - (index + 1)];

    if (lastChar !== firstChar) {
      return false;
    }

    console.log(`iteration ${value} ${index + 1}`);

    continue label;
  }

  return true;
}

/**
 * Function Generator Approach
 * @param {string} value
 */
function isPalindrome3(value) {
  function* fGen() {
    for (const spread of value) {
      yield spread;
    }
  }

  function* fgen2() {
    for (i = 1; i <= array.length; i++) {
      yield fGen[fGen.length - i];
    }
  }

  return JSON.stringify(fGen) === JSON.stringify(fgen2);
}

/**
 * Recursive Approach
 * @param {string} value
 * @param {number} index
 */
function isPalindrome4(value, index = 0) {
  const firstChar = value[index];

  const lastChar = value[value.length - (index + 1)];

  if (firstChar !== lastChar) {
    return false;
  } else if (index < Math.ceil(value.length / 2)) {
    return isPalindrome4(value, index + 1);
  }

  console.log(`iteration ${value} ${index + 1}`);

  return true;
}

/**
 * @param {string} word
 * @param {"reverse" | "loop" | "recursive"} method
 * @throws {Error}
 */
function generatePalindromeStatus(word, method) {
  let isPalindrome;

  if (method === "reverse") {
    isPalindrome = isPalindrome(word);
  } else if (method === "loop") {
    isPalindrome = isPalindrome2(word);
  } else if (method === "recursive") {
    isPalindrome = isPalindrome4(word);
  } else if (method === "generative") {
    isPalindrome = isPalindrome3(word);
  } else {
    throw new Error("Method must be reverse, loop, or recursive.");
  }

  return isPalindrome
    ? "Yes, this word is a palindrome."
    : "No, this word is not a palindrome.";
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    const word = event.target["word"].value;
    const method = event.target["method"].value;

    const result = generatePalindromeStatus(word, method);

    document.getElementById("result").textContent = result;
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
