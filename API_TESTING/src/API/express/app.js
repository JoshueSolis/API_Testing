const express = require('express');
const app = express();
const getBoard = require('./../getBoard');
const updateBoard = require('./../updateBoard');
const deleteBoard = require('./../deleteBoard');
const createList = require('./../createList');
const createCard = require('./../createCard');
const updateCard = require('./../updateCard');

app.use(express.json());

app.get('/get-board', async (req, res) => {
  const { boardName, APIKey, APIToken } = req.query;

  try {
    const board = await getBoard(boardName, APIKey, APIToken);
    res.status(200).json(board);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/update-board', async (req, res) => {
  const { id, newBoardName, APIKey, APIToken } = req.body;

  try {
    const result = await updateBoard(id, newBoardName, APIKey, APIToken);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/delete-board', async (req, res) => {
  const { boardName, APIKey, APIToken } = req.body;

  try {
    const result = await deleteBoard(boardName, APIKey, APIToken);
    res.status(200).json({ message: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/create-list', async (req, res) => {
  const { listName, boardName, APIKey, APIToken } = req.body;

  try {
    const list = await createList(listName, boardName, APIKey, APIToken);
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/create-card', async (req, res) => {
  const { cardName, listId, APIKey, APIToken } = req.body;

  try {
    const card = await createCard(cardName, listId, APIKey, APIToken);
    res.status(200).json();
  } catch (err) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/update-card', async (req, res) => {
  const { cardId, newCardName, APIKey, APIToken } = req.body;

  try {
    const updatedCard = await updateCard(cardId, newCardName, APIKey, APIToken);
    res.status(200).json(updatedCard);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = app;
