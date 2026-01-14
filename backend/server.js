import express from "express";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import patients from "./routes/patients.js";
import vitals from "./routes/vitals.js";
import mlRoutes from "./routes/mlRoutes.js";
import devices from "./routes/devices.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//Cookie parser
app.use(cookieParser());

//connect mongoDB database
connectDB();

//Routers
app.use("/api/auth", authRoutes);
app.use("/api/patients", patients);
app.use("/api/vitals", vitals);
app.use("/api/ml", mlRoutes);
app.use("/api/devices", devices);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});

app.listen(port, () => console.log(`RPM Server is running on port ${port}`));
