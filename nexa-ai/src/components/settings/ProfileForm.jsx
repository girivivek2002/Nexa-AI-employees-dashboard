import { useEffect } from "react";
import {
    Box,
    Button,
    Grid,
    TextField,
} from "@mui/material";
import { SaveRounded } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

import { updateProfile } from "../../store/slices/settingsSlice";

const profileSchema = z.object({
    fullName: z
        .string()
        .min(2, "Name must contain at least 2 characters"),

    email: z
        .string()
        .email("Enter a valid email address"),

    position: z
        .string()
        .min(2, "Position is required"),

    department: z
        .string()
        .min(2, "Department is required"),
});

export default function ProfileForm() {
    const dispatch = useDispatch();

    const profile = useSelector(
        (state) => state.settings.profile
    );

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(profileSchema),
        defaultValues: profile,
    });

    useEffect(() => {
        reset(profile);
    }, [profile, reset]);

    const onSubmit = async (data) => {
        dispatch(updateProfile(data));

        toast.success("Profile updated successfully");
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        label="Full Name"
                        {...register("fullName")}
                        error={Boolean(errors.fullName)}
                        helperText={errors.fullName?.message}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        label="Email"
                        {...register("email")}
                        error={Boolean(errors.email)}
                        helperText={errors.email?.message}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        label="Position"
                        {...register("position")}
                        error={Boolean(errors.position)}
                        helperText={errors.position?.message}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        label="Department"
                        {...register("department")}
                        error={Boolean(errors.department)}
                        helperText={errors.department?.message}
                    />
                </Grid>
            </Grid>

            <Button
                type="submit"
                variant="contained"
                startIcon={<SaveRounded />}
                disabled={isSubmitting}
                sx={{ mt: 3 }}
            >
                Save Changes
            </Button>
        </Box>
    );
}