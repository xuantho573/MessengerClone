import express from "express";

import MessagesController from "../controllers/messages.controller.js";

const messageRouter = express.Router();

messageRouter
    .get("/message/:id", MessagesController.get)
    .post("/message/post", MessagesController.post);

export default messageRouter;
