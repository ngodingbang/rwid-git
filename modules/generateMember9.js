import { generateTrElement } from "./generateTrElement.js";

function generateMember() {
  generateTrElement({
    index: 9,
    name: "Inga Resa",
    address: "Kab. Magelang, Jawa Tengah",
    sim_batch: "07",
    github_url: "",
  });
}

export { generateMember };
