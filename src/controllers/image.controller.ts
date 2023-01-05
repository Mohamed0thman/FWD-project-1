import { Request, Response, NextFunction } from "express";
import resizeImage from "../utiles/sharp.utiles";

export const getImage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const filename = req.query.filename as string,
      width: number = parseInt(req.query.width as string),
      height: number = parseInt(req.query.height as string);

    const image = await resizeImage(filename, width, height);

    return res.status(200).sendFile(image);
  } catch (err) {
    next(err);
  }
};
