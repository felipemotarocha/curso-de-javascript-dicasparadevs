window.console.log("eu sou o console")

/*
//quando quiser repetir o codigo varias vezes
for (let index = 0; index < 10; index++){
    console.log(index);
}

//até 10
for (let index = 0; index <= 10; index++){
    console.log(index);
}

const cars = ["Ferrari", "Tesla", "Mercedes"];
for (let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}

//mesmo que acima, mas melhor pra trabalhar com listas
for (let car of cars) { //pra cada carro na lista de carros
    console.log(car);
}

//mesmo que acima mas agora vem om cindex junto
cars.forEach(function (car, index) {
    console.log(index);
    console.log(car);
})
*/


//WHILE executa o código enquanto a condição for verdadeira
let index = 0;

while (index < 10) {
    console.log("index é menor do que 10!");
    
    //index = index + 1;
    //index +=1;

    //mesma coisa que acima
    index++;
}

//FOR IN - pra trabalhar principalmente com objetos
const person = {
    name: "Jane",
    age: 21,
};

//mas não são rápidos
//mostra name e age
for (property in person) {
    console.log(person);
}

//mostra o que está dentro de name e age
for (property in person) {
    console.log(person[property]);
}

