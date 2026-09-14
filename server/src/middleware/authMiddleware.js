import jwt from "jsonwebtoken";
import User from "../models/User.js";

const getTokenFromRequest = (req) => {
    const header = req.headers.authorization;
    if (!header || !header.startsWith("Bearer ")) return null;
    return header.split(" ")[1];
};

export const protect = async (req, res, next) => {
    try {
        const token = getTokenFromRequest(req);

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Authentication required",
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id).select("-password");

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid authentication token",
            });
        }

        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token",
        });
    }
};

export const requireAdmin = (req, res, next) => {
    if (!req.user || req.user.role !== "admin") {
        return res.status(401).json({
            success: false,
            message: "Admin access required",
        });
    }

    next();
};
