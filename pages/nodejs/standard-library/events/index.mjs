import { EventEmitter } from "node:events";

class MyEmitter extends EventEmitter {
  constructor() {
    super();

    this.on("event", () => {
      console.log("an event occurred!");
    });

    this.on("sayHelloAtConsole", (name1, name2) => {
      console.log(`hello ${name1} and ${name2}`);
    });
  }
}

const myEmitter = new MyEmitter();

myEmitter.emit("event");
myEmitter.emit("sayHelloAtConsole", "ian", "rizky");
