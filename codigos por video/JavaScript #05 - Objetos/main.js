window.console.log("eu sou o console")

//criando objeto | objeto guarda valor dentro de uma propriedade
const person = {
    firstName: "Elvis",
    lastName: "Presley",
    age: "42",
    hobbies: ['cantar', 'dançar', 'atuar'],
    dog: {
        name: "Simba",
        age: 4
    }
};

/*
const firstName = person.firstName;
const lastName = person.lastName;
const age = person.age;
const hobbies = person.hobbies;
*/

/*
//DESTRUCTURING
//mesma coisa que acima
//const { firstName, lastName, age, hobbies } = person;
//pode renomear
const { firstName: primeiroNome, lastName, age, hobbies } = person;
console.log(primeiroNome);

//console.log(firstName);
console.log(lastName);
console.log(age);
console.log(hobbies);
*/

//acessar valor dentro da lista de hobbies
const read = person.hobbies[2];
console.log(read);

// adicionando novas propriedades ao objeto
//person.dog = "Simba";
//console.log(person);

//adicionando propriedades ao person - acrescentou no objeto o dog

//verificando as novas propriedades
console.log(person.dog.age);
console.log(person.dog.name);

//DESTRUCTING de dog
const { 
    firstName: primeiroNome, 
    lastName, 
    age, 
    hobbies, 
    dog:{ name: dogName } 
} = person;

console.log(primeiroNome);
console.log(lastName);
console.log(age);
console.log(hobbies);

console.log(person.dog.age);
console.log(dogName);


//LISTA CONTENDO VÁRIOS OBJETOS

const todos = [
    {
        id: 1,
        description: "Estudar programação",
        isCompleted: false,
    },
    {
        id: 2,
        description: "Ler",
        isCompleted: true,
    },
    {
        id: 3,
        description: "treinar",
        isCompleted: true,
    },
];

//acessar ultimo index
const descriptionOfLastTodo = todos[2];
console.log(descriptionOfLastTodo);

//acessa dentro de description = treinar
const descriptionOfLastTodo1 = todos[2].description;
console.log(descriptionOfLastTodo1);
