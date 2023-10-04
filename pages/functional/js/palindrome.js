import { parseString } from "../../js/helper.js";

/**
* Reverse Method (Array)
* @param {string} value
*/
function isPalindrome (value) {
  let array = [];

  for (const spread of value) {
      array.push (spread)
  }

  let reverseArray = [];

  for (i = 1; i <= array.length; i++) {
      reverseArray.push (array [array.length - i]);
  }

  console.log (array);
  console.log (reverseArray);
  console.log (JSON.stringify (array));
  console.log (JSON.stringify (reverseArray));

  return JSON.stringify(array) === JSON.stringify(reverseArray);
}

console.log (isPalindrome ("racecar"));

/**
* Reverse Method (String)
* @param {string} value
*/
function isPalindrome2 (value) {
  let newValue = "";

  for (let index = value.length - 1; index >= 0; index--) {
    newValue += value[index];
  }

  console.log (newValue);

  return value === newValue;
}

console.log (isPalindrome2 ("racecar"));

/**
* Using Function Generator
* @param {*} value 
* @returns 
*/
function isPalindrome5 (value) {
  function* fGen () {
      for (const spread of value) {
          yield spread;
      }
  }

  function* fgen2 () {
      for (i = 1; i <= array.length; i++) {
          yield fGen [fGen.length - i];
      }
  }

  return JSON.stringify(fGen) === JSON.stringify(fgen2);
}

console.log (isPalindrome5 ("racecar"));

/**
* Using Loop
* @param {string} value
*/
function isPalindrome3 (value) {
  console.log (value.length);

  label : for (index = 0; index < Math.ceil(value.length/2); index++) {
      const firstChar = value [index];
      const lastChar = value [value.length - (index + 1)];
      if (lastChar !== firstChar) {
          return false;
      }   console.log (`iteration ${value} ${index + 1}`);//Just to see how many iteration been executed
          continue label; //Turns out weren't necessary, cuz there's only one loop
  }    

  return true;
}

console.log (isPalindrome3 ("racecar"));

 /** 
* Using Recursive Function
* @param {string} value
* @param {number} index
*/
function isPalindrome4 (value, index = 0) { //What a way to init an index
  const firstChar = value [index];
  const lastChar = value [value.length - (index + 1)]

  if (firstChar !== lastChar) {
      return false;
  }   else if (index < Math.ceil (value.length/2)) {
          return isPalindrome4 (value, index + 1);
  }           console.log (`iteration ${value} ${index + 1}`);  
              return true;
}

console.log (isPalindrome4 ("silvivlis"));
