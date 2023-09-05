import { generateTrElement } from "./generateTrElement.js";

function generateMember() {
  generateTrElement({
    index: 6,
    name: "Iwan Purwadi",
    address: "Palu, Sulawesi Tengah",
    sim_batch: "07",
    github_url: "https://github.com/nawiq7208",
  });
}

export { generateMember };
