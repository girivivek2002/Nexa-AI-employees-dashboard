import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography,
} from "@mui/material";

import {
    AddRounded,
    CloseRounded,
} from "@mui/icons-material";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const employeeSchema = z.object({
    name: z
        .string()
        .min(2, "Name must contain at least 2 characters"),

    email: z
        .string()
        .email("Enter a valid email address"),

    role: z
        .string()
        .min(2, "Role is required"),

    department: z
        .string()
        .min(1, "Select a department"),

    location: z
        .string()
        .min(2, "Location is required"),

    experience: z
        .string()
        .min(1, "Experience is required"),

    status: z
        .string()
        .min(1, "Select a status"),

    skills: z
        .string()
        .min(1, "Add at least one skill"),

    joined: z
        .string()
        .min(1, "Join date is required"),
});

const defaultValues = {
    name: "",
    email: "",
    role: "",
    department: "",
    location: "",
    experience: "",
    status: "Active",
    skills: "",
    joined: "",
};

export default function EmployeeForm({
    onSubmitEmployee,
    onClose,
}) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(employeeSchema),
        defaultValues,
    });

    const handleFormSubmit = async (data) => {
        const employee = {
            ...data,

            skills: data.skills
                .split(",")
                .map((skill) => skill.trim())
                .filter(Boolean),
        };

        await onSubmitEmployee(employee);
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(handleFormSubmit)}
        >
            <Stack spacing={2.2}>
                <TextField
                    label="Full Name"
                    placeholder="e.g. Aman Sharma"
                    fullWidth
                    {...register("name")}
                    error={Boolean(errors.name)}
                    helperText={errors.name?.message}
                />

                <TextField
                    label="Email"
                    placeholder="aman@nexa.ai"
                    type="email"
                    fullWidth
                    {...register("email")}
                    error={Boolean(errors.email)}
                    helperText={errors.email?.message}
                />

                <TextField
                    label="Role"
                    placeholder="e.g. Frontend Developer"
                    fullWidth
                    {...register("role")}
                    error={Boolean(errors.role)}
                    helperText={errors.role?.message}
                />

                <FormControl fullWidth error={Boolean(errors.department)}>
                    <InputLabel>Department</InputLabel>

                    <Select
                        label="Department"
                        defaultValue=""
                        {...register("department")}
                    >
                        <MenuItem value="Engineering">
                            Engineering
                        </MenuItem>

                        <MenuItem value="Design">
                            Design
                        </MenuItem>

                        <MenuItem value="Marketing">
                            Marketing
                        </MenuItem>

                        <MenuItem value="Sales">
                            Sales
                        </MenuItem>

                        <MenuItem value="HR">
                            HR
                        </MenuItem>

                        <MenuItem value="Finance">
                            Finance
                        </MenuItem>

                        <MenuItem value="Manufacturing">
                            Manufacturing
                        </MenuItem>
                    </Select>

                    {errors.department && (
                        <Typography
                            variant="caption"
                            color="error"
                            sx={{ mt: 0.5, ml: 1.5 }}
                        >
                            {errors.department.message}
                        </Typography>
                    )}
                </FormControl>

                <TextField
                    label="Location"
                    placeholder="e.g. New Delhi, India"
                    fullWidth
                    {...register("location")}
                    error={Boolean(errors.location)}
                    helperText={errors.location?.message}
                />

                <TextField
                    label="Experience"
                    placeholder="e.g. 3 years"
                    fullWidth
                    {...register("experience")}
                    error={Boolean(errors.experience)}
                    helperText={errors.experience?.message}
                />

                <FormControl fullWidth>
                    <InputLabel>Status</InputLabel>

                    <Select
                        label="Status"
                        defaultValue="Active"
                        {...register("status")}
                    >
                        <MenuItem value="Active">
                            Active
                        </MenuItem>

                        <MenuItem value="Away">
                            Away
                        </MenuItem>
                    </Select>
                </FormControl>

                <TextField
                    label="Skills"
                    placeholder="React, Node.js, MongoDB"
                    fullWidth
                    {...register("skills")}
                    error={Boolean(errors.skills)}
                    helperText={
                        errors.skills?.message ||
                        "Separate skills with commas"
                    }
                />

                <TextField
                    label="Joined Date"
                    type="month"
                    fullWidth
                    InputLabelProps={{
                        shrink: true,
                    }}
                    {...register("joined")}
                    error={Boolean(errors.joined)}
                    helperText={errors.joined?.message}
                />

                <Stack
                    direction="row"
                    spacing={1.5}
                    justifyContent="flex-end"
                    sx={{ pt: 1 }}
                >
                    <Button
                        type="button"
                        variant="outlined"
                        startIcon={<CloseRounded />}
                        onClick={onClose}
                    >
                        Cancel
                    </Button>

                    <Button
                        type="submit"
                        variant="contained"
                        startIcon={<AddRounded />}
                        disabled={isSubmitting}
                    >
                        Add Employee
                    </Button>
                </Stack>
            </Stack>
        </Box>
    );
}