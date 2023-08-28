import selectionOfElements from "./selectElementsClass.js";
import UiClass from "./UiClass.js";
let selectElements = new selectionOfElements();

let uiClassInstance = new UiClass();

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

    this.contentTask.appendChild(this.taskComplied);
    this.contentTask.appendChild(this.newDiv);
    this.contentTask.appendChild(this.deleteButton);
  }

  // renderTasks(value) {
  //   this.todoListli = document.getElementById("todo__item");

  //   this.storedTasks = JSON.parse(localStorage.getItem("tasks"));
  //   if (this.arrayTodoList.length === 0) {
  //     this.arrayTodoList = [...this.storedTasks];
  //   }

  //   this.btnEveryEvenState = JSON.parse(
  //     localStorage.getItem("btnEveryEvenState")
  //   );
  //   this.btnEachIsNotEvenState = JSON.parse(
  //     localStorage.getItem("btnEachIsNotEvenState")
  //   );

  //   this.createNewDiv(value);
  //   this.createCompliedButton();
  //   this.createDeleteButton();
  //   this.createContentTask();
  //   this.todoListli.appendChild(this.contentTask);

  //   this.id++;
  //   selectElements.highlightEveryEven(this.btnEveryEvenState);
  //   selectElements.highlightEveryOdd(this.btnEachIsNotEvenState);

  //   //меняет класс элемента если completed=true
  //   document.querySelectorAll(".in-progress").forEach((element, index) => {
  //     console.log(index);
  //     if (this.arrayTodoList[index].completed === true) {
  //       element.classList.add("in-progress-complied");
  //     }
  //   });
  // }

  loadTasks() {
    uiClassInstance.loadTasks();
  }
  // loadTasks() {
  //   this.storedTasks = JSON.parse(localStorage.getItem("tasks"));
  //   if (this.storedTasks) {
  //     this.storedTasks.forEach((element) => {
  //       this.renderTasks(element.text);
  //     });
  //     return this.storedTasks;
  //   }
  // }

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
    this.uiClassInstance.deleteTaskFromArray(
      this.arrayTodoList,
      idElementToRemove
    );
  }
  // deleteTask(idElementToRemove) {
  //   idElementToRemove = Number(idElementToRemove);

  //   localStorage.setItem("tasks", JSON.stringify((this.storedTasks = [])));
  //   this.todoListli.innerText = "";
  //   this.arrayTodoList.splice(idElementToRemove, 1);

  //   localStorage.setItem("tasks", JSON.stringify(this.arrayTodoList));
  //   this.storedTasks = JSON.parse(localStorage.getItem("tasks"));
  //   this.id = 0;
  //   this.loadTasks(this.storedTasks);
  // }

  deleteLastElement() {
    localStorage.setItem("tasks", JSON.stringify((this.storedTasks = [])));

    this.todoListli.innerText = "";
    this.arrayTodoList.pop();

    localStorage.setItem("tasks", JSON.stringify(this.arrayTodoList));
    this.storedTasks = JSON.parse(localStorage.getItem("tasks"));
    this.id = 0;
    this.loadTasks(this.storedTasks);
  }

  deleteFirstElement() {
    localStorage.setItem("tasks", JSON.stringify((this.storedTasks = [])));

    this.todoListli.innerText = "";
    this.arrayTodoList.shift();

    localStorage.setItem("tasks", JSON.stringify(this.arrayTodoList));
    this.storedTasks = JSON.parse(localStorage.getItem("tasks"));
    this.id = 0;
    this.loadTasks(this.storedTasks);
  }

  completedTask(idElementToComplied) {
    localStorage.setItem("tasks", JSON.stringify((this.storedTasks = [])));
    this.todoListli.innerText = "";

    idElementToComplied.classList.add("in-progress-complied");

    this.arrayTodoList[idElementToComplied.id].completed = true;
    this.saveCompletedTask = this.arrayTodoList.splice(
      idElementToComplied.id,
      1
    );
    this.arrayTodoList.push(this.saveCompletedTask[0]);

    localStorage.setItem("tasks", JSON.stringify(this.arrayTodoList));
    this.storedTasks = JSON.parse(localStorage.getItem("tasks"));
    this.id = 0;
    console.log(this.arrayTodoList);
    this.loadTasks(this.storedTasks);
  }
}
