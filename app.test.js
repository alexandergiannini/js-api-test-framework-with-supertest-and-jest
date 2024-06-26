const request = require('supertest');
const app = require("./app");

describe('POST /users', () => {
  describe("given a username and password" , () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).post("/users").send({
        username: "username",
        password: "password"
      })
      console.log(response.body);
      expect(response.statusCode).toBe(200);
    })

    test("should specify json in the content type header", async () => {
      const response = await request(app).post("/users").send({
        username: "username",
        password: "password"
      })
       expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
    })

    test("response has userId", async () => {
        const response = await request(app).post("/users").send({
          username: "username",
          password: "password"
        })
         expect(response.body.userId).toBeDefined();
      })
  });

  describe("when username and password is missing", () => {
    test("should specify json in the content type header", async () => {
        const bodyData = [
          {
            username: "username"
          },
          {
            password: "password"
          },
          {}
        ]
        for (const body of bodyData) {
          const response = await request(app).post("/users").send(body);
          expect(response.statusCode).toBe(400);
        }
      })
  });
})