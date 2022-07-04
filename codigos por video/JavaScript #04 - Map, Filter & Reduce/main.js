window.console.log("eu sou o console")

//MAP

// executa em uma função em cada item da lista e retorna uma nova lista com o resultado
const numbers = [1, 2, 3, 4, 5];
const numbersMultipliedByTwo = numbers.map(function (number) {
    return number * 2;
});
console.log(numbersMultipliedByTwo);


//FILTER

const ages = [8, 13, 27, 30, 22, 40];

//filtrar, fazer uma nova lista e mostrar numeros pares
const evenAges = ages.filter(function(age) {
    return age % 2 === 0  //se o resto da divisão é zero, é par
})
console.log(evenAges);


//REDUCE

//soma todos numeros [8, 13, 27, 30, 22, 40];
const sumOfAges = ages.reduce(function (age, accumulator) {
    return accumulator + age;
}, 0); //inicia com 0 + age
console.log(sumOfAges);

const sumOfAgess = ages.reduce(function (age, accumulator) {
    return accumulator + age;
}, 100); //inicia com 100 + age
console.log(sumOfAgess);

