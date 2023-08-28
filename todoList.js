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
