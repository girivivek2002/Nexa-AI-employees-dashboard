import { useState } from "react";
import {
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    Grid,
    IconButton,
    MenuItem,
    TextField,
    Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { toast } from "react-toastify";
import { submitQuote } from "../../services/quoteService";

const initialForm = {
    name: "",
    email: "",
    phone: "",
    serviceRequired: "",
    budget: "",
    message: "",
};

export default function FreeQuoteModal({ open, onClose }) {
    const [formData, setFormData] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ) {
            newErrors.email = "Enter a valid email address";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        }

        if (!formData.serviceRequired) {
            newErrors.serviceRequired = "Please select a service";
        }

        if (!formData.budget) {
            newErrors.budget = "Please select your budget";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validate()) return;

        try {
            setLoading(true);

            await submitQuote(formData);

            toast.success(
                "Quote request submitted successfully! We'll get back to you soon."
            );

            setFormData(initialForm);
            setErrors({});
            onClose();
        } catch (error) {
            console.error("Quote submission error:", error);

            const message =
                error?.response?.data?.message ||
                "Unable to submit your quote request. Please try again.";

            toast.error(message);
        } finally {
            setLoading(false);
        }
    };

    const handleClose = () => {
        if (loading) return;

        setErrors({});
        onClose();
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
            maxWidth="md"
            PaperProps={{
                sx: {
                    borderRadius: 3,
                    backgroundImage: "none",
                },
            }}
        >
            <DialogTitle
                sx={{
                    px: { xs: 3, md: 4 },
                    pt: 3,
                    pb: 1,
                    pr: 7,
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 800,
                        fontSize: { xs: "1.7rem", md: "2.1rem" },
                    }}
                >
                    Get a Free Quote
                </Typography>

                <Typography
                    sx={{
                        mt: 1,
                        color: "text.secondary",
                    }}
                >
                    Tell us what you need and our team will get back to you.
                </Typography>

                <IconButton
                    onClick={handleClose}
                    disabled={loading}
                    sx={{
                        position: "absolute",
                        right: 16,
                        top: 16,
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent
                sx={{
                    px: { xs: 3, md: 4 },
                    pb: 4,
                }}
            >
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{ mt: 2 }}
                >
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                fullWidth
                                label="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                error={Boolean(errors.name)}
                                helperText={errors.name}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                fullWidth
                                label="Email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                error={Boolean(errors.email)}
                                helperText={errors.email}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                fullWidth
                                label="Phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                error={Boolean(errors.phone)}
                                helperText={errors.phone}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                fullWidth
                                select
                                label="Service Required"
                                name="serviceRequired"
                                value={formData.serviceRequired}
                                onChange={handleChange}
                                error={Boolean(errors.serviceRequired)}
                                helperText={errors.serviceRequired}
                            >
                                <MenuItem value="AI Hiring Platform">
                                    AI Hiring Platform
                                </MenuItem>

                                <MenuItem value="AI Recruitment Solutions">
                                    AI Recruitment Solutions
                                </MenuItem>

                                <MenuItem value="Custom AI Solution">
                                    Custom AI Solution
                                </MenuItem>

                                <MenuItem value="Other">
                                    Other
                                </MenuItem>
                            </TextField>
                        </Grid>

                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                fullWidth
                                select
                                label="Budget"
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                                error={Boolean(errors.budget)}
                                helperText={errors.budget}
                            >
                                <MenuItem value="Under ₹50,000">
                                    Under ₹50,000
                                </MenuItem>

                                <MenuItem value="₹50,000 - ₹1,00,000">
                                    ₹50,000 - ₹1,00,000
                                </MenuItem>

                                <MenuItem value="₹1,00,000 - ₹5,00,000">
                                    ₹1,00,000 - ₹5,00,000
                                </MenuItem>

                                <MenuItem value="₹5,00,000+">
                                    ₹5,00,000+
                                </MenuItem>

                                <MenuItem value="Not sure yet">
                                    Not sure yet
                                </MenuItem>
                            </TextField>
                        </Grid>

                        <Grid size={{ xs: 12 }}>
                            <TextField
                                fullWidth
                                label="Message"
                                name="message"
                                multiline
                                rows={5}
                                placeholder="Tell us about your requirements..."
                                value={formData.message}
                                onChange={handleChange}
                                error={Boolean(errors.message)}
                                helperText={errors.message}
                            />
                        </Grid>

                        <Grid
                            size={{ xs: 12 }}
                            sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                                gap: 1.5,
                                mt: 1,
                            }}
                        >
                            <Button
                                variant="outlined"
                                onClick={handleClose}
                                disabled={loading}
                            >
                                Cancel
                            </Button>

                            <Button
                                type="submit"
                                variant="contained"
                                disabled={loading}
                            >
                                {loading ? "Submitting..." : "Request Quote"}
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </DialogContent>
        </Dialog>
    );
}