function useStrictMode() {
  "use strict";

  const person = {
    name: "Ian",
    age: 27,
    address: "Yogyakarta",
  };

  with (person) {
    console.info(name);
  }
}
