export const validateFactorialMethod = method => {
  if (!["loop", "recursive"].includes(method)) {
    throw new TypeError("only 'loop' or 'recursive' method are allowed!");
  }
};

export const validateFibonacciMethod = method => {
  if (!["loop", "recursive"].includes(method)) {
    throw new TypeError("only 'loop' or 'recursive' method are allowed!");
  }
};
