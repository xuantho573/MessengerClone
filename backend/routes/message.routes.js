import express from "express";

import { messagesController } from "../controllers/index.js";

const messageRouter = express.Router();

messageRouter
    .get("/:id", messagesController.get)
    .post("/post", messagesController.post);

export default messageRouter;
