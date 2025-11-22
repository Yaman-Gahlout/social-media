import { Router } from "express";
import {uploadPost,getAllPosts,deletePost} from "../controllers/Person.controller.js";
import { verifyPerson } from "../middlewares/authenticate.middleware.js";

const postRouter = Router();

//Protected Routes
postRouter.route("/create-post").post(verifyPerson,uploadPost);
postRouter.route("/getAllPosts").get(verifyPerson,getAllPosts);
postRouter.route("/deletePost/:post_id").delete(verifyPerson,deletePost);
export { postRouter };