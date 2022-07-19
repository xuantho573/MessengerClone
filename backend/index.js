import express from "express";
import * as dotenv from "dotenv";

import userRouter from "./routes/user.routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.static("/resources"));
app.use(userRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
