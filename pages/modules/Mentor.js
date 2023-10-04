import { Person } from "./Person.js";

export class Mentor extends Person {
  showAtDocument(target = "mentor_name") {
    document.getElementById(target).textContent = this.name;
  }
}
