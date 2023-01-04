import resizeImage, { removeAllThumbImage } from "../../utiles/sharp.utiles";

describe("images", (): void => {
  beforeAll(removeAllThumbImage);

  it("process un found image", async (): Promise<void> => {
    await expectAsync(resizeImage("notFound", 100, 100)).toBeRejected();
  });

  it("process image", async (): Promise<void> => {
    await expectAsync(resizeImage("sunflower", 100, 100)).toBeResolved();
  });

  afterAll(removeAllThumbImage);
});
