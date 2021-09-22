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
    description: "Treinar",
    isCompleted: true,
  },
];

const todosJSON = JSON.stringify(todos);
const todosList = JSON.parse(todosJSON);

console.log(todosList);
