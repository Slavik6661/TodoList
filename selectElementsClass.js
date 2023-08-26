export default class selectionOfElements {
  constructor() {
    this.allTask;
  }

  highlightEveryEven(btnEveryEvenState) {
    this.allTask = document.querySelectorAll(".todoTask");

    if (btnEveryEvenState) {
      this.allTask.forEach((element, index) => {
        if (index % 2 === 1) {
          element.classList.add("todoTaskActive_Every_Even");
        }
      });
    } else {
      this.allTask.forEach((element, index) => {
        element.classList.remove("todoTaskActive_Every_Even");
      });
    }
  }

  highlightEveryOdd(btnEachIsNotEvenState) {
    this.allTask = document.querySelectorAll(".todoTask");

    if (btnEachIsNotEvenState) {
      this.allTask.forEach((element, index) => {
        if (index % 2 === 0) {
          element.classList.add("todoTaskActive_Every_Odd_One");
        }
      });
    } else {
      this.allTask.forEach((element, index) => {
        element.classList.remove("todoTaskActive_Every_Odd_One");
      });
    }
  }
}
