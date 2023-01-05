import path from "path";
import sharp from "sharp";
import { fullPath, thumpPath } from "../paths";
import fs from "fs";

async function resizeImage(
  filename: string,
  width: number,
  height: number
): Promise<string> {
  try {
    const imagePath = `${fullPath}/${filename}.jpg`;
    const output = `${thumpPath}/${filename}-${width}x${height}.jpg`;
    const result = await sharp(imagePath)
      .resize({
        width,
        height,
      })
      .toFile(output)
      .catch((error) => {
        throw error;
      });

    return output;
  } catch (error) {
    throw error;
  }
}

export const removeAllThumbImage = (): void => {
  fs.readdirSync(thumpPath).forEach((item) => {
    fs.unlinkSync(path.join(thumpPath, `/${item}`));
  });
};
export default resizeImage;
