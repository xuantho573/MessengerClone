import cors from "cors";

import {
    userRouter,
    messageRouter,
    conversationRouter,
} from "../routes/index.js";

const configApp = (app, express) => {
    // Config dependencies
    app.use(cors(), express.static("/resources"));
    app.post(express.urlencoded({ extended: true }), express.json());

    // Config routers
    app.use("/api/user", userRouter);
    app.use("/api/message", messageRouter);
    app.use("/api/conversation", conversationRouter);

    app.get("/", (req, res, next) => {
        res.send(`<div style="padding:auto;text-align:center;margin-top:200px">
        <h1>DEVELOPING</h1>
        </div>`);
        next();
    });
};

export default configApp;
