window.console.log("eu sou o console")

//classe com as propriedades
class Person {
    constructor(firstName, lastName, age) { //parametros do construtor
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    //metodos pra classe
    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }

    //não precisa ser estanciado = static
    static diz(){
        console.log("Helloooooooooo");
    }
}

//instanciar - chama o construtor
const person = new Person("Jane", "Doe", 40); //passando os parametro pedidos
console.log(person);

//chamando os metodos
person.getFullName();

// chama o metodo static - vem direto da classe
Person.diz();


// HERANÇAS

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} made some noise!`);
    }
}

const animal = new Animal ("Simba");
animal.speak();

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    speak() {
        console.log(`${this.name} barked!`);
    }
}

const animal2 = new Animal ("Tor");
const dog = new Animal ("Bob");
animal2.speak();
dog.speak();

const dog2 = new Dog ("Claus");
dog2.speak();