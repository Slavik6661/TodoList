import selectElementsClass from "./selectElementsClass.js";
import createTasks from "./TasksClass.js";

let taskManager = new createTasks();
let selectElements = new selectElementsClass();
let deleteFirstElement = document.getElementById("delete_first_element");
let deleteLastElement = document.getElementById("delete_last_element");
let btnEveryEven = document.getElementById("highlight_Every_Even");
let btnEachIsNotEven = document.getElementById("highlight_Every_Odd_One");

let btnEveryEvenState = false;
let btnEachIsNotEvenState = false;
localStorage.setItem("btnEveryEvenState", JSON.stringify(btnEveryEvenState));
localStorage.setItem(
  "btnEachIsNotEvenState",
  JSON.stringify(btnEachIsNotEvenState)
);

taskManager.loadTasks();
taskManager.addNewTask();

btnEveryEven.addEventListener("click", (e) => {
  btnEveryEvenState = !btnEveryEvenState;
  localStorage.setItem("btnEveryEvenState", JSON.stringify(btnEveryEvenState));
  selectElements.highlightEveryEven(btnEveryEvenState);
});

btnEachIsNotEven.addEventListener("click", (e) => {
  btnEachIsNotEvenState = !btnEachIsNotEvenState;

  localStorage.setItem(
    "btnEachIsNotEvenState",
    JSON.stringify(btnEachIsNotEvenState)
  );

  selectElements.highlightEveryOdd(btnEachIsNotEvenState);
});
deleteLastElement.addEventListener("click", (e) => {
  taskManager.deleteLastElement();
});

deleteFirstElement.addEventListener("click", (e) => {
  taskManager.deleteFirstElement();
});

// inputId.addEventListener("keypress", (e) => {
//   if (e.key === "Enter") {
//     arrayTodoList.push({ id: id, text: inputId.value, completed: false });
//     recordInLocalStorage(arrayTodoList);
//     addElement(inputId.value);
//     inputId.value = "";
//   }
// });

//renderTasks.renderTasks();
//renderTasks.loadTasks();

// function addElement(value) {
//   // create a new div element
//   const contentTask = document.createElement("div");
//   contentTask.className = "blokTask";
//   contentTask.id = id;

//   const newDiv = document.createElement("div");
//   newDiv.className = "todoTask";

//   const deleteButton = document.createElement("button");
//   deleteButton.className = "deleteBtn";
//   deleteButton.id = id;
//   deleteButton.addEventListener("click", (e) => {
//     deleteTask(e.target.id);
//     console.log(e.target.id);
//     id = 0;
//   });

//   // and give it some content
//   const newContent = document.createTextNode(value);
//   // add the text node to the newly created div
//   newDiv.appendChild(newContent);
//   //document.body.insertBefore(newDiv, todoListli);
//   contentTask.appendChild(newDiv);
//   contentTask.appendChild(deleteButton);
//   todoListli.appendChild(contentTask);
//   id++;
// }

// function recordInLocalStorage(arrayTasks) {
//   // Save arrayTasks in localStorage/
//   localStorage.setItem("tasks", JSON.stringify(arrayTasks));
// }

// function loadTasks(storedTasks) {
//   if (storedTasks) {
//     storedTasks.forEach((element) => {
//       addElement(element.text);
//     });
//     return storedTasks;
//   }
// }

// function deleteTask(idElementToRemove) {
//   idElementToRemove = Number(idElementToRemove);
//   storedTasks = JSON.parse(localStorage.getItem("tasks"));
//   recordInLocalStorage((storedTasks = []));
//   todoListli.innerText = "";

//   arrayTodoList.splice(idElementToRemove, 1);
//   console.log(arrayTodoList);
//   recordInLocalStorage(arrayTodoList);
//   storedTasks = JSON.parse(localStorage.getItem("tasks"));
//   id = 0;
//   loadTasks(storedTasks);
//   selectElements.highlightEveryEven(btnEveryEvenState);
//   selectElements.highlightEveryOdd(btnEachIsNotEvenState);
// }
