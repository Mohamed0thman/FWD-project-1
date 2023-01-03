import express from "express";
import imageRoutes from "./api/image.routes";

const routes = express.Router();

routes.use("/images", imageRoutes);

export default routes;
