import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import "dotenv/config";
import cors from "cors";
import { registerRouter } from "./routes/auth/signup.router.js";
import { loginRouter } from "./routes/auth/signin.router.js";
import { auth } from "../config/firebase.js";
import { logoutRouter } from "./routes/auth/logout.router.js";

const requestLogger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.originalUrl || req.url;
  console.log(`${timestamp} - ${method} ${url}`);
  next();
};

// init express & path
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// log requests
app.use(requestLogger);

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "..", "dist")));

app.use("/signup", registerRouter);
app.use("/login", loginRouter);
app.use("/logout", logoutRouter);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});

function testFoo() {
  auth.onAuthStateChanged((user) => {
    console.log(user);
  });
}

testFoo();

export { app };
