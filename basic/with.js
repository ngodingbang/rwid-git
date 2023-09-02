const person = {
  name: "Ian",
  age: 27,
  address: "Yogyakarta",
};

// ambigous
const name = "Angga";
const age = 27;

with (person) {
  // Yang terpanggil bukan yang ada di baris 8-9, tapi baris 2-4
  console.info(name);
  console.info(age);
  console.info(address);
}
