import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import connectDB from "../config/db.js";

dotenv.config();

const seedAdmin = async () => {
    try {
        await connectDB();

        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (!adminEmail || !adminPassword) {
            throw new Error(
                "ADMIN_EMAIL and ADMIN_PASSWORD must be defined in .env"
            );
        }

        const existingAdmin = await User.findOne({
            email: adminEmail.toLowerCase().trim(),
        });

        if (existingAdmin) {
            console.log("Admin account already exists.");
            process.exit(0);
        }

        const hashedPassword = await bcrypt.hash(
            adminPassword,
            12
        );

        const admin = await User.create({
            name: "NEXA AI Admin",
            email: adminEmail.toLowerCase().trim(),
            password: hashedPassword,
            role: "admin",
        });

        console.log("=================================");
        console.log("Admin account created successfully");
        console.log("Email:", admin.email);
        console.log("Role:", admin.role);
        console.log("=================================");

        process.exit(0);
    } catch (error) {
        console.error("Admin seed error:", error);
        process.exit(1);
    }
};

seedAdmin();