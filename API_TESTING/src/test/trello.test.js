const request = require('supertest');
const createBoard = require('../API/createBoard');
const app = require('./../API/express/app');
require('dotenv').config();

const boardName = 'Test Board';
const newBoardName = 'Board updated';
const listName = 'Lista 1';
const boardIdToChange = '6688912f6333488fc0c0a9e0';
const cardName = 'Test Card';
const cardId = '6691b569b730eee1cf7d70c7';
const newCardName = 'New Name';
const listId = '66919690c29073b90cb44386';
const APIKey = process.env.APIKey;
const APIToken = process.env.APIToken;

describe('Trello API Tests', () => {
  it('should create a new board', async () => {
    const response = await createBoard(boardName, APIKey, APIToken);

    expect(response).toBeDefined();
    expect(response.name).toBe(boardName);
    expect(response.id).toBeDefined();
  });

  it('should get a Trello Board', async () => {
    const response = await request(app).get('/get-board').query({
      boardName: boardName,
      APIKey: APIKey,
      APIToken: APIToken,
    });

    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.body).toBeDefined();
    expect(response.body.name).toBe(boardName);
  });

  it('should update a Trello board', async () => {
    const response = await request(app).put('/update-board').send({
      id: boardIdToChange,
      newBoardName: newBoardName,
      APIKey: APIKey,
      APIToken: APIToken,
    });

    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.body).toBeDefined();
    expect(response.body.name).toBe(newBoardName);
  });

  it("should delete the 'Test Board' board", async () => {
    const response = await request(app).delete('/delete-board').send({
      boardName: boardName,
      APIKey: APIKey,
      APIToken: APIToken,
    });

    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.body).toBeDefined();
  });

  it("should delete the 'Board 1' board", async () => {
    const response = await request(app).delete('/delete-board').send({
      boardName: 'Board 1',
      APIKey: APIKey,
      APIToken: APIToken,
    });

    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.body).toBeDefined();
  });

  it("should create a new list in 'Board Updated' ", async () => {
    const response = await request(app).post('/create-list').send({
      listName: listName,
      boardName: newBoardName,
      APIKey: APIKey,
      APIToken: APIToken,
    });

    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.body).toBeDefined();
    expect(response.body.name).toBe(listName);
  });

  it("should create a new card in the 'Test cards' board y list", async () => {
    const response = await request(app).post('/create-card').send({
      cardName: cardName,
      listId: listId,
      APIKey: APIKey,
      APIToken: APIToken,
    });

    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.body).toBeDefined();
  });

  it('should update the name of a card', async () => {
    const response = await request(app).put('/update-card').send({
      cardId: cardId,
      newCardName: newCardName,
      APIKey: APIKey,
      APIToken: APIToken,
    });

    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.body).toBeDefined();
  });
});
