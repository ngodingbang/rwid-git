import { Mentor } from "./Mentor.js";

function generateMentor() {
  const mentor = new Mentor("Septianata Rizky Pratama");

  mentor.showAtDocument();
}

export { generateMentor };
