import sharp from "sharp";
import { fullPath, thumpPath } from "../paths";

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
    console.log("res", result);

    return output;
  } catch (error) {
    throw error;
  }
}
export default resizeImage;
