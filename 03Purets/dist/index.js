"use strict";
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
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        (this.email = email), (this.name = name), (this.userId = userId);
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const Abhishek = new User("a@gmail.com", "Abhi", "987");
