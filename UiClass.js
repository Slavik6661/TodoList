
import TasksClass from "./TasksClass.js";
import StorageManagerClass from "./storageManager.js";
import selectionOfElements from "./selectElementsClass.js";
let selectElements=new  selectionOfElements()
let storageManager = new StorageManagerClass();

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
    this.arrayTodoList=[]
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
      let taskManager=new TasksClass()
      taskManager.completedTask(e.currentTarget);
      this.id=0
    });
  }

  createDeleteButton() {
    this.deleteButton = document.createElement("button");
    this.deleteButton.className = "deleteBtn";
    this.deleteButton.id = this.id;

    this.deleteButton.addEventListener("click", (e) => {
      let taskManager=new TasksClass()
      taskManager.deleteTaskFromArray(e.target.id);
      this.id = 0;
    });
  }
  createContentTask() {
    this.todoListli = document.getElementById("todo__item");

    this.contentTask = document.createElement("div");
    this.contentTask.className = "blokTask";
    this.contentTask.id = this.id;

    this.contentTask.appendChild(this.taskComplied);
    this.contentTask.appendChild(this.newDiv);
    this.contentTask.appendChild(this.deleteButton);
    this.todoListli.appendChild(this.contentTask);
    this.id++

  }


  renderTasks(value) {
    this.arrayTodoList=JSON.parse(localStorage.getItem("tasks"))
    this.createNewDiv(value);
    this.createCompliedButton();
    this.createDeleteButton()
    this.createContentTask();

    selectElements.highlightEveryEven();
    selectElements.highlightEveryOdd();

    document.querySelectorAll('.in-progress').forEach((element,index)=>{
      if(this.arrayTodoList[index].completed===true){
       element.classList.add("in-progress-complied");
      }
    })
  }


  loadTasks() {
    let storedTasks = storageManager.getStoredTasks()
    this.id=0
    if (storedTasks) {
      storedTasks.forEach((element) => {
        this.renderTasks(element.text);
      });
      return storedTasks;
    }
  }




  
 

  // completedTask(idElementToComplied) {
  //   localStorage.setItem("tasks", JSON.stringify((this.storedTasks = [])));
  //   this.todoListli.innerText = "";

  //   idElementToComplied.classList.add("in-progress-complied");

  //   this.arrayTodoList[idElementToComplied.id].completed = true;
  //   this.saveCompletedTask = this.arrayTodoList.splice(
  //     idElementToComplied.id,
  //     1
  //   );
  //   this.arrayTodoList.push(this.saveCompletedTask[0]);

  //   localStorage.setItem("tasks", JSON.stringify(this.arrayTodoList));
  //   this.storedTasks = JSON.parse(localStorage.getItem("tasks"));
  //   this.id = 0;
  //   console.log(this.arrayTodoList);
  //   this.loadTasks(this.storedTasks);
  // }
 

}
