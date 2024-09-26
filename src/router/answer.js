import express from "express";

import {
  CREATE_ANSWER,
  GET_ANSWER,
  LIKE_ANSWER,
  DISLIKE_ANSWER,
  DELETE_ANSWER_BY_ID,
} from "../controller/answer.js";
import auth from "../middleware/auth.js";

const router = express.Router();
router.post("/questions/:id/answers", auth, CREATE_ANSWER);
router.get("/questions/:id/answers", auth, GET_ANSWER);
router.post("/questions/:id/answers/like", auth, LIKE_ANSWER);
router.post("/questions/:id/answers/dislike", auth, DISLIKE_ANSWER);
router.delete("/answers/:id", auth, DELETE_ANSWER_BY_ID);

export default router;
