import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// init express & path
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "dist")));

export { app };
