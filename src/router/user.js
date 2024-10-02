import express from "express";
import { LOGIN, REGISTER } from "../controller/user.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/register", REGISTER);
router.post("/login", LOGIN);

export default router;
