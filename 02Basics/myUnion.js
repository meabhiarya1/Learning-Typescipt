"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 44;
score = "55";
var abhishek = { name: "Abhishek", id: 334 };
abhishek = { username: "abhi", id: 334 };
// function getDbId(id: number | string) {
//   console.log(`DB id is: ${id}`);
// }
function getDbId(id) {
    if (typeof id === "string") {
        return id.toLowerCase();
    }
    else if (typeof id === "number") {
        return id + 2;
    }
}
// getDbId(3);
// getDbId("kkjhaaj");
console.log(getDbId(3));
console.log(2);
//array
var data = [1, 2, 3];
var data1 = ["1", "2", "3"];
var data2 = ["1", 2, 3];
var seatAllotment;
seatAllotment = "aisle";
