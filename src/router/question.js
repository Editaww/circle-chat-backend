import express from "express";

import {
  CREATE_QUESTION,
  GET_QUESTIONS,
  DELETE_QUESTION_BY_ID,
} from "../controller/question.js";
import auth from "../middleware/auth.js";

const router = express.Router();
router.post("/questions", auth, CREATE_QUESTION);
router.get("/questions", auth, GET_QUESTIONS);
router.delete("/questions/:id", auth, DELETE_QUESTION_BY_ID);

export default router;
