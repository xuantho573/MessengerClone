import express from "express";

import { messagesController } from "../controllers/index.js";

const messageRouter = express.Router();

messageRouter
    .get("/message/:id", messagesController.get)
    .post("/message/post", messagesController.post);

export default messageRouter;
