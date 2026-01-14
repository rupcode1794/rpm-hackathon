import express from "express";
import { createMLResult, getMlResult } from "../controllers/mlController.js";
/* import { protect } from "../middleware/authMiddleware.js"; */

const router = express.Router();

router.post("/",  createMLResult);
router.get("/",  getMlResult);

export default router;
