export default class selectionOfElements {
  constructor() {}

  highlightEveryEven(btnEveryEvenState) {
    let allTask = document.querySelectorAll(".todoTask");

    if (btnEveryEvenState) {
      allTask.forEach((element, index) => {
        if (index % 2 === 1) {
          element.classList.add("todoTaskActive_Every_Even");
        }
      });
    } else {
      allTask.forEach((element, index) => {
        element.classList.remove("todoTaskActive_Every_Even");
      });
    }
  }

  highlightEveryOdd(btnEachIsNotEvenState) {
    let allTask = document.querySelectorAll(".todoTask");

    if (btnEachIsNotEvenState) {
      allTask.forEach((element, index) => {
        if (index % 2 === 0) {
          element.classList.add("todoTaskActive_Every_Odd_One");
        }
      });
    } else {
      allTask.forEach((element, index) => {
        element.classList.remove("todoTaskActive_Every_Odd_One");
      });
    }
  }
}
