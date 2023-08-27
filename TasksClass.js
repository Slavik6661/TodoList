import selectionOfElements from "./selectElementsClass.js";
let selectElements = new selectionOfElements();
export default class TasksElements {
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
  }

  createNewDiv(value) {
    this.newDiv = document.createElement("div");
    this.newDiv.className = "todoTask";

    this.newContent = document.createTextNode(value);
    this.newDiv.appendChild(this.newContent);
  }

  createDeleteButton() {
    this.deleteButton = document.createElement("button");
    this.deleteButton.className = "deleteBtn";
    this.deleteButton.id = this.id;

    this.deleteButton.addEventListener("click", (e) => {
      this.deleteTask(e.target.id);
      this.id = 0;
    });
  }

  createContentTask() {
    this.contentTask = document.createElement("div");
    this.contentTask.className = "blokTask";
    this.contentTask.id = this.id;

    this.contentTask.appendChild(this.newDiv);
    this.contentTask.appendChild(this.deleteButton);
  }

  renderTasks(value) {
    this.todoListli = document.getElementById("todo__item");

    this.createNewDiv(value);
    this.createDeleteButton();
    this.createContentTask();
    this.id++;
    this.todoListli.appendChild(this.contentTask);
  }

  loadTasks() {
    this.storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (this.storedTasks) {
      this.storedTasks.forEach((element) => {
        this.renderTasks(element.text);
      });
      return this.storedTasks;
    }
  }

  addNewTask() {
    this.inputId = document.getElementById("InputID");
    this.inputId.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        if (this.inputId.value === "") {
          console.log("error");
        } else {
          this.arrayTodoList.push({
            id: this.id,
            text: this.inputId.value,
            completed: false,
          });
          localStorage.setItem("tasks", JSON.stringify(this.arrayTodoList));
          this.renderTasks(this.inputId.value);
          this.inputId.value = "";
        }
      }
    });
  }

  deleteTask(idElementToRemove) {
    idElementToRemove = Number(idElementToRemove);
    this.storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (this.arrayTodoList.length === 0) {
      this.arrayTodoList = [...this.storedTasks];
    }

    localStorage.setItem("tasks", JSON.stringify((this.storedTasks = [])));

    this.todoListli.innerText = "";

    this.arrayTodoList.splice(idElementToRemove, 1);

    localStorage.setItem("tasks", JSON.stringify(this.arrayTodoList));
    this.storedTasks = JSON.parse(localStorage.getItem("tasks"));
    this.id = 0;
    this.loadTasks(this.storedTasks);
    this.btnEveryEvenState = JSON.parse(
      localStorage.getItem("btnEveryEvenState")
    );
    this.btnEachIsNotEvenState = JSON.parse(
      localStorage.getItem("btnEachIsNotEvenState")
    );
    selectElements.highlightEveryEven(this.btnEveryEvenState);
    selectElements.highlightEveryOdd(this.btnEachIsNotEvenState);
  }
}
