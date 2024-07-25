const fetch = require('node-fetch');

async function createBoard(name, APIKey, APIToken) {
  const url = `https://api.trello.com/1/boards/?name=${encodeURIComponent(name)}&key=${APIKey}&token=${APIToken}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
    });

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

module.exports = createBoard;
