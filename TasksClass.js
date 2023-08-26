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

    this.deleteButton.addEventListener("click", (e) => {});
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

  addNewTask(arrayTodoList) {
    this.inputId = document.getElementById("InputID");
    this.inputId.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        if (this.inputId.value === "") {
          console.log("error");
        } else {
          arrayTodoList.push({
            id: this.id,
            text: this.inputId.value,
            completed: false,
          });
          localStorage.setItem("tasks", JSON.stringify(arrayTodoList));
          this.renderTasks(this.inputId.value);
          this.id++;
          this.inputId.value = "";
        }
      }
    });
  }
}
