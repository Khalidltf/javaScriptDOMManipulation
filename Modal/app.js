let open = document.querySelector("#open");
let container = document.querySelector("div");
let close = document.querySelector(".close");

open.addEventListener("click", () => {
  container.style.display = "block";
  open.setAttribute("class", "cachecahe");
});

close.addEventListener("click", () => {
  container.style.display = "none";
  open.removeAttribute("disabled", "");
  open.removeAttribute("class", "cachecahe");
});

window.addEventListener("click", (e) => {
  if (e.target === container) {
    e.target.style.display = "none";
    open.removeAttribute("class", "cachecahe");
  }
});
