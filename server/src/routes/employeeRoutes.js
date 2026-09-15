import express from "express";

import {
    getEmployees,
    createEmployee,
    deleteEmployee,
} from "../controllers/employeeController.js";

import {
    protect,
    requireAdmin,
} from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getEmployees);

router.post("/", protect, requireAdmin, createEmployee);

router.delete("/:id", protect, requireAdmin, deleteEmployee);

export default router;