const request = require("supertest");
const createBoard = require("../API/createBoard");
const app = require("./../API/express/app");
require('dotenv').config();

const boardName = "Test Board";
const newBoardName = "Board updated";
const boardId = "667484edb75dcce3a7698a62";
const boardIdToChange = "6688912f6333488fc0c0a9e0";
// const APIKey = ;
// const APIToken = ;
// Por seguridad el token fue removido de esta parte del codigo revisar el archivo .env

describe("Trello API Tests", () => {
  it("should create a new board", async () => {
    const response = await createBoard(boardName, APIKey, APIToken);

    expect(response).toBeDefined();
    expect(response.name).toBe(boardName);
    expect(response.id).toBeDefined();
  }, 10000);

  it("should get a Trello Board", async () => {
    const response = await request(app).get("/get-board").query({
      id: boardId,
      APIKey: APIKey,
      APIToken: APIToken,
    });

    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
    expect(response.body.id).toBe(boardId);
    expect(response.body.name).toBeDefined();
  }, 10000);

  it("should update a Trello board", async () => {
    const response = await request(app).put("/update-board").send({
      id: boardIdToChange,
      newBoardName: newBoardName,
      APIKey: APIKey,
      APIToken: APIToken,
    });

    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
    expect(response.body.name).toBe(newBoardName);
  }, 10000);

  it("should delete a Trello Board", async () => {
    const response = await request(app).delete("/delete-board").send({
      boardName: boardName,
      APIKey: APIKey,
      APIToken: APIToken,
    });

    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });
});
