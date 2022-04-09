import { Info } from "./models/Info.js";

var a = new Info(1, 0, 0, 0, 0, 0, [1, 2, 3]);
await a.get();

console.log(a);
