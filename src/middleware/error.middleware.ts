import { NextFunction, Request, Response } from "express";
import Error from "../interfaces/error.interface";

const htmlTemplate = (message: string): string => {
  return `
  <div style="height:100vh;display:flex;align-items: center;justify-content: center;">
    <h1 style="color:red">
      ${message}
    </h1>
  </div>
  `;
};

const errorMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  
  const status = error.status || 500;
  const message = error.message || "opps";
  res.status(status).send(htmlTemplate(message));
};

export default errorMiddleware;
