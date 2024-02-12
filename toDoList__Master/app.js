import Queue from "./queue.js";
let list = new Queue(9);

let add = document.querySelector(".add__btn");
let remove = document.querySelector(".remove__btn");
add.addEventListener("click", () => {
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
});

remove.addEventListener("click", (item) => {
  let ol = Array.from(document.querySelectorAll("ol li"));
  console.log(ol);
  ol.forEach((element) => {
    if (element.textContent === item) {
      element.remove();
    }
  });
});

// text HTML
const addTaskToHtml = (task) => {
  let items = document.querySelector("main ol");
  items.insertAdjacentHTML(
    "beforeend",
    `<li class="item">${task}</li><button class="done__btn"><i class="fa-solid fa-check"></i></button>`
  );
};

// add remove check Task functions
document.querySelector(".done__btn");
const removeTask = () => {
  let item = list.dequeue();
  console.log(`${item} has has been deleted`);
  removeTaskFromHtml(item);
};
