window.console.log("eu sou o console")

//CONDICIONAIS

const sum = 1 + 1;
if (sum === 2) { //=== verifica o tipo e o valor | == verifica apenas o valor 
    console.log("Sum is 2!");
} else {
    console.log("Sum is NOT 2!");
}

if (sum === "2") { //vai dar false, porque 2 agora é string
    console.log("Sum is 2!");
} else {
    console.log("Sum is NOT 2!");
}

const summ = 1 + 2;
if (summ === 2) { //=== verifica o tipo e o valor | == verifica apenas o valor 
    console.log("Sum is 2!");
} else if (summ === 3){
    console.log("Sum is 3!");
} else {
    console.log("Sum is NOT 2!");
}


//OPERADORES && ||
const sum1 = 2 + 2;
const sum2 = 3 + 10;

if (sum1 === 4 && sum2 === 6) {
    console.log("sum1 is 4 and sum2 is 6");
}

if (sum1 === 4 || sum2 === 6) {
    console.log("sum1 is 4 or sum2 is 6");
}


//TERNARY OPERATOR
const sum3 = 1 + 2;

/*
if (sum === 2) {
    number = 2; 
} else {
    number = 4;
}
console.log(number);
*/

//mesma coisa que acima:
let number = sum3 === 2 ? 2 : 4;
console.log(number);


const car = "Tesla";
switch (car) {
    case "Mercedes":
        console.log("Mercedes is beautiful");
        break;
    case "Ferrari":
        console.log("Ferrari is very red");
        break;
    case "Tesla":
        console.log("Tesla is very smart");
        break;
}