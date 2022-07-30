import express from "express";

import { conversationsController } from "../controllers/index.js";

const conversationRouter = express.Router();

conversationRouter.get("/:id", conversationsController.get);

export default conversationRouter;
