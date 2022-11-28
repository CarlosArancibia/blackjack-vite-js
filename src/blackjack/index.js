import { createDeck, askForCard, cardValue, computerTurn, createCard } from "./usecases";

let deck = [];
const types = ["C", "D", "H", "S"];
const specials = ["A", "J", "Q", "K"];

let pointsPlayer = 0,
  pointsComputer = 0;

//Referencia HTML
const d = document,
  btnAskCard = d.getElementById("btn-ask"),
  btnStop = d.getElementById("btn-stop"),
  btnPlayAgain = d.getElementById("btn-new"),
  pointsHTML = d.querySelectorAll("small"),
  playerCards = d.getElementById("cards-player"),
  computerCards = d.getElementById("cards-computer");

deck = createDeck(types, specials);

// Eventos
btnAskCard.addEventListener("click", () => {
  const card = askForCard(deck);
  pointsPlayer += cardValue(card);

  playerCards.append(createCard(card));

  btnStop.disabled = false;

  if (pointsPlayer > 21) {
    console.warn("Sorry, you lost 😢");
    btnAskCard.disabled = true;
    btnStop.disabled = true;

    computerTurn(pointsPlayer, pointsHTML[1], computerCards, deck);
  } else if (pointsPlayer === 21) {
    console.warn("21, great! 😎");
    btnAskCard.disabled = true;
    btnStop.disabled = true;

    computerTurn(pointsPlayer, pointsHTML[1], computerCards, deck);
  }

  pointsHTML[0].textContent = pointsPlayer;
});

btnStop.addEventListener("click", () => {
  btnAskCard.disabled = true;
  btnStop.disabled = true;
  computerTurn(pointsPlayer, pointsHTML[1], computerCards, deck);
});

btnPlayAgain.addEventListener("click", () => {
  btnAskCard.disabled = false;
  btnStop.disabled = true;
  pointsComputer = 0;
  pointsPlayer = 0;

  pointsHTML.forEach((point) => {
    point.textContent = 0;
  });

  playerCards.innerHTML = "";
  computerCards.innerHTML = "";

  deck = createDeck(types, specials);
});
