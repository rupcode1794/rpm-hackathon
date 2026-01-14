import express from "express";
import {
  registerPatient,
  loginPatient,
  logoutPatient,
  getMe,
} from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";
import { authLimiter } from "../middleware/authLimiter.js";

const router = express.Router();

router.post("/register", authLimiter, registerPatient);
router.post("/login", authLimiter, loginPatient);
router.post("/logout", protect,logoutPatient);
router.get("/me", protect, getMe);

export default router;
