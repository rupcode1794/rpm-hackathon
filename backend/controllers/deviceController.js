import Device from "../models/device.js";
import Patient from "../models/patient.js";
import crypto from "crypto";

export const assignDeviceToPatient = async (req, res, next) => {
  try {
    const { deviceId } = req.body;
    const patientId = req.user.id;

    if (!deviceId?.trim()) {
      const error = new Error("deviceId is required");
      error.status = 400;
      return next(error);
    }
    const trimmedDeviceId = deviceId.trim();
    const patientExists = await Patient.findById(patientId);
    if (!patientExists) {
      const error = new Error("Patient not found");
      error.status = 404;
      return next(error);
    }

    // Generate API key only once per device
    let device = await Device.findOne({ deviceId : trimmedDeviceId});

    if (!device) {
      device = new Device({
        deviceId: trimmedDeviceId,
        apiKey: crypto.randomBytes(32).toString("hex"),
      });
    } else if (!device.apiKey) {
      device.apiKey = crypto.randomBytes(32).toString("hex");
    }
    if (device.patientId && device.patientId.toString() !== patientId) {
      console.warn(
        `Device ${device.deviceId} reassigned from ${device.patientId} to ${patientId}`
      );
    }

    // Assign / reassign device
    device.patientId = patientId;
    if (!device.assignedAt) {
      device.assignedAt = new Date();
    }

    await device.save();

    res.status(200).json({
      message: "Device assigned successfully",
      deviceId: device.deviceId,
      apiKey: device.apiKey,
    });
  } catch (error) {
    next(error);
  }
};
