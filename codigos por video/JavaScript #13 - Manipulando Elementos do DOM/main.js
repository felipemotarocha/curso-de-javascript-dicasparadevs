window.console.log("eu sou o console")

//REMOVE OS ITENS
const items = document.querySelector(".items");
//items.remove();

/*
//REMOVE 1 ITEM 
items.firstElementChild.remove(); //elimina o primeiro li
items.lastElementChild.remove(); //elimina o ultimo li

//MODIFICAR TEXTO LI
items.children[0].textContent = "Item UM"; //primeiro elemento

//MUDANDO POR HTML, A 'LI'
items.lastElementChild.innerHTML = "<h1>Hello world!</h1>";
*/

//MUDAR BOTÃO SUBMIT
const button = document.querySelector(".btn");
button.style.background = "red";
button.style.color = "blue";