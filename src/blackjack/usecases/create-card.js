/**
 * Esta función permite crear una carta en el HTML
 * @param {String} numberCard
 * @returns {HTMLImageElement} retorna una carta (imagen)
 */

export const createCard = (numberCard) => {
  const card = document.createElement("img");
  card.src = `assets/cards/${numberCard}.png`;
  card.classList.add("card");
  return card;
};
