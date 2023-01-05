import app from "../index";
import supertest from "supertest";

const HttpReqest = supertest(app);

describe("App", (): void => {
  it("App is runing", async () => {
    const response = await HttpReqest.get("/");
    expect(response.status).toBe(200);
  });
});

describe("user lost", (): void => {
  it("enter api not exist", async () => {
    const response = await HttpReqest.get("/api");
    expect(response.status).toBe(404);
  });
});
