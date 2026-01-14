import express from "express";
import { assignDeviceToPatient } from "../controllers/deviceController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Assign or reassign device to logged-in patient
router.post("/assign", protect, assignDeviceToPatient);

export default router;
