import express, { urlencoded, json } from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import userRouter from "./routes/user.routes.js";
import messageRouter from "./routes/message.routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());

app.post(urlencoded({ extended: false }), json());

app.use(express.static("/resources"));
app.use("/api", [userRouter, messageRouter]);

app.get("/", (req, res, next) => {
    res.send(`<div style="padding:auto;text-align:center;margin-top:200px">
    <h1>DEVELOPING</h1>
    </div>`);
    next();
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
