/**
 * Esta función me devuelve el valor de la carta
 * @param {String} card
 * @returns {Number} valor de la carta
 */

export const cardValue = (card) => {
  const value = card.slice(0, -1);
  return !isNaN(value) ? +value : value === "A" ? 11 : 10;
};
