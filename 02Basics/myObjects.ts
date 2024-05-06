const User = {
  name: "abhishek",
  email: "a@gmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

let newUser = { name: "Ahishek", isPaid: false, email: "a@gmail.com" }; // weired

createUser(newUser);

function createCourse({ name: string, price: number }): {
  name: string;
  price: number;
} {
  return { name: "a", price: 399 };
}

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUserType(user: User): User {
//   return { name: "Abhishek", email: "", isActive: true };
// }

// createUserType({ name: "Abhishek", email: "", isActive: true });

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
};

let myUser: User = {
  _id: "12345",
  name: "h",
  email: "h@h.com",
  isActive: false,
};

myUser.name = "Abhishek"
