import app from "../index";
import supertest from "supertest";

const HttpReqest = supertest(app);

describe("App", (): void => {
  it("App is runing", async () => {
    const response = await HttpReqest.get("/");
    expect(response.status).toBe(200);
  });
});
