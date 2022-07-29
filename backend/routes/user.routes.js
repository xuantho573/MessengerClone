import express from "express";

import { usersController } from "../controllers/index.js";

const userRouter = express.Router();

userRouter
    .get("/:username", usersController.get)
    .post("/register", usersController.register)
    .post("/login", usersController.login);

export default userRouter;
