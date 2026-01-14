import MLResult from "../models/mlResult.js";

// POST /api/ml →  Store ml result
export const createMLResult = async (req, res, next) => {
  try {

    if (
      !req.body.windowTime ||
      !req.body.features ||
      req.body.anomalyScore === undefined ||
      req.body.isAnomaly === undefined
    ) {
      const error = new Error("Missing required fields");
      error.status = 400;
      return next(error);
    }

    
    if (typeof req.body.anomalyScore !== 'number') {
      const error = new Error("anomalyScore must be a number");
      error.status = 400;
      return next(error);
    }

    if (typeof req.body.isAnomaly !== 'boolean') {
      const error = new Error("isAnomaly must be a boolean");
      error.status = 400;
      return next(error);
    }

    if (typeof req.body.features !== 'object' || Array.isArray(req.body.features)) {
      const error = new Error("features must be an object");
      error.status = 400;
      return next(error);
    }

    const addMlResult = {
      patientId: req.user.id,
      windowTime: req.body.windowTime,
      features: req.body.features,
      anomalyScore: req.body.anomalyScore,
      isAnomaly: req.body.isAnomaly,
      graph: req.body.graph,
    };

    const mlData = new MLResult(addMlResult);
    await mlData.save();
    res.status(201).json(mlData);
  } catch (error) {
    next(error);
  }
};

// GET /api/ml →  Fetch ml graph for frontend
export const getMlResult = async (req, res, next) => {
  try {
    const patientId = req.user.id;
    const allMlResult = await MLResult.find({ patientId });
    res.status(200).json(allMlResult);
  } catch (error) {
    next(error);
  }
};
