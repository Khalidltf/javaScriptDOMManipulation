import Queue from "./queue.js";
let list = new Queue(9);

document.addEventListener("DOMContentLoaded", () => {
  let add = document.querySelector(".add__btn");
  let remove = document.querySelector(".remove__btn");

  add.addEventListener("click", addTask);
  remove.addEventListener("click", removeTask);

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("done__btn")) {
      e.target.parentElement.classList.toggle("completed");
    }
  });
});

// text HTML
const addTaskToHtml = (task) => {
  let items = document.querySelector("main ol");
  items.insertAdjacentHTML(
    "beforeend",
    `<li class="item">${task}<button class="done__btn"><i class="fa-solid fa-check"></i></button></li>`
  );
};

const removeTaskFromHtml = (item) => {
  let ol = Array.from(document.querySelectorAll("ol li"));
  ol.forEach((element) => {
    if (element.textContent === item) {
      element.remove();
    }
  });
};

// add remove check Task functions

const addTask = () => {
  let input = document.querySelector("#task");
  let task = input.value.trim();

  if (task) {
    list.enqueue(task);
    addTaskToHtml(task);
    input.value = "";
    input.focus();
  } else {
    alert("Please enter a task");
  }
};

const removeTask = () => {
  let item = list.dequeue();
  console.log(`${item} has has been deleted`);
  removeTaskFromHtml(item);
};
