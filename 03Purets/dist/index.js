"use strict";
class User {
    constructor(email, name) {
        this.city = "";
        (this.email = email), (this.name = name);
    }
}
const Abhishek = new User("a@gmail.com", "Abhi");
Abhishek.city = "Agra";
