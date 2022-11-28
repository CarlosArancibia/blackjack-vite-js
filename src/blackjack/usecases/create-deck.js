/**
 * This function return a new deck
 * @param {Array<String>} cardTypes example: ["C", "D", "H", "S"]
 * @param {Array<String>} specialTypes example: ["A", "J", "Q", "K"]
 * @returns {Array<String>}
 */
export const createDeck = (cardTypes, specialTypes) => {
  if (!cardTypes || cardTypes.length == 0) throw new Error("cardTypes is required");
  if (!specialTypes || specialTypes.length == 0) throw new Error("specialTypes is required");

  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (const type of cardTypes) {
      deck.push(i + type);
    }
  }

  for (const special of specialTypes) {
    for (const type of cardTypes) {
      deck.push(special + type);
    }
  }

  deck = deck
    .map((val) => ({ val, sort: Math.random() }))
    .sort((a, b) => b.sort - a.sort)
    .map(({ val }) => val);

  return deck;
};
