import taskManagerClass from "./taskManagerClass.js";
const inputId = document.getElementById("InputID");
const contentPage = document.getElementById("content-page");
const todoListli = document.getElementById("todo__item");

let arrayTodoList = [];
let id = 0;
let taskManager = new taskManagerClass();
taskManager.test();

let renderTasks = new createTasks();
//let selectElements = new selectElementsClass();

if (arrayTodoList.length === 0) {
  arrayTodoList = loadTasks(storedTasks) || [];
}

inputId.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    arrayTodoList.push({ id: id, text: inputId.value, completed: false });
    recordInLocalStorage(arrayTodoList);
    addElement(inputId.value);
    inputId.value = "";
    //id++;
  }
});

function addElement(value) {
  // create a new div element
  const contentTask = document.createElement("div");
  contentTask.className = "blokTask";
  contentTask.id = id;

  const newDiv = document.createElement("div");
  newDiv.className = "todoTask";

  const deleteButton = document.createElement("button");
  deleteButton.className = "deleteBtn";
  deleteButton.id = id;
  deleteButton.addEventListener("click", (e) => {
    deleteTask(e.target.id);
    console.log(e.target.id);
    id = 0;
  });

  // and give it some content
  const newContent = document.createTextNode(value);
  // add the text node to the newly created div
  newDiv.appendChild(newContent);
  //document.body.insertBefore(newDiv, todoListli);
  contentTask.appendChild(newDiv);
  contentTask.appendChild(deleteButton);
  todoListli.appendChild(contentTask);
  id++;
}

function recordInLocalStorage(arrayTasks) {
  // Save arrayTasks in localStorage/
  localStorage.setItem("tasks", JSON.stringify(arrayTasks));
}

function loadTasks(storedTasks) {
  if (storedTasks) {
    storedTasks.forEach((element) => {
      addElement(element.text);
    });
    return storedTasks;
  }
}

function deleteTask(idElementToRemove) {
  idElementToRemove = Number(idElementToRemove);
  storedTasks = JSON.parse(localStorage.getItem("tasks"));
  recordInLocalStorage((storedTasks = []));
  todoListli.innerText = "";

  if (idElementToRemove === 0) {
    arrayTodoList.splice(idElementToRemove, 1);
  }
  arrayTodoList.splice(idElementToRemove, idElementToRemove);
  recordInLocalStorage(arrayTodoList);
  storedTasks = JSON.parse(localStorage.getItem("tasks"));
  id = 0;
  loadTasks(storedTasks);
}

function selectEveryFourthElement() {
  return true;
}
