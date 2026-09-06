import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },

        role: {
            type: String,
            required: true,
            trim: true,
        },

        department: {
            type: String,
            required: true,
            trim: true,
        },

        location: {
            type: String,
            required: true,
            trim: true,
        },

        experience: {
            type: String,
            required: true,
            trim: true,
        },

        status: {
            type: String,
            enum: ["Active", "Away", "Inactive"],
            default: "Active",
        },

        skills: {
            type: [String],
            default: [],
        },

        joined: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;