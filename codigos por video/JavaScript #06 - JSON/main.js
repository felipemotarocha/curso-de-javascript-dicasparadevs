window.console.log("eu sou o console")

//não consegue enviar ao front end uma lista ou
//qualquer coisa de javascript sem transformar em json

//enviar para uma api - para um servidor - precisa converter para json
const todos = [
    {
        id: 1,
        description: "Estudar programação",
        isCompleted: false,
    },
    {
        id: 2,
        description: "Ler",
        isCompleted: true,
    },
    {
        id: 3,
        description: "treinar",
        isCompleted: true,
    },
];

//converter pra json
const todosJSON = JSON.stringify(todos);
console.log(todosJSON); //mostra tudo em formato string

//converter json para uma lista - uma variavel
const todosList = JSON.parse(todosJSON);
console.log(todosList);

