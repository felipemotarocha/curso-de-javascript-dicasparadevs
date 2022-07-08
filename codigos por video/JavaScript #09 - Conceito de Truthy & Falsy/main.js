window.console.log("eu sou o console")

//!! verifica se é verdadeiro ou falso


//FALSE
const x = ''; //string vazia sempre vai ser falso
console.log(!!x);

const y = 0; // 0 vai ser false
console.log(!!y);

const a = null;
const b = undefined;
console.log(!!a);
console.log(!!b);


//TRUE
const list = []; //uma lista vazia é true
console.log(!![]);
console.log(!list); //false porque o ! inverte o valor

const object = {};
console.log(!!object);

//checar se a lista tem algum valor
if (list.length > 0) {
    console.log(list);
}
