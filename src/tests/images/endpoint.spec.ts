import supertest from "supertest";
import app from "../../index";
import { removeAllThumbImage } from "../../utiles/sharp.utiles";
const HttpReqest = supertest(app);

describe("image end point", (): void => {
  beforeAll(removeAllThumbImage);

  it("should fail prams is not provided", async (): Promise<void> => {
    const response = await HttpReqest.get("/api/images");
    expect(response.status).toBe(422);
  });
  it("should fail filename is not provided", async (): Promise<void> => {
    const response = await HttpReqest.get("/api/images?width=100&height=100");
    expect(response.status).toBe(422);
  });

  it("should fail width is not provided", async (): Promise<void> => {
    const response = await HttpReqest.get(
      "/api/images?filename=image&height=100"
    );
    expect(response.status).toBe(422);
  });

  it("should fail height is not provided", async (): Promise<void> => {
    const response = await HttpReqest.get(
      "/api/images?filename=sunflower&width=100"
    );
    expect(response.status).toBe(422);
  });

  it("should fail height is string", async (): Promise<void> => {
    const response = await HttpReqest.get(
      "/api/images?filename=sunflower&width=100&height=abc"
    );
    expect(response.status).toBe(422);
  });

  it("should fail height is not vaild integer", async (): Promise<void> => {
    const response = await HttpReqest.get(
      "/api/images?filename=sunflower&width=100&height=-22"
    );
    expect(response.status).toBe(422);
  });

  it("should fail  width is string", async (): Promise<void> => {
    const response = await HttpReqest.get(
      "/api/images?filename=sunflower&width=abc&height=100"
    );
    expect(response.status).toBe(422);
  });

  it("should fail  width is not vaild integer", async (): Promise<void> => {
    const response = await HttpReqest.get(
      "/api/images?filename=sunflower&width=x100&height=100"
    );
    expect(response.status).toBe(422);
  });

  it("should fail image is not found", async (): Promise<void> => {
    const response = await HttpReqest.get(
      "/api/images?filename=notFound&width=100&height=100"
    );
    expect(response.status).toBe(404);
  });

  it("create new image", async (): Promise<void> => {
    const response = await HttpReqest.get(
      "/api/images?filename=sunflower&width=100&height=100"
    );

    expect(response.status).toBe(200);
  });

  it("exist image", async (): Promise<void> => {
    const response = await HttpReqest.get(
      "/api/images?filename=sunflower&width=100&height=100"
    );
    expect(response.status).toBe(200);
  });

  afterAll(removeAllThumbImage);
});
