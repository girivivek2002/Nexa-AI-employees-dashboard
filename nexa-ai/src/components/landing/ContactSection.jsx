import { useState } from "react";
import {
    Box,
    Button,
    Container,
    Grid,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { submitContact } from "../../services/contactService.js";
import FreeQuoteButton from "./FreeQuoteButton.jsx";

const MotionBox = motion(Box);

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

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

    const validateForm = () => {
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

        if (!formData.subject.trim()) {
            newErrors.subject = "Subject is required";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            setLoading(true);

            await submitContact(formData);

            toast.success("Your message has been sent successfully!");

            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });

            setErrors({});
        } catch (error) {
            console.error("Contact form error:", error);

            const message =
                error?.response?.data?.message ||
                "Something went wrong. Please try again.";

            toast.error(message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box
            component="section"
            id="contact"
            sx={{
                py: { xs: 8, md: 12 },
                position: "relative",
                overflow: "hidden",
            }}
        >
            <Container maxWidth="lg">
                <MotionBox
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                >
                    <Typography
                        variant="overline"
                        sx={{
                            color: "primary.main",
                            fontWeight: 700,
                            letterSpacing: 2,
                        }}
                    >
                        CONTACT US
                    </Typography>

                    <Typography
                        variant="h2"
                        sx={{
                            mt: 1,
                            fontSize: { xs: "2.2rem", md: "3.5rem" },
                            maxWidth: 700,
                        }}
                    >
                        Let's build something{" "}
                        <Box
                            component="span"
                            sx={{ color: "primary.main" }}
                        >
                            intelligent.
                        </Box>
                    </Typography>

                    <Typography
                        sx={{
                            mt: 2,
                            color: "text.secondary",
                            maxWidth: 650,
                            fontSize: "1.05rem",
                            lineHeight: 1.8,
                        }}
                    >
                        Have a question, need a demo, or want to explore how
                        NEXA AI can transform your hiring process? Send us a
                        message.
                    </Typography>
                </MotionBox>

                <Grid
                    container
                    spacing={4}
                    sx={{ mt: 4 }}
                >
                    <Grid size={{ xs: 12, md: 5 }}>
                        <MotionBox
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                        >
                            <Typography
                                variant="h5"
                                sx={{ fontWeight: 700, mb: 2 }}
                            >
                                Get in touch
                            </Typography>

                            <Typography
                                sx={{
                                    color: "text.secondary",
                                    lineHeight: 1.8,
                                    mb: 4,
                                }}
                            >
                                Whether you're a recruiter looking to
                                streamline your hiring process or a company
                                exploring AI-powered recruitment, we'd love
                                to hear from you.
                            </Typography>

                            <Box sx={{ mb: 3 }}>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "text.secondary",
                                        mb: 0.5,
                                    }}
                                >
                                    Email
                                </Typography>

                                <Typography sx={{ fontWeight: 600 }}>
                                    nexacontact@nexa.ai
                                </Typography>
                            </Box>

                            <Box sx={{ mb: 3 }}>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "text.secondary",
                                        mb: 0.5,
                                    }}
                                >
                                    Phone
                                </Typography>

                                <Typography sx={{ fontWeight: 600 }}>
                                    +91 98765 XXXXX
                                </Typography>
                            </Box>

                            <Box>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "text.secondary",
                                        mb: 0.5,
                                    }}
                                >
                                    Response time
                                </Typography>

                                <Typography sx={{ fontWeight: 600 }}>
                                    Usually within 24 hours
                                </Typography>
                                <FreeQuoteButton>
                                    Get a Free Quote
                                </FreeQuoteButton>
                            </Box>
                        </MotionBox>
                    </Grid>

                    <Grid size={{ xs: 12, md: 7 }}>
                        <MotionBox
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    p: { xs: 3, md: 4 },
                                    border: "1px solid",
                                    borderColor: "divider",
                                    borderRadius: 3,
                                }}
                            >
                                <Box
                                    component="form"
                                    onSubmit={handleSubmit}
                                    noValidate
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
                                                label="Subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                error={Boolean(errors.subject)}
                                                helperText={errors.subject}
                                            />
                                        </Grid>

                                        <Grid size={{ xs: 12 }}>
                                            <TextField
                                                fullWidth
                                                label="Message"
                                                name="message"
                                                multiline
                                                rows={5}
                                                value={formData.message}
                                                onChange={handleChange}
                                                error={Boolean(errors.message)}
                                                helperText={errors.message}
                                            />
                                        </Grid>

                                        <Grid size={{ xs: 12 }}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                size="large"
                                                disabled={loading}
                                                sx={{
                                                    mt: 1,
                                                    minWidth: 150,
                                                }}
                                            >
                                                {loading
                                                    ? "Sending..."
                                                    : "Send Message"}
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Paper>
                        </MotionBox>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}