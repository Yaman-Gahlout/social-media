import { Router } from "express";
import {uploadPost} from "../controllers/Person.controller.js";
import { verifyPerson } from "../middlewares/authenticate.middleware.js";

const postRouter = Router();

//Protected Routes
postRouter.route("/create-post").post(verifyPerson,uploadPost);

export { postRouter };