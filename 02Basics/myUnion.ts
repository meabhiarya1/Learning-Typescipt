let score: string | number = 33;

score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let abhishek: User | Admin = { name: "Abhishek", id: 334 };

abhishek = { username: "abhi", id: 334 };

// function getDbId(id: number | string) {
//   console.log(`DB id is: ${id}`);
// }

function getDbId(id: number | string) {
  if (typeof id === "string") {
    return id.toLowerCase();
  } else if (typeof id === "number") {
    return id + 2;
  }
}

// getDbId(3);
// getDbId("kkjhaaj");

console.log(getDbId(3));
console.log(2);

//array

const data: number[] = [1, 2, 3];
const data1: string[] = ["1", "2", "3"];
const data2: (string | number)[] = ["1", 2, 3];

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
// seatAllotment = "crew"; error

export {};
