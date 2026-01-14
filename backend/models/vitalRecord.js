import mongoose from "mongoose";

const vitalSchema = mongoose.Schema({
    patientId : {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Patient'},
    createdAt: {type: Date, default: Date.now, index: true},
    hr : {type: Number, required: true},
    spo2 : {type: Number, required: true },
    temp : {type: Number, required: true },
    accMag : {type: Number, required: true },
});
vitalSchema.index({ patientId: 1, createdAt: -1 })

const VitalRecord = mongoose.model('VitalRecord', vitalSchema);

export default VitalRecord;