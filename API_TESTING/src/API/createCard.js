const fetch = require('node-fetch');

async function createCard(cardName, listId, APIKey, APIToken) {
  const url = `https://api.trello.com/1/cards?idList=${listId}&name=${cardName}&key=${APIKey}&token=${APIToken}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const card = await response.json();
    return card;
  } catch (err) {
    throw err;
  }
}

module.exports = createCard;
