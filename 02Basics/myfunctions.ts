function addTwo(num: number): number {
  // return "hello"
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (
  email: string,
  password: string,
  isPaid: boolean = false
) => {};

addTwo(5);
getUpper("Abhishek");

signUpUser("Abhishek", "a@gmail.com", false);
loginUser("Ahishek", "iwyeiuwy");

// function getValue(myVal: number): boolean {
//   if (myVal > 5) {
//     return true;
//   }
//   return "200 OK";
// }

const getHello = (s: string): string => {
  return "Hello";
};

getHello("Hello");

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];

heros.map((hero: string): string => {
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}
