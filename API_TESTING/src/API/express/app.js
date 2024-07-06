const express = require('express');
const app = express();
const getBoard = require('./../getBoard');
const updateBoard = require('./../updateBoard');
const deleteBoard = require('./../deleteBoard');

app.use(express.json());

app.get('/get-board', async (req, res) => {
    const {id, APIKey, APIToken} = req.query;

    try {
        const result = await getBoard(id, APIKey, APIToken);
        res.status(200).json(result);
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

module.exports = app;