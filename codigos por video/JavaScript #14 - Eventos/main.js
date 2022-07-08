window.console.log("eu sou o console")

//EVENTS - EXECUTA UMA AÇÃO QUANDO O USUÁRIO CLICA EM ALGO

//ouvir o botão submit
const submitButton = document.querySelector("#submit-button");

/*
//mas funciona muito rápido
submitButton.addEventListener('click', function() {
    console.log("clicked!");
});


submitButton.addEventListener("click", function (e) {
    e.preventDefault(); //impede o comportamento padrão
    console.log("clicked!");
});
*/

const myForm = document.querySelector("#my-form");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");

const items = document.querySelector(".items");
const body = document.querySelector("body");


submitButton.addEventListener("click", function (e) {
    e.preventDefault(); //impede o comportamento padrão

    const nameValue = nameInput.value; //pega os valores colocado no input
    const emailValue = emailInput.value;

    //se esses valores não tiverem preenchidos
    if (nameValue === "" || emailValue === "") {
        return alert("Please fill out all the fields!"); //prencha todos os campos
    }

    //formulario fica vermelho quando está válido
    myForm.style.background = "red";

    //muda a cor de fundo caso seja aceite os valores
    body.style.background = "blue";

    //muda o item com os valores acrescentados
    items.firstElementChild.textContent = nameValue;
    items.children[1].textContent = emailValue;  

});

/*
//caso mude o valor do input
nameInput.addEventListener("change", function (e) {
    console.log(e.target.value);
});
*/
