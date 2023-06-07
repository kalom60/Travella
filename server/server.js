import express from "express";
import cors from "cors";
require("express-async-errors");

import errorHandlerMiddleware from "./middlewares/errorHandler";
import prisma from "./prisma/prisma";
import postRouter from "./router/postRouter";
import userRouter from "./router/userRouter";
import commentRouter from "./router/commentRouter";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());
app.use("/api", postRouter);
app.use("/api", userRouter);
app.use("/api", commentRouter);
app.use(errorHandlerMiddleware);

async function checkDBConnection() {
  try {
    await prisma.$connect();
    app.listen(PORT, () => {
      console.log(`App running at port ${PORT}`);
    });
  } catch (err) {
    console.log("DB is not connected");
    process.exit(1);
  }
}

checkDBConnection();
