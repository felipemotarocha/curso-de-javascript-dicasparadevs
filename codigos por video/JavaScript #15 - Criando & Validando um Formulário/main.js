window.console.log("eu sou o console")

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const submitButton = document.querySelector("#submit-button");

const errorMessage = document.querySelector(".msg");

const items = document.querySelector(".items");


submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    if (nameValue === "" || emailValue === "") {
        errorMessage.textContent = "Por favor, preencha todos os campos!";
        errorMessage.classList = "error"; //busca na classe error
        
        //tempo para a faixa error ficar em tela
        setTimeout(() => {
            errorMessage.textContent = "";
            errorMessage.classList = "";
        }, 3000);        
        return;  //sai da função      
    }

    //cria <li>
    const li = document.createElement("li");
    li.classList = "item";
    li.innerHTML = `Nome: ${nameValue}<br> Email: ${emailValue}`;

    //adiciona <li>
    items.appendChild(li);

    //limpa todos os campos no final
    nameInput.value = "";
    emailInput.value = "";

});