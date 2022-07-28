import express, { urlencoded, json } from "express";

import * as dotenv from "dotenv";

import { configApp, configDatabase } from "./config/index.js";

dotenv.config();

const app = express();
configApp(app);
configDatabase(process.env.DATABASE_ENTRY);
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
