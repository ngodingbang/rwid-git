import { promises } from "dns";

const lookup = await promises.lookup("github.com");

console.log("address: %j family: IPv%s", lookup.address, lookup.family);
