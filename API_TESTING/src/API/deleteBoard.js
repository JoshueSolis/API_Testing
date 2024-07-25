const getBoardIdByName = require('./getBoardIdByName');
const fetch = require('node-fetch');

async function deleteBoard(boardName, APIKey, APIToken) {
  try {
    const boardId = await getBoardIdByName(boardName, APIKey, APIToken);
    const url = `https://api.trello.com/1/boards/${boardId}?key=${APIKey}&token=${APIToken}`;

    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.text();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = deleteBoard;
