import { Region } from "./region.js";

export class Writer extends Region {
    showAtDocument (target = "writer_name") {
        document.getElementById(target).textContent =
            this.region;
    }
}
