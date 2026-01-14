import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name : {type: String, required: true},
    contactPhone: {type : String, required :true, unique: true},
    location: {type: String, required : true},
    description: {type: String},
    patientAge: {type : Number, required: true},
    height : {type: Number, required: true},
    weight: {type: Number, required: true},
    password : {type: String, required: true, select: false},
    createdAt: {type: Date, default: Date.now },
});
const Patient =  mongoose.model ('Patient', patientSchema );

export default Patient; 