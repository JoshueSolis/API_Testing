const fetch = require('node-fetch');

async function updateBoard(id, newBoardName, APIKey, APIToken) {
  const url = `https://api.trello.com/1/boards/${id}?key=${APIKey}&token=${APIToken}`;

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        Accept: 'aplication/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: newBoardName,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = updateBoard;
