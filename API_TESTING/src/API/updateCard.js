const fetch = require('node-fetch');

async function updateCard(cardId, newCardName, APIKey, APIToken) {
  try {
    const url = `https://api.trello.com/1/cards/${cardId}?name=${newCardName}&key=${APIKey}&token=${APIToken}`;

    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const updateCard = await response.json();
    return updateCard;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

module.exports = updateCard;
