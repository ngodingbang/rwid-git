function outerFunction() {
  /**
   * @param {string} message
   */
  function innerFunction(message) {
    console.info(message);
  }

  innerFunction("Hello World!");
}

outerFunction();

// ReferenceError: innerFunction is not defined
innerFunction("Hello World!");
