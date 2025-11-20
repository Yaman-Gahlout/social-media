import { Router } from "express";
import {registerPerson,loginPerson} from "../controllers/Person.controller.js";
const personRouter = Router();
//Unprotected Routes
personRouter.route("/register-person").post(registerPerson);
personRouter.route("/login-person").post(loginPerson);
//Protected Routes

export { personRouter };