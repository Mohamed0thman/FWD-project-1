import { Router } from "express";
import * as controllers from "../../controllers/image.controller";
import {
  existFullImage,
  existThumpImage,
  validateQuery,
} from "../../middleware/validateMiddleware";

const routes = Router();
// // api
routes
  .route("/")
  .get([validateQuery, existThumpImage, existFullImage], controllers.getImage);
export default routes;
