import express from "express";
import {
  getVitals,
  addVitals,
  getVitalsToML,
} from "../controllers/vitalsController.js";
import { protect } from "../middleware/authMiddleware.js";
import { deviceAuth } from "../middleware/deviceMiddleware.js";
import { deviceLimiter } from "../middleware/devicelimiter.js";
const router = express.Router();

//store incoming vitals(for hardware)
router.post("/", deviceLimiter, deviceAuth, addVitals);
//show vitals(for frontend)
router.get("/", protect, getVitals);
//get vitals for ml (for ml)
router.get("/ml", getVitalsToML);

export default router;
