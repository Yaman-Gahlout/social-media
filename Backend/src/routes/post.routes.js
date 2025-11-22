import { Router } from "express";
import {uploadPost,getAllPosts,deletePost,likePost,getPersonDetails} from "../controllers/Person.controller.js";
import { verifyPerson } from "../middlewares/authenticate.middleware.js";

const postRouter = Router();

//Protected Routes
postRouter.route("/create-post").post(verifyPerson,uploadPost);
postRouter.route("/getAllPosts").get(verifyPerson,getAllPosts);
postRouter.route("/getCurrentUser").get(verifyPerson,getPersonDetails);
postRouter.route("/deletePost/:post_id").delete(verifyPerson,deletePost);
postRouter.route("/likePost/:post_id").post(verifyPerson,likePost);
export { postRouter };