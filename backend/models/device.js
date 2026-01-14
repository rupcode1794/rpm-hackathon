import mongoose from "mongoose";

const deviceSchema = new mongoose.Schema({
  deviceId: {
    type: String,
    required: true,
    unique: true,
  },

  apiKey: {
    type: String,
    required: true,
  },

  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    default: null,
    index: true
  },

  assignedAt: {
    type: Date,
    default: null,
  },
});
deviceSchema.index({ deviceId: 1, apiKey: 1 });

const Device = mongoose.model("Device", deviceSchema);
export default Device;
