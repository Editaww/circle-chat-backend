// import express from "express";

// import { LOGIN, REGISTER } from "../controller/user.js";

// const router = express.Router();
// router.post("/register", REGISTER);
// router.post("/login", LOGIN);

// export default router;

import express from "express";
import { LOGIN, REGISTER } from "../controller/user.js";
import auth from "../middleware/auth.js"; // Importuok autentifikacijos middleware

const router = express.Router();

router.post("/register", REGISTER);
router.post("/login", LOGIN);
// router.get("/login/validate", auth, (req, res) => {
//   // Jei žetonas galioja, šis maršrutas grąžins sėkmės pranešimą
//   return res.status(200).json({ message: "Token is valid" });
// });

export default router;
