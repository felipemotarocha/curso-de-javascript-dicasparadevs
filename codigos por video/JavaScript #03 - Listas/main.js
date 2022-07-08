window.console.log("eu sou o console")

//LISTA

const names = ["Maria", "Francisca", "Joana", 10, false];

//pra buscar o nome na posição 1
const chica = names[1];
console.log(chica);

//adiciona valores no final do array
names.push("Joaquim");
console.log(names);
names.push("Luiz");
console.log(names);

//adiciona valores no começo do array
names.unshift("Benjamin");
console.log(names);

//retira ultimo valor
names.pop();
console.log(names);

//mudar valores joana para ana
names[3] = "Ana"
console.log(names);

//verifica qual é a posição do elemento joaquim = 6
console.log(names.indexOf("Joaquim"));
console.log(names);

//ordenar lista alfabeticamente
const indexOfJoaq = names.indexOf("Joaquim");
const sortedNames = names.sort();
console.log(sortedNames);

//quantos itens tem na lista
console.log(names.length);

//verifica se alguma variavel é uma lista | se names é uma lista
const namesIsArray = Array.isArray(names);
console.log(namesIsArray);
