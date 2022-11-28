/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck
 * @returns {String} número de la carta
 */
export const askForCard = (deck) => {
  if (!deck || deck.length === 0) throw new Error("There aren't cards in the deck");

  return deck.pop();
};
