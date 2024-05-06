class User {
  email: string;
  name: string;
  city: string = "";
  constructor(email: string, name: string) {
    (this.email = email), (this.name = name);
  }
}

const Abhishek = new User("a@gmail.com", "Abhi");

Abhishek.city = "Agra"