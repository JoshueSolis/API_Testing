const fetch = require("node-fetch");

async function getBoard(boardId, APIKey, APIToken) {
  const url = `https://api.trello.com/1/boards/${boardId}?key=${APIKey}&token=${APIToken}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        'Accept': "application/json",
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
}

module.exports = getBoard;
