import * as generateElement from "./generateElement.js";
import { generateWriter } from "./generateWriter.js";

function main() {
    generateWriter();

    generateElement.m1.region1.generateTrElement()
    generateElement.m2.region2.generateTrElement();
    generateElement.m3.region3.generateTrElement();
    generateElement.m4.region4.generateTrElement();
    generateElement.m5.region5.generateTrElement();
    generateElement.m6.region6.generateTrElement();
    generateElement.m7.region7.generateTrElement();
    generateElement.m8.region8.generateTrElement();
    generateElement.m9.region9.generateTrElement();
    generateElement.m10.region10.generateTrElement();
}

main ();