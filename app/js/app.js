// import $ from 'jquery'; window.jQuery = $; window.$ = $ // import module example (npm i -D jquery)
import CardsService from "./services/cards.service";

const cardsService = new CardsService();
const loginBtn = document.getElementById("loginBtn");
const createNewMeet = document.getElementById("createNewMeet");

document.addEventListener("DOMContentLoaded", () => {
  // Custom JS
  const root = document.getElementById("root");

  const writeMarkup = (cards) => {
    const ul = document.createElement("ul");
    for (const card of cards) {
      ul.innerHTML += `<li>${card.content.name}</li>`;
    }
    root.appendChild(ul);
  };

  const getAllCards = async () => {
    const data = await cardsService.fetchCards();
    writeMarkup(data);
  };

  getAllCards();
});

loginBtn.addEventListener("click", () => {
  loginBtn.style = "display:none";
  createNewMeet.style = "display:block";
  loginBtn.preventDefault()
});
