import express from "express";

import { UsersController } from "../controllers/index.js";

const userRouter = express.Router();

userRouter.get("/user/:username", UsersController.get);
// .post('/user', UsersController.post)

export default userRouter;
