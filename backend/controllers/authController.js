import { hashPassword, comparePassword } from "../utils/hash.js";
import Patient from "../models/patient.js";
import generateToken from "../utils/generateToken.js";
import Device from "../models/device.js";

export const registerPatient = async (req, res, next) => {
  const {
    name,
    contactPhone,
    location,
    description,
    patientAge,
    height,
    weight,
    password,
  } = req.body;
  try {
    if (
      !name?.trim() ||
      !contactPhone?.trim() ||
      !location?.trim() ||
      !description?.trim() ||
      !patientAge ||
      !height ||
      !weight ||
      !password
    ) {
      const error = new Error("Missing required fields");
      error.status = 400;
      return next(error);
    }
    const trimmedContactPhone = contactPhone.trim();

    const patientExists = await Patient.findOne({
      contactPhone: trimmedContactPhone,
    });
    if (patientExists) {
      const error = new Error("Patient already exists");
      error.status = 400;
      return next(error);
    }

    const hashedPassword = await hashPassword(password);

    const patient = new Patient({
      name: name.trim(),
      contactPhone: trimmedContactPhone,
      location: location.trim(),
      description: description.trim(),
      patientAge,
      height,
      weight,
      password: hashedPassword,
    });
    await patient.save();
    if (patient) {
      generateToken(res, patient._id);
      const patientData = patient.toObject();
      delete patientData.password;
      res.status(201).json(patientData);
    }
  } catch (error) {
    next(error);
  }
};

export const loginPatient = async (req, res, next) => {
  const { contactPhone, password } = req.body;
  try {
    if (!contactPhone?.trim() || !password) {
      const error = new Error("Missing required ");
      error.status = 400;
      return next(error);
    }

    const loggedPatient = await Patient.findOne({
      contactPhone: contactPhone.trim(),
    }).select("+password");
    if (!loggedPatient) {
      const error = new Error("Invalid credentials");
      error.status = 401;
      return next(error);
    }
    const matchedPassword = await comparePassword(
      password,
      loggedPatient.password
    );
    if (!matchedPassword) {
      const error = new Error("Invalid credentials");
      error.status = 401;
      return next(error);
    }
    generateToken(res, loggedPatient._id);
    const loggedPatientData = loggedPatient.toObject();
    delete loggedPatientData.password;
    res.status(200).json(loggedPatientData);
  } catch (error) {
    next(error);
  }
};

export const logoutPatient = async (req, res, next) => {
  try {
    if (req.user && req.user.id) {
      await Device.updateMany(
        { patientId: req.user.id },
        { patientId: null, assignedAt: null }
      );
    }

    res.cookie("jwt", "", {
      httpOnly: true,
      expires: new Date(0),
    });
    res.status(200).json({ message: "Patient logged out successfully" });
  } catch (error) {
    next(error);
  }
};

export const getMe = async (req, res, next) => {
  try {
    const user = req.user;
    if (!user) {
      const error = new Error("Not authenticated");
      error.status = 401;
      return next(error);
    }
    const getPatientId = req.user.id;
    const gotPatient = await Patient.findById(getPatientId);
    if (!gotPatient) {
      const error = new Error("Patient not found");
      error.status = 404;
      return next(error);
    }
    const removedPasswordPatient = gotPatient.toObject();
    delete removedPasswordPatient.password;
    res.status(200).json(removedPasswordPatient);
  } catch (error) {
    next(error);
  }
};
