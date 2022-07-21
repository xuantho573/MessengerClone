import express from "express";

import messagesController from "../controllers/messages.controller.js";

const messageRouter = express.Router();

messageRouter.get("/message/:id", messagesController.get);

export default messageRouter;
