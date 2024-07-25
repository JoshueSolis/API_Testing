const fetch = require('node-fetch');
const getBoardIdByName = require('./getBoardIdByName');

async function getBoard(boardName, APIKey, APIToken) {
  const boardId = await getBoardIdByName(boardName, APIKey, APIToken);
  const url = `https://api.trello.com/1/boards/${boardId}?key=${APIKey}&token=${APIToken}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const board = await response.json();
    return board;
  } catch (err) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
}

module.exports = getBoard;
