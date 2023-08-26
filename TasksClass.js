export default class TasksElements {
  constructor() {
    this.id = 0;
    this.contentTask;
    this.newDiv;
    this.deleteButton;
    this.storedTasks;
    this.todoListli;
    this.newContent;
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
}
