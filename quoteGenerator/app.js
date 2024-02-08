import quotes from "./quotes.json" assert { type: "json" };

let button = document.querySelector(".btn");
let quote = document.querySelector(".quote");
let author = document.querySelector(".author");

function generateQuotes() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  let ourQuote = quotes[randomIndex].quote;
  let ourAuthor = quotes[randomIndex].author;

  quote.innerText = ourQuote;
  author.innerText = ourAuthor;
}

button.addEventListener("click", generateQuotes);
