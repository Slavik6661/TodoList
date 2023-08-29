export default class StorageManager {
  constructor() {}

  getButtonStatesEveryEven() {
    return JSON.parse(localStorage.getItem("btnEveryEvenState"));
  }

  getButtonStatesNotEvenState() {
    return JSON.parse(localStorage.getItem("btnEachIsNotEvenState"));
  }
 
  setButtonStatesEveryEven(states) {
    localStorage.setItem("btnEveryEvenState", JSON.stringify(states));
  }

  setButtonStatesNotEvenState(states) {
    localStorage.setItem("btnEachIsNotEvenState", JSON.stringify(states));
  }


  getStoredTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  }

  setStoredTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}
