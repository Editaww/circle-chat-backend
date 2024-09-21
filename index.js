import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import questionsRouter from "./src/router/question.js";
import answersRouter from "./src/router/answer.js";
import usersRouter from "./src/router/user.js";

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_CONNECTION)
  .then(() => console.log("Connected to DB"));

app.use(questionsRouter);
app.use(answersRouter);
app.use(usersRouter);

app.use((req, res) => {
  return res.status(404).json({ message: "This endpoint does not exist" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
