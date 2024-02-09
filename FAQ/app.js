const content = Array.from(document.getElementsByClassName("content"));

let items = [];

for (let i = 0; i < content.length; i++) {
  content[i].addEventListener("click", () => {
    const items = content.filter((item) => item.classList.contains("active"));
    items.forEach((item) => {
      item.classList.remove("active");
    });
      content[i].classList.toggle("active");
  });
}
