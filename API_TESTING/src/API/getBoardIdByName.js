const fetch = require('node-fetch');

async function getBoardIdByName(boardName, APIKey, APIToken) {
  const url = `https://api.trello.com/1/members/me/boards?key=${APIKey}&token=${APIToken}`;

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

    const boards = await response.json();
    const board = boards.find((b) => b.name === boardName);

    if (!board) {
      throw new Error(`Board not found`);
    }

    return board.id;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = getBoardIdByName;
