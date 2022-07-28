import cors from "cors";
import express from "express";

import { userRouter, messageRouter } from "../routes/index.js";

const configApp = (app) => {
    // Config dependencies
    app.use(cors(), express.static("/resources"));
    app.post(express.urlencoded({ extended: false }), express.json());

    // Config routers
    app.use("/api", [userRouter, messageRouter]);

    app.get("/", (req, res, next) => {
        res.send(`<div style="padding:auto;text-align:center;margin-top:200px">
        <h1>DEVELOPING</h1>
        </div>`);
        next();
    });
};

export default configApp;
