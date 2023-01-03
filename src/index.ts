import express, { Application, Request, Response } from "express";
import errorMiddleware from "./middleware/error.middleware";
import routes from "./routes";

const app: Application = express();
const port = process.env.PORT || 3000;

app.listen(port, (): void => {
  console.log(`\nApplication started in http://localhost:${port}`);
});

app.use(express.json());

app.use("/api", routes);

app.use((_req: Request, res: Response) => {
  res.status(404).json({
    message: "ohh you are lost",
  });
});

app.use(errorMiddleware);

app.get("/", (request: Request, response: Response): void => {
  response.send("welcome ");
});

export default app;
