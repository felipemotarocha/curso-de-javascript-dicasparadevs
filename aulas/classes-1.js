class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }

  static speak() {
    console.log("Hello world!");
  }
}

const person = new Person("Jane", "Doe", 40);

console.log(person);

Person.speak();
