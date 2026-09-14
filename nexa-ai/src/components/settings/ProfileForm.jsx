import { useEffect, useState } from "react";
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    IconButton,
    TextField,
    Typography,
} from "@mui/material";

import {
    LockRounded,
    SaveRounded,
    Visibility,
    VisibilityOff,
} from "@mui/icons-material";

import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

import { updateUser } from "../../store/slices/authSlice";
import {
    updateProfile as updateProfileApi,
    changePassword,
} from "../../services/authService";

import { updateProfile as updateSettingsProfile } from "../../store/slices/settingsSlice";

// ============================
// PROFILE VALIDATION
// ============================

const profileSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Name must contain at least 2 characters"),

    email: z
        .string()
        .trim()
        .email("Enter a valid email address"),
});

// ============================
// PASSWORD VALIDATION
// ============================

const passwordSchema = z
    .object({
        currentPassword: z
            .string()
            .min(1, "Current password is required"),

        newPassword: z
            .string()
            .min(
                8,
                "New password must contain at least 8 characters"
            ),

        confirmPassword: z
            .string()
            .min(
                1,
                "Please confirm your new password"
            ),
    })
    .refine(
        (data) =>
            data.newPassword === data.confirmPassword,
        {
            message: "Passwords do not match",
            path: ["confirmPassword"],
        }
    );

export default function ProfileForm() {
    const dispatch = useDispatch();

    // ============================
    // AUTH USER
    // ============================

    const user = useSelector(
        (state) => state.auth?.user
    );

    // ============================
    // PASSWORD MODAL
    // ============================

    const [passwordModalOpen, setPasswordModalOpen] =
        useState(false);

    const [showCurrentPassword, setShowCurrentPassword] =
        useState(false);

    const [showNewPassword, setShowNewPassword] =
        useState(false);

    const [showConfirmPassword, setShowConfirmPassword] =
        useState(false);

    // ============================
    // PROFILE FORM
    // ============================

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
            isSubmitting,
        },
    } = useForm({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            name: user?.name || "",
            email: user?.email || "",
        },
    });

    // ============================
    // PASSWORD FORM
    // ============================

    const {
        register: registerPassword,
        handleSubmit: handlePasswordSubmit,
        reset: resetPassword,
        formState: {
            errors: passwordErrors,
            isSubmitting: isChangingPassword,
        },
    } = useForm({
        resolver: zodResolver(passwordSchema),
        defaultValues: {
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
        },
    });

    // ============================
    // SYNC FORM WITH USER
    // ============================

    useEffect(() => {
        reset({
            name: user?.name || "",
            email: user?.email || "",
        });
    }, [user, reset]);

    // ============================
    // UPDATE PROFILE
    // ============================

    const onSubmit = async (data) => {
        try {
            const response = await updateProfileApi({
                name: data.name.trim(),
                email: data.email.trim(),
            });

            if (!response?.user) {
                throw new Error(
                    "Invalid profile response from server"
                );
            }

            const updatedUser = response.user;

            // Update authentication user
            dispatch(updateUser(updatedUser));

            // Keep existing settings state synchronized
            dispatch(
                updateSettingsProfile({
                    fullName: updatedUser.name,
                    email: updatedUser.email,
                })
            );

            // Reset form with updated values
            reset({
                name: updatedUser.name,
                email: updatedUser.email,
            });

            toast.success(
                response.message ||
                "Profile updated successfully"
            );
        } catch (error) {
            console.error(
                "Profile update error:",
                error
            );

            toast.error(
                error?.response?.data?.message ||
                "Unable to update profile"
            );
        }
    };

    // ============================
    // CHANGE PASSWORD
    // ============================

    const onPasswordSubmit = async (data) => {
        try {
            const response = await changePassword({
                currentPassword: data.currentPassword,
                newPassword: data.newPassword,
            });

            toast.success(
                response?.message ||
                "Password changed successfully"
            );

            resetPassword();

            setShowCurrentPassword(false);
            setShowNewPassword(false);
            setShowConfirmPassword(false);

            setPasswordModalOpen(false);
        } catch (error) {
            console.error(
                "Change password error:",
                error
            );

            toast.error(
                error?.response?.data?.message ||
                "Unable to change password"
            );
        }
    };

    // ============================
    // CLOSE PASSWORD MODAL
    // ============================

    const handlePasswordModalClose = () => {
        if (isChangingPassword) return;

        resetPassword();

        setPasswordModalOpen(false);

        setShowCurrentPassword(false);
        setShowNewPassword(false);
        setShowConfirmPassword(false);
    };

    return (
        <>
            {/* ======================================
                PROFILE FORM
            ====================================== */}

            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Grid container spacing={2}>
                    {/* NAME */}

                    <Grid size={{ xs: 12, md: 6 }}>
                        <TextField
                            fullWidth
                            label="Full Name"
                            {...register("name")}
                            error={Boolean(
                                errors.name
                            )}
                            helperText={
                                errors.name?.message
                            }
                        />
                    </Grid>

                    {/* EMAIL */}

                    <Grid size={{ xs: 12, md: 6 }}>
                        <TextField
                            fullWidth
                            label="Email"
                            type="email"
                            {...register("email")}
                            error={Boolean(
                                errors.email
                            )}
                            helperText={
                                errors.email?.message
                            }
                        />
                    </Grid>
                </Grid>

                {/* BUTTONS */}

                <Box
                    sx={{
                        display: "flex",
                        gap: 1.5,
                        flexWrap: "wrap",
                        mt: 3,
                    }}
                >
                    <Button
                        type="submit"
                        variant="contained"
                        startIcon={<SaveRounded />}
                        disabled={isSubmitting}
                    >
                        {isSubmitting
                            ? "Saving..."
                            : "Save Changes"}
                    </Button>

                    <Button
                        type="button"
                        variant="outlined"
                        startIcon={<LockRounded />}
                        onClick={() =>
                            setPasswordModalOpen(true)
                        }
                    >
                        Change Password
                    </Button>
                </Box>
            </Box>

            {/* ======================================
                CHANGE PASSWORD MODAL
            ====================================== */}

            <Dialog
                open={passwordModalOpen}
                onClose={
                    handlePasswordModalClose
                }
                fullWidth
                maxWidth="sm"
            >
                <DialogTitle>
                    <Typography
                        variant="h5"
                        fontWeight={800}
                    >
                        Change Password
                    </Typography>

                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 0.5 }}
                    >
                        Enter your current password
                        and choose a new password.
                    </Typography>
                </DialogTitle>

                <Box
                    component="form"
                    onSubmit={handlePasswordSubmit(
                        onPasswordSubmit
                    )}
                >
                    <DialogContent>
                        {/* CURRENT PASSWORD */}

                        <TextField
                            fullWidth
                            label="Current Password"
                            type={
                                showCurrentPassword
                                    ? "text"
                                    : "password"
                            }
                            {...registerPassword(
                                "currentPassword"
                            )}
                            error={Boolean(
                                passwordErrors.currentPassword
                            )}
                            helperText={
                                passwordErrors
                                    .currentPassword
                                    ?.message
                            }
                            sx={{ mb: 2 }}
                            slotProps={{
                                input: {
                                    endAdornment: (
                                        <IconButton
                                            type="button"
                                            onClick={() =>
                                                setShowCurrentPassword(
                                                    (prev) =>
                                                        !prev
                                                )
                                            }
                                            edge="end"
                                        >
                                            {showCurrentPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    ),
                                },
                            }}
                        />

                        {/* NEW PASSWORD */}

                        <TextField
                            fullWidth
                            label="New Password"
                            type={
                                showNewPassword
                                    ? "text"
                                    : "password"
                            }
                            {...registerPassword(
                                "newPassword"
                            )}
                            error={Boolean(
                                passwordErrors.newPassword
                            )}
                            helperText={
                                passwordErrors
                                    .newPassword?.message
                            }
                            sx={{ mb: 2 }}
                            slotProps={{
                                input: {
                                    endAdornment: (
                                        <IconButton
                                            type="button"
                                            onClick={() =>
                                                setShowNewPassword(
                                                    (prev) =>
                                                        !prev
                                                )
                                            }
                                            edge="end"
                                        >
                                            {showNewPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    ),
                                },
                            }}
                        />

                        {/* CONFIRM PASSWORD */}

                        <TextField
                            fullWidth
                            label="Confirm New Password"
                            type={
                                showConfirmPassword
                                    ? "text"
                                    : "password"
                            }
                            {...registerPassword(
                                "confirmPassword"
                            )}
                            error={Boolean(
                                passwordErrors.confirmPassword
                            )}
                            helperText={
                                passwordErrors
                                    .confirmPassword
                                    ?.message
                            }
                            slotProps={{
                                input: {
                                    endAdornment: (
                                        <IconButton
                                            type="button"
                                            onClick={() =>
                                                setShowConfirmPassword(
                                                    (prev) =>
                                                        !prev
                                                )
                                            }
                                            edge="end"
                                        >
                                            {showConfirmPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    ),
                                },
                            }}
                        />
                    </DialogContent>

                    <DialogActions
                        sx={{
                            px: 3,
                            pb: 3,
                        }}
                    >
                        <Button
                            type="button"
                            onClick={
                                handlePasswordModalClose
                            }
                            disabled={
                                isChangingPassword
                            }
                        >
                            Cancel
                        </Button>

                        <Button
                            type="submit"
                            variant="contained"
                            disabled={
                                isChangingPassword
                            }
                            startIcon={
                                <LockRounded />
                            }
                        >
                            {isChangingPassword
                                ? "Changing..."
                                : "Change Password"}
                        </Button>
                    </DialogActions>
                </Box>
            </Dialog>
        </>
    );
}