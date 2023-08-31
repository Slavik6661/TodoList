import TasksClass from "./TasksClass.js";
import StorageManagerClass from "./storageManager.js";
import selectionOfElements from "./selectElementsClass.js";
let selectElements = new selectionOfElements();
let storageManager = new StorageManagerClass();

export default class Ui {
  constructor() {
    this.id = 0;
    this.contentTask;
    this.newDiv;
    this.deleteButton;
    this.storedTasks;
    this.todoListli = document.getElementById("todo__item");
    this.newContent;
    this.arrayTodoList = [];
    this.taskComplied;
  }

  createNewDiv(value) {
    this.newDiv = document.createElement("div"); ///
    this.newDiv.className = "todoTask";

    this.newContent = document.createTextNode(value);
    this.newDiv.appendChild(this.newContent);
  }

  createCompliedButton() {
    this.taskComplied = document.createElement("button");
    this.taskComplied.className = "in-progress";
    this.taskComplied.id = this.id;

    this.taskComplied.addEventListener("click", (e) => {
      let taskManager = new TasksClass();
      taskManager.completedTask(e.currentTarget);
      this.id = 0;
    });
  }

  createDeleteButton() {
    this.deleteButton = document.createElement("button");
    this.deleteButton.className = "deleteBtn";
    this.deleteButton.id = this.id;

    this.deleteButton.addEventListener("click", (e) => {
      let taskManager = new TasksClass();
      taskManager.deleteTaskFromArray(e.target.id);
      this.id = 0;
    });
  }
  createContentTask() {
    this.contentTask = document.createElement("li");
    this.contentTask.className = "blokTask";
    this.contentTask.id = this.id;

    this.contentTask.appendChild(this.taskComplied);
    this.contentTask.appendChild(this.newDiv);
    this.contentTask.appendChild(this.deleteButton);
    this.todoListli.appendChild(this.contentTask);
    this.id++;
  }

  renderTasks(value) {
    this.arrayTodoList = JSON.parse(localStorage.getItem("tasks"));
    this.createNewDiv(value);
    this.createCompliedButton();
    this.createDeleteButton();
    this.createContentTask();

    selectElements.highlightEveryEven();
    selectElements.highlightEveryOdd();

    document.querySelectorAll(".in-progress").forEach((element, index) => {
      if (this.arrayTodoList[index].completed === true) {
        element.classList.add("in-progress-complied");
      }
    });
  }

  loadTasks() {
    let storedTasks = storageManager.getStoredTasks();
    this.id = 0;
    if (storedTasks) {
      storedTasks.forEach((element) => {
        this.renderTasks(element.text);
      });
      return storedTasks;
    }
  }
}
