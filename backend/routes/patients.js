import express from "express";
import { getPatient, getPatients } from "../controllers/patientController.js";
import { protect } from "../middleware/authMiddleware.js";


const router = express.Router();


 router.get("/", protect, getPatients); //get all patients
router.get("/:id", protect, getPatient);//get a single patient

export default router;
