const fetch = require('node-fetch');
const getBoardIdByName = require('./getBoardIdByName');

async function createList(listName, boardName, APIKey, APIToken) {
  try {
    const boardId = await getBoardIdByName(boardName, APIKey, APIToken);
    const url = `https://api.trello.com/1/lists?name=${listName}&idBoard=${boardId}&key=${APIKey}&token=${APIToken}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const list = await response.json();
    return list;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

module.exports = createList;
