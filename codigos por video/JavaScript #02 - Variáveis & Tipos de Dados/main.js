window.console.log("eu sou o console")

//const
//let

/*
vai dar erro porque const não aceita novas valores, trocar por let
const message = 'Hello world!'
alert(message)
*/

/*
let message = 'hello world'
message= 'ola mundo!'
alert(message)
*/

//STRINGS

//mostra a quantidade de caracteres
const message = 'Hello world!'
console.log(message.length)

const firstName = "Elvis";
const lastName = "Presley";

//modo antigo
console.log("Meu nome é " + firstName + " " + lastName);
//modo atual
console.log(`Meu nome é ${firstName.toUpperCase()} ${lastName.toLocaleLowerCase()}`);

//colocar cana nome em uma lista
const names = "Ana,Julia,Bruna";
console.log(names.split(","));
//cortar por letra
const name = "Maria";
console.log(name.split(""));



//NÚMEROS

/*
const number = 5;
console.log(number * 2);

//converter numero pra string
console.log(number.toString());

//pra saber qual é o tipo
console.log(typeof number)
console.log(typeof number.toString())
*/


//BOOLEANOS

/*
false
true

console.log(2 == 2)

//NULL & UNDEFINED

// x não tem nenhum valor, vazio
const x = null;

//valor ainda indefinido
const y = undefined;
*/