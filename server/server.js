import dotenv from "dotenv";

dotenv.config();

import express from "express";
import cors from "cors";
import aiRoutes from "./src/routes/aiRoutes.js";
import connectDB from "./src/config/db.js";
import employeeRoutes from "./src/routes/employeeRoutes.js";
import chatRoutes from "./src/routes/chatRoutes.js";

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "NEXA AI server is running",
    });
});


app.use("/api/employees", employeeRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/chat", chatRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`NEXA AI server running on port ${PORT}`);
});