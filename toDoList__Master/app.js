import Queue from "./queue.js";
let list = new Queue(9);

document.addEventListener("DOMContentLoaded", () => {
  let add = document.querySelector(".add__btn");
  let remove = document.querySelector(".remove__btn");

  add.addEventListener("click", addTask);
  remove.addEventListener("click", removeTask);
});

// text HTML
const addTaskToHtml = (task) => {
  let items = document.querySelector("main ol");
  items.insertAdjacentHTML(
    "beforeend",
    `<li class="item">${task}<button class="done__btn"><i class="fa-solid fa-check"></i></button>`
  );
};

const removeTaskFromHtml = (item) => {
  let ol = Array.from(document.querySelectorAll("ol li"));
  console.log(ol);
  ol.forEach((element) => {
    if (element.textContent === item) {
      element.remove()
    }
  });
};

const addTask = () => {
  let input = document.querySelector("#task");
  let task = input.value.trim();

  if (task) {
    list.enqueue(task);
    addTaskToHtml(task);
    input.value = "";
    input.focus();
  }

  let done = document.querySelector(".done__btn");

  done.addEventListener("click", taskDone);
};

const taskDone = () => {
  let item = document.querySelector(".item");
  item.style.textDecoration = "line-through";
};

const removeTask = () => {
  let item = list.dequeue();
  console.log(`${item} has has been deleted`);
  removeTaskFromHtml(item);
};
