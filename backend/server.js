import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import { protect } from "./middleware/authMiddleware.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (_req, res) => {
  res.send("Hotel Booking System API is running");
});

app.use("/api/auth", authRoutes);

// Example protected ping route for frontend check
app.get("/api/protected/ping", protect, (req, res) => {
  res.json({ ok: true, user: req.user });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
