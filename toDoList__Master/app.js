import Queue from "./queue.js";
let list = new Queue(9);

document.addEventListener("DOMContentLoaded", () => {
  let add = document.querySelector(".add__btn");

  add.addEventListener("click", addTask);
});

const addTask = () => {
  let input = document.querySelector("#task");
  let task = input.value.trim();

  if (task) {
    list.enqueue(task);
    addTaskToHtml(task);
    input.value = "";
  }

  let done = document.querySelector(".done__btn");
  let remove = document.querySelector(".remove__btn");

  done.addEventListener("click", taskDone);
  remove.addEventListener("click", removeTask);
};

const taskDone = () => {
  let item = document.querySelector(".item");
  item.style.textDecoration = "line-through";
};

const removeTask = () => {
  let element = list.dequeue;
  removeTaskFromHtml(element);
};

const addTaskToHtml = (task) => {
  let items = document.querySelector("main ol");
  items.insertAdjacentHTML(
    "beforeend",
    `<li class="item">${task} <button class="done__btn">
          <i class="fa-solid fa-check"></i>
        </button><button class="remove__btn">
          <i class="fa-solid fa-remove"></i>
        </button></li>`
  );
};

const removeTaskFromHtml = (task) => {
  let items = document.querySelectorAll("ol li");
  items.forEach((item) => {
    if (item.textContent === task) item.remove();
  });
};
