
import uiClass from './UiClass.js'
import StorageManagerClass from "./storageManager.js";

let uiClassInstance=new uiClass()
let storageManager =new StorageManagerClass()

export default class TasksElements {
  constructor() {
    this.id = 0;
    this.contentTask;
    this.newDiv;
    this.deleteButton;
    this.storedTasks;
    this.todoListli=document.getElementById("todo__item");
    this.newContent;
    this.inputId;
    this.arrayTodoList = [];
    this.btnEveryEvenState;
    this.btnEachIsNotEvenState;
    this.taskComplied;
    this.saveCompletedTask;
  }

  loadTasks() {
   
    this.arrayTodoList = storageManager.getStoredTasks()
    uiClassInstance.loadTasks();

  
  }

  addNewTask() {
    this.inputId = document.getElementById("InputID");
    this.arrayTodoList = storageManager.getStoredTasks()
    storageManager.setStoredTasks([])
        if (this.inputId.value === "") {
          console.log("error");
        } else {
          this.arrayTodoList.push({
            id: this.id,
            text: this.inputId.value,
            completed: false,
          });
         
          storageManager.setStoredTasks(this.arrayTodoList)
          uiClassInstance.renderTasks(this.inputId.value);
          this.inputId.value = "";
          this.id++
        }
  }

  deleteTaskFromArray(idElementToRemove) {
    this.arrayTodoList = storageManager.getStoredTasks();

    idElementToRemove = Number(idElementToRemove);
    
    storageManager.setStoredTasks([])
    this.todoListli.innerText = "";

    this.arrayTodoList.splice(idElementToRemove, 1);
    storageManager.setStoredTasks(this.arrayTodoList)
   
  
    uiClassInstance.loadTasks();
  }


  deleteFirstElement() {
    storageManager.setStoredTasks([])
    this.todoListli.innerText = "";
    this.arrayTodoList.shift();
    storageManager.setStoredTasks(this.arrayTodoList)
    this.loadTasks();
  }

  deleteLastElement() {
    storageManager.setStoredTasks([])
    this.todoListli.innerText = "";
    this.arrayTodoList.pop();
    storageManager.setStoredTasks(this.arrayTodoList)
    this.loadTasks();
  }


  completedTask(idElementToComplied) {
    this.arrayTodoList = storageManager.getStoredTasks();
    storageManager.setStoredTasks([])
    this.todoListli.innerText = "";
    console.log( this.arrayTodoList);
    idElementToComplied.classList.add("in-progress-complied");

    this.arrayTodoList[idElementToComplied.id].completed = true;
    this.saveCompletedTask = this.arrayTodoList.splice(
      idElementToComplied.id,
      1
    );

    this.arrayTodoList.push(this.saveCompletedTask[0]);
    storageManager.setStoredTasks(this.arrayTodoList)
    console.log(this.arrayTodoList);
    this.loadTasks();
  }

}
