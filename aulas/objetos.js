const person = {
  firstName: "Felipe",
  lastName: "Rocha",
  age: "21",
  hobbies: ["Assistir F1", "Jogar futebol", "Ler"],
  dog: {
    name: "Simba",
    age: 4,
  },
};

// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;
// const hobbies = person.hobbies;

// Mesma coisa que acima
const {
  firstName: primeiroNome,
  lastName,
  age,
  hobbies,
  dog: { name: dogName },
} = person;

const read = person.hobbies[2];

console.log(primeiroNome);
console.log(lastName);
console.log(age);
console.log(hobbies);

// person.dog = "Simba";

console.log(person.dog.age);
console.log(dogName);
