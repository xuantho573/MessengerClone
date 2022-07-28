import express, { urlencoded, json } from "express";

import * as dotenv from "dotenv";

import configApp from "./configApp.js";

dotenv.config();

const app = express();
configApp(app);
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
