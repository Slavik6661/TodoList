export default class StorageManager {
  constructor() {}

  getButtonStates() {
    return JSON.parse(localStorage.getItem("btnStates"));
  }

  setButtonStates(states) {
    localStorage.setItem("btnStates", JSON.stringify(states));
  }

  getStoredTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  }

  setStoredTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}
