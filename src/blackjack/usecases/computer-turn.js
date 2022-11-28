import { askForCard, cardValue, createCard } from "./";

/**
 * Función para el turno de la computadora
 * @param {Number} pointsPlayer
 * @param {Array<String>} deck
 * @param {HTMLElement} pointsHTML
 */
export const computerTurn = (pointsPlayer, pointsHTML, computerCards, deck = []) => {
  if (!pointsPlayer) throw new Error("pointsPlayer is required");
  if (!pointsHTML) throw new Error("pointsHTML is required");
  if (!computerCards) throw new Error("computerCards is required");

  let pointsComputer = 0;

  do {
    const card = askForCard(deck);
    pointsComputer += cardValue(card);

    computerCards.append(createCard(card));
    pointsHTML.textContent = pointsComputer;

    if (pointsPlayer > 21) break;
  } while (pointsPlayer > pointsComputer && pointsPlayer <= 21);

  setTimeout(() => {
    pointsPlayer === pointsComputer
      ? alert("Tie, no one wins")
      : pointsPlayer < pointsComputer
      ? alert("You won 🥳")
      : alert("You lost 😥");
  }, 500);
};
