const fetch = require('node-fetch');

async function createCard(cardName, listId, APIKey, APIToken) {
  const url = `https://api.trello.com/1/cards?idList=${listId}&name=${cardName}&key=${APIKey}&token=${APIToken}`;

  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .catch((err) => {
      throw err;
    });
}

module.exports = createCard;
