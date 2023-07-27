import express from "express";
import { registerUser } from "../../models/auth/signup.model.js";

const registerRouter = express.Router();
registerRouter.post("/", registerUser);

export { registerRouter };
