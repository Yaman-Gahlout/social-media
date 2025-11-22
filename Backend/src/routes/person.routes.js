import { Router } from "express";
import {registerPerson,loginPerson,logoutPerson} from "../controllers/Person.controller.js";
import { verifyPerson } from "../middlewares/authenticate.middleware.js";
const personRouter = Router();
//Unprotected Routes
personRouter.route("/register-person").post(registerPerson);
personRouter.route("/login-person").post(loginPerson);
//Protected Routes
personRouter.route("/logout-person").get(verifyPerson,logoutPerson);
export { personRouter };