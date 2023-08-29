import selectElementsClass from "./selectElementsClass.js";
import createTasks from "./TasksClass.js";
import StorageManager from "./storageManager.js";

let storageManager=new StorageManager()
let taskManager = new createTasks();
let selectElements = new selectElementsClass();

let inputId = document.getElementById("InputID");
let deleteFirstElement = document.getElementById("delete_first_element");
let deleteLastElement = document.getElementById("delete_last_element");
let btnEveryEven = document.getElementById("highlight_Every_Even");
let btnEachIsNotEven = document.getElementById("highlight_Every_Odd_One");

let btnEveryEvenState = false;
let btnEachIsNotEvenState = false;

taskManager.loadTasks();

if(storageManager.getButtonStatesEveryEven()){
  btnEveryEvenState = storageManager.getButtonStatesEveryEven()
}
if(storageManager.getButtonStatesNotEvenState()){
  btnEachIsNotEvenState = storageManager.getButtonStatesNotEvenState()
}

storageManager.setButtonStatesEveryEven(btnEveryEvenState)
storageManager.setButtonStatesNotEvenState(btnEachIsNotEvenState)

inputId.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    taskManager.addNewTask();
    }
  }
)




btnEveryEven.addEventListener("click", (e) => {
  btnEveryEvenState=!btnEveryEvenState
  storageManager.setButtonStatesEveryEven(btnEveryEvenState)
  console.log(storageManager.getButtonStatesEveryEven());
  selectElements.highlightEveryEven();
});

btnEachIsNotEven.addEventListener("click", (e) => {
  btnEachIsNotEvenState=!btnEachIsNotEvenState
  storageManager.setButtonStatesNotEvenState(btnEachIsNotEvenState)
  selectElements.highlightEveryOdd();
});

deleteLastElement.addEventListener("click", (e) => {
  taskManager.deleteLastElement();
});

deleteFirstElement.addEventListener("click", (e) => {
  taskManager.deleteFirstElement();
});
