import express from "express";
import { logoutUser } from "../../models/auth/logout.model.js";

const logoutRouter = express.Router();
logoutRouter.get("/", logoutUser);

export { logoutRouter };
