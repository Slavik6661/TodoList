import TasksElements from "./renderTasksElements.js";
let renderTasksElements = new TasksElements();

export default class Ui {
  constructor() {
    this.id = 0;
    this.contentTask;
    this.newDiv;
    this.deleteButton;
    this.storedTasks;
    this.todoListli;
    this.newContent;
    this.inputId;
    this.arrayTodoList = [];
    this.btnEveryEvenState;
    this.btnEachIsNotEvenState;
    this.taskComplied;
    this.saveCompletedTask;
  }

  createDeleteButton() {
    this.deleteButton = document.createElement("button");
    this.deleteButton.className = "deleteBtn";
    this.deleteButton.id = this.id;

    this.deleteButton.addEventListener("click", (e) => {
      uiClassInstance.deleteTaskFromArray(e.target.id);
      this.id = 0;
    });
  }

  loadTasks() {
    let storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      storedTasks.forEach((element) => {
        renderTasksElements.renderTasks(element.text);
      });
      return storedTasks;
    }
  }

  deleteTaskFromArray(arrayTodoList, idElementToRemove) {
    idElementToRemove = Number(idElementToRemove);
    let todoListli = document.getElementById("todo__item");
    localStorage.setItem("tasks", JSON.stringify((this.storedTasks = [])));
    todoListli.innerText = "";
    arrayTodoList.splice(idElementToRemove, 1);

    localStorage.setItem("tasks", JSON.stringify(this.arrayTodoList));
    let storedTasks = JSON.parse(localStorage.getItem("tasks"));
    id = 0;
    loadTasks(storedTasks);
  }
}
