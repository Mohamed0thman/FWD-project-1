import supertest from "supertest";
import app from "../../index";
import { removeAllThumbImage } from "../../utiles/sharp.utiles";
const HttpReqest = supertest(app);

describe("image end point", (): void => {
  beforeAll(removeAllThumbImage);

  it("should fail prams is not provided", async (): Promise<void> => {
    const response = await HttpReqest.get("/images");
    expect(response.status).toBe(422);
  });
  it("should fail name is not provided", async (): Promise<void> => {
    const response = await HttpReqest.get("/images?width=100&height=100");
    expect(response.status).toBe(422);
  });

  it("should fail width is not provided", async (): Promise<void> => {
    const response = await HttpReqest.get("/images?name=image&height=100");
    expect(response.status).toBe(422);
  });

  it("should fail height is not provided", async (): Promise<void> => {
    const response = await HttpReqest.get("/images?name=sunflower&width=100");
    expect(response.status).toBe(422);
  });

  it("should fail height is string", async (): Promise<void> => {
    const response = await HttpReqest.get(
      "/images?name=sunflower&width=100&height=abc"
    );
    expect(response.status).toBe(422);
  });

  it("should fail height is not vaild integer", async (): Promise<void> => {
    const response = await HttpReqest.get(
      "/images?name=sunflower&width=100&height=x100"
    );
    expect(response.status).toBe(422);
  });

  it("should fail when width is string", async (): Promise<void> => {
    const response = await HttpReqest.get(
      "/images?name=sunflower&width=abc&height=100"
    );
    expect(response.status).toBe(422);
  });

  it("should fail when height is not vaild integer", async (): Promise<void> => {
    const response = await HttpReqest.get(
      "/images?name=sunflower&width=x100&height=100"
    );
    expect(response.status).toBe(422);
  });

  it("should fail image is not found", async (): Promise<void> => {
    const response = await HttpReqest.get(
      "/images?name=notFound&width=100&height=100"
    );
    expect(response.status).toBe(404);
  });

  it("create new image", async (): Promise<void> => {
    const response = await HttpReqest.get(
      "/images?name=image&width=100&height=100"
    );

    expect(response.status).toBe(201);
  });

  it("exist image", async (): Promise<void> => {
    const response = await HttpReqest.get(
      "/images?name=image&width=100&height=100"
    );
    expect(response.status).toBe(200);
  });

  afterAll(removeAllThumbImage);
});
