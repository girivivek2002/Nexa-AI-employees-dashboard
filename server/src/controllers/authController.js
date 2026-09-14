import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const generateToken = (user) => {
    return jwt.sign(
        {
            id: user._id,
            role: user.role,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "7d",
        }
    );
};

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Required field validation
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Name, email and password are required",
            });
        }

        const normalizedEmail = email.toLowerCase().trim();

        // Check existing user
        const existingUser = await User.findOne({
            email: normalizedEmail,
        });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "An account with this email already exists",
            });
        }

        // Password validation
        if (password.length < 6) {
            return res.status(400).json({
                success: false,
                message: "Password must be at least 6 characters",
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Create user
        const user = await User.create({
            name: name.trim(),
            email: normalizedEmail,
            password: hashedPassword,
            role: "user",
        });

        // Generate token
        const token = generateToken(user);

        return res.status(201).json({
            success: true,
            message: "Registration successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        });
    } catch (error) {
        console.error("Register error:", error);

        return res.status(500).json({
            success: false,
            message: "Something went wrong during registration",
        });
    }
};


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required",
            });
        }

        const normalizedEmail = email.toLowerCase().trim();

        // Find user
        const user = await User.findOne({
            email: normalizedEmail,
        }).select("+password");

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password",
            });
        }

        // Compare password
        const passwordMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!passwordMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password",
            });
        }

        // Generate JWT
        const token = generateToken(user);

        return res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        });
    } catch (error) {
        console.error("Login error:", error);

        return res.status(500).json({
            success: false,
            message: "Something went wrong during login",
        });
    }
};


export const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select(
            "-password"
        );

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        return res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        console.error("Profile error:", error);

        return res.status(500).json({
            success: false,
            message: "Unable to fetch profile",
        });
    }
};


export const updateProfile = async (req, res) => {
    try {
        const { name, email } = req.body;

        if (!name || !email) {
            return res.status(400).json({
                success: false,
                message: "Name and email are required",
            });
        }

        const normalizedEmail = email.toLowerCase().trim();

        // Check if another user already uses this email
        const existingUser = await User.findOne({
            email: normalizedEmail,
            _id: { $ne: req.user.id },
        });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "An account with this email already exists",
            });
        }

        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        user.name = name.trim();
        user.email = normalizedEmail;

        await user.save();

        return res.status(200).json({
            success: true,
            message: "Profile updated successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        });
    } catch (error) {
        console.error("Update profile error:", error);

        return res.status(500).json({
            success: false,
            message: "Unable to update profile",
        });
    }
};

export const changePassword = async (req, res) => {
    try {
        const {
            currentPassword,
            newPassword,
        } = req.body;

        if (!currentPassword || !newPassword) {
            return res.status(400).json({
                success: false,
                message:
                    "Current password and new password are required",
            });
        }

        if (newPassword.length < 8) {
            return res.status(400).json({
                success: false,
                message:
                    "New password must be at least 8 characters",
            });
        }

        const user = await User.findById(req.user.id).select(
            "+password"
        );

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        // Verify current password
        const passwordMatch = await bcrypt.compare(
            currentPassword,
            user.password
        );

        if (!passwordMatch) {
            return res.status(401).json({
                success: false,
                message: "Current password is incorrect",
            });
        }

        // Prevent using the same password
        const samePassword = await bcrypt.compare(
            newPassword,
            user.password
        );

        if (samePassword) {
            return res.status(400).json({
                success: false,
                message:
                    "New password must be different from your current password",
            });
        }

        // Hash new password
        user.password = await bcrypt.hash(newPassword, 12);

        await user.save();

        return res.status(200).json({
            success: true,
            message: "Password changed successfully",
        });
    } catch (error) {
        console.error("Change password error:", error);

        return res.status(500).json({
            success: false,
            message: "Unable to change password",
        });
    }
};