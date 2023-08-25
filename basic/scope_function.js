function outerFunction() {
  let currentMessage = "";

  /**
   * @param {string} message
   */
  function innerFunction(message) {
    currentMessage = message;

    console.info(currentMessage);
  }

  innerFunction("Hello World!");
}

outerFunction();

// ReferenceError: currentMessage is not defined
console.info(currentMessage);
