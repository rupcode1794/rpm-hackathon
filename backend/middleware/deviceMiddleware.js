import Device from "../models/device.js";
export const deviceAuth = async (req, res, next) => {
  try {
    const deviceId = req.headers["x-device-id"];
    const apiKey = req.headers["x-api-key"];

    if (!deviceId || !apiKey) {
      const error = new Error("Device authentication headers missing");
      error.status = 401;
      return next(error);
    }
    const device = await Device.findOne({ deviceId, apiKey });

    if (!device || !device.patientId) {
      const error = new Error("Device not assigned to any patient");
      error.status = 401;
      return next(error);
    }

    req.device = device;
    next();
  } catch (error) {
    next(error);
  }
};
