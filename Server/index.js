dotenv.config();

import express from "express";
import bodyParser from "body-parser";
const app = express();
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

import { mongoConnect } from "./config/databaseConnect.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { corsSetting } from "./config/corsSetting.js";

const PORT = process.env.PORT || 5000;

mongoConnect();
app.use(cors(corsSetting));

app.use(
  bodyParser.urlencoded({
    limit: "10mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(express.json({ limit: "5mb" }));

app.use(cookieParser());

app.use("/", authRoutes);
app.use("/product", productRoutes);
app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`server running on port : ${PORT}`);
});
