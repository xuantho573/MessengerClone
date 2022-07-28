import express from "express";

import { usersController } from "../controllers/index.js";

const userRouter = express.Router();

userRouter.get("/user/:username", usersController.get);
// .post('/user', usersController.post)

export default userRouter;
