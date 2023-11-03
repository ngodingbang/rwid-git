export const validateApproach = approach => {
  if (!["functional", "oop"].includes(approach)) {
    throw TypeError("only 'functional' or 'oop' approach are allowed!");
  }
};
