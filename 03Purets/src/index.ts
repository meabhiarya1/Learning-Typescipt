// class User {
//   email: string;
//   name: string;
//   city: string = "";
//   constructor(email: string, name: string) {
//     (this.email = email), (this.name = name);
//   }
// }

// const Abhishek = new User("a@gmail.com", "Abhi");

// Abhishek.city = "Agra"


class User {
  protected _courseCount = 1

  constructor(public email: string, public name: string, private userId: string) {
    (this.email = email), (this.name = name), (this.userId = userId);
  }
}

class SubUser extends User {
  isFamily: boolean = true
  changeCourseCount() {
    this._courseCount = 4
  }

}

const Abhishek = new User("a@gmail.com", "Abhi", "987");


