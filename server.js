import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";
import connect from "./db/connect.js";
import client from "./routes/client/clientRoutes.js";
import admin from "./routes/admin/Admin.js";
import App from "./routes/app/AppRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(express.json({ limit: "32mb", extended: true }));
app.use(express.urlencoded({ limit: "32mb", extended: true }));

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDirectory = path.join(__dirname, "./public");
app.use(express.static(publicDirectory));
connect();
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//routes
app.use("/client", client);
app.use("/admin", admin);
app.use("/app", App);
