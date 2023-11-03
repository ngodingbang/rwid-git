export const validateApproach = approach => {
  if (!["factorial", "oop"].includes(approach)) {
    throw TypeError("only 'functional' or 'oop' approach are allowed!");
  }
};
