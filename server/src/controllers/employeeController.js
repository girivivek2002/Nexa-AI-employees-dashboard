import Employee from "../models/Employee.js";

export const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find().sort({ createdAt: -1 });

        res.json({
            success: true,
            employees,
        });
    } catch (error) {
        console.error("Get employees error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch employees",
        });
    }
};

export const createEmployee = async (req, res) => {
    try {
        const employee = await Employee.create(req.body);

        res.status(201).json({
            success: true,
            employee,
        });
    } catch (error) {
        console.error("Create employee error:", error);

        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: "An employee with this email already exists",
            });
        }

        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

export const deleteEmployee = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);

        if (!employee) {
            return res.status(404).json({
                success: false,
                message: "Employee not found",
            });
        }

        await employee.deleteOne();

        res.status(200).json({
            success: true,
            message: "Employee deleted successfully",
        });
    } catch (error) {
        console.error("Delete employee error:", error);

        if (error.name === "CastError") {
            return res.status(400).json({
                success: false,
                message: "Invalid employee ID",
            });
        }

        res.status(500).json({
            success: false,
            message: "Failed to delete employee",
        });
    }
};