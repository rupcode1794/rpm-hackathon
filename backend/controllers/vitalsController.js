import Patient from "../models/patient.js";
import VitalRecord from "../models/vitalRecord.js";

//POST /api/vitals  → store incoming vitals in vitalsData.
export const addVitals = async (req, res, next) => {
  try {
    const newVital = {
      patientId: req.device.patientId,
      hr: req.body.hr,
      spo2: req.body.spo2,
      temp: req.body.temp,
      accMag: req.body.accMag,
    };

    if (!req.body.hr || !req.body.spo2 || !req.body.temp || !req.body.accMag) {
      const error = new Error("Missing required fields");
      error.status = 400;
      return next(error);
    }
    const patientVitals = new VitalRecord(newVital);
    await patientVitals.save();
    res.status(201).json(patientVitals);
  } catch (error) {
    next(error);
  }
};

//GET /api/vitals/:patientId  → return all vitals for that patient.
export const getVitals = async (req, res, next) => {
  try {
    const patientId = req.user.id;
    const limit = parseInt(req.query.limit) || 1000;
    const allVitals = await VitalRecord.find({ patientId })
      .sort({ createdAt: -1 })
      .limit(limit);
    res.status(200).json(allVitals);
  } catch (error) {
    next(error);
  }
};

//GET /api/vitals/ml/:patientId  → fetch vitals for ml
export const getVitalsToML = async (req, res, next) => {
  try {
    const patientId = req.user.id;
    const patientData = await Patient.findById(patientId);
    const limit = parseInt(req.query.limit) || 5000;
    const allVitalsToML = await VitalRecord.find({ patientId })
      .sort({ createdAt: 1 })
      .limit(limit);
    if (!patientData) {
      const error = new Error(`A patient with ${patientId} was not found`);
      error.status = 404;
      return next(error);
    }
    res.status(200).json(allVitalsToML);
  } catch (error) {
    next(error);
  }
};
