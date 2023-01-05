import express, { Application, Request, Response } from "express";
import errorMiddleware from "./middleware/error.middleware";
import routes from "./routes";

const app: Application = express();
const port = process.env.PORT || 3000;

app.listen(port, (): void => {
  console.log(`Application started in http://localhost:${port}`);
});

app.use(express.json());

app.use("/api", routes);

app.get("/", (_request: Request, response: Response): void => {
  response.send("welcome ");
});
app.use((_req: Request, res: Response) => {
  res.status(404).send(
    `<div style="height:100vh;display:flex;align-items: center;justify-content: center;flex-direction: column;">
        <h3 style="color:#655DAF; font-size:80px;margin:0px">Oops!</h3>
        <h5 style="font-size:20px;text-align:center">your page you are looking for </br> can't found</h5>
      </div>`
  );
});

app.use(errorMiddleware);

export default app;
