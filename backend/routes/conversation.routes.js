import express from "express";

import { ConversationsController } from "../controllers/index.js";

const conversationRouter = express.Router();

conversationRouter.get("/conversation/:id", ConversationsController.get);

export default conversationRouter;
