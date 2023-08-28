import StorageManagerClass from "./storageManager.js";
import selectionOfElements from "./selectElementsClass.js";
import UiClass from "./UiClass.js";
let storageManager = new StorageManagerClass();

let test = new UiClass();

export default class TasksElements {
  constructor() {
    this.storageManager = storageManager;
    this.test = test;
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

  createNewDiv(value) {
    this.newDiv = document.createElement("div");
    this.newDiv.className = "todoTask";

    this.newContent = document.createTextNode(value);
    this.newDiv.appendChild(this.newContent);
  }

  createCompliedButton() {
    this.taskComplied = document.createElement("button");
    this.taskComplied.className = "in-progress";
    this.taskComplied.id = this.id;

    this.taskComplied.addEventListener("click", (e) => {
      this.completedTask(e.currentTarget);
    });
  }

  //   createDeleteButton() {
  //     this.deleteButton = document.createElement("button");
  //     this.deleteButton.className = "deleteBtn";
  //     this.deleteButton.id = this.id;

  //     this.deleteButton.addEventListener("click", (e) => {
  //       uiClassInstance.deleteTaskFromArray(e.target.id);
  //       this.id = 0;
  //     });
  //   }

  createContentTask() {
    this.contentTask = document.createElement("div");
    this.contentTask.className = "blokTask";
    this.contentTask.id = this.id;

    this.contentTask.appendChild(this.taskComplied);
    this.contentTask.appendChild(this.newDiv);
    this.contentTask.appendChild(this.deleteButton);
  }

  renderTasks(value) {
    this.todoListli = document.getElementById("todo__item");

    this.arrayTodoList = this.storageManager.getStoredTasks();
    const btnStates = this.storageManager.getButtonStates();

    //this.btnEveryEvenState = btnStates.btnEveryEvenState;
    //this.btnEachIsNotEvenState = btnStates.btnEachIsNotEvenState;

    this.createNewDiv(value);
    this.createCompliedButton();
    this.test.createDeleteButton();
    this.createContentTask();
    this.todoListli.appendChild(this.contentTask);

    this.id++;
  }
}
