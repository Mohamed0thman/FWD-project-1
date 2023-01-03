import { NextFunction, Request, Response } from "express";
import fs from "fs";

import { fullPath, thumpPath } from "../paths";
import { isInt } from "../utiles/utiles";

export const validateQuery = (
  request: Request,
  _response: Response,
  next: NextFunction
): void => {
  console.log("request.query", request.query);

  for (const item in request.query) {
    if (!request.query[item]) {
      throw {
        message: ` ${item} is required `,
        status: 400,
        error: new Error(),
      };
    }
    console.log(item, /^\d+$/.test(request.query[item] as string));

    if (
      (item === "width" || item === "height") &&
      !isInt(request.query[item] as string)
    ) {
      throw {
        message: ` ${item} must be integer `,
        status: 400,
        error: new Error(),
      };
    }
  }
  next();
};

export const existFullImage = (
  request: Request,
  _response: Response,
  next: NextFunction
): void => {
  console.log("request.query", request.query);
  const file = `${fullPath}/${request.query.filename}.jpg`;
  if (!fs.existsSync(file)) {
    throw new Error("image not found");
  }
  next();
};

export const existThumpImage = (
  request: Request,
  response: Response,
  next: NextFunction
): void => {
  const { filename, width, height } = request.query;
  const thumpFile = `${thumpPath}/${filename}-${width}x${height}.jpg`;

  if (fs.existsSync(thumpFile)) {
    return response.status(200).sendFile(thumpFile);
  }
  next();
};
