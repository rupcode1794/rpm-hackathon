import mongoose from "mongoose";

const mlResultSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
    index: true
  },

  windowTime: {
    type: Date,
    required: true,
    index: true
  },

  features: {
    hrMean: Number,
    hrStd: Number,
    spo2Min: Number,
    tempMean: Number,
    accMean: Number
  },

  anomalyScore: {
    type: Number,
    required: true
  },

  isAnomaly: {
    type: Boolean,
    required: true
  },

  graph: {
    type: Object,
    default: null
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});
mlResultSchema.index({ patientId: 1, windowTime: -1 });
export default mongoose.model("MLResult", mlResultSchema);
