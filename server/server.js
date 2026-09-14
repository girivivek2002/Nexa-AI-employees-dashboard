import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./src/config/db.js";

import employeeRoutes from "./src/routes/employeeRoutes.js";
import aiRoutes from "./src/routes/aiRoutes.js";

import authRoutes from "./src/routes/authRoutes.js";
import contactRoutes from "./src/routes/contactRoutes.js";
import newsletterRoutes from "./src/routes/newsletterRoutes.js";
import quoteRoutes from "./src/routes/quoteRoutes.js";
import adminRoutes from "./src/routes/adminRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = (process.env.FRONTEND_URL || "http://localhost:5173")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

app.use(
    cors({
        origin(origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                return callback(null, true);
            }
            return callback(new Error("CORS origin not allowed"));
        },
        credentials: true,
    })
);

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        message: "NEXA AI API is running",
        timestamp: new Date().toISOString(),
    });
});

app.use("/api/employees", employeeRoutes);
app.use("/api/ai", aiRoutes);

app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use(
    "/api/newsletter",
    newsletterRoutes
);
app.use("/api/quote", quoteRoutes);
app.use("/api/admin", adminRoutes);

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: `Route not found: ${req.method} ${req.originalUrl}`,
    });
});

app.use((err, req, res, next) => {
    console.error("Unhandled server error:", err);

    if (err.message === "CORS origin not allowed") {
        return res.status(403).json({
            success: false,
            message: "CORS origin not allowed",
        });
    }

    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Internal server error",
    });
});

const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`NEXA AI API running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Server startup failed:", error.message);
        process.exit(1);
    }
};

startServer();
