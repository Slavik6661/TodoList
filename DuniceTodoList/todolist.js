let inputElement = document.querySelector(".input-todo");
let buttonElement = document.querySelector(".btn");
let todoList = [];
// let inputText = inputElement.value;

buttonElement.addEventListener("click", function () {
  renderTodo(inputElement.value);
});

document.addEventListener("keypress", function (e) {
  if (e.code === "Enter") {
    renderTodo(inputElement.value);
  }
});

function clearTodos() {
  let ulElement = document.querySelector(".todo-list");
  ulElement.innerHTML = "";
}

function addTodoInArray() {
  todoList.push({ todoText: inputElement.value, status: false });
}

function renderTodo() {
  clearTodos();
  addTodoInArray();

  todoList.forEach(function (element) {
    console.log(element);
    createTodo(element.todoText);
  });

  inputElement.value = "";
}

function createTodo(textTodo) {
  let TodoList = document.querySelector(".todo-list");
  const divContent = createDivContentTodo(textTodo);
  TodoList.append(divContent);
}

function createDivContentTodo(textTodo) {
  let divElementContent = document.createElement("div");
  divElementContent.className = "content-todo";
  const divText = createDivTextTodo(textTodo);
  divElementContent.append(divText);
  return divElementContent;
}

function createDivTextTodo(textTodo) {
  let liElementTextDodo = document.createElement("li");
  liElementTextDodo.className = "text-todo";
  const todoText = document.createTextNode(textTodo);
  liElementTextDodo.appendChild(todoText);
  return liElementTextDodo;
}

function createCheckBox() {}

console.log(inputElement);
console.log(inputElement.value);
console.log(buttonElement);
