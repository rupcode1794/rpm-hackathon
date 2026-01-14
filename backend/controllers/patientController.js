import Patient from "../models/patient.js";

//GET /api/patients → get all patients(Admin)
export const getPatients = async (req, res, next) => {
  try {
    const allPatients = await Patient.find();
    res.status(200).json(allPatients);
  } catch (error) {
    next(error);
  }
};

//GET /api/patients/:id → get a single patient
export const getPatient = async (req, res, next) => {
  try {
    const id = req.params.id;
    const onePatient = await Patient.findById(id);
    if (!onePatient) {
      const error = new Error(`A patient with ${id} was not found`);
      error.status = 404;
      return next(error);
    }
    res.status(200).json(onePatient);
  } catch (error) {
    next(error);
  }
};
