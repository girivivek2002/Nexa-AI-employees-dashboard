import { useState } from "react";
import {
    Box,
    Button,
    Container,
    TextField,
    Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { subscribeNewsletter } from "../../services/newsletterService";


const MotionBox = motion(Box);

export default function NewsletterSection() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const trimmedEmail = email.trim();

        if (!trimmedEmail) {
            setError("Email is required");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
            setError("Enter a valid email address");
            return;
        }

        try {
            setLoading(true);
            setError("");

            const response = await subscribeNewsletter(trimmedEmail);

            toast.success(
                response?.message || "You have subscribed successfully!"
            );

            setEmail("");
        } catch (err) {
            console.error("Newsletter subscription error:", err);

            const message =
                err?.response?.data?.message ||
                "Something went wrong. Please try again.";

            // Backend requirement:
            // "You are already subscribed"
            if (message === "You are already subscribed") {
                toast.info(message);
            } else {
                toast.error(message);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box
            component="section"
            id="newsletter"
            sx={{
                py: { xs: 7, md: 9 },
            }}
        >
            <Container maxWidth="md">
                <MotionBox
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    sx={{ textAlign: "center" }}
                >
                    <Typography
                        variant="overline"
                        sx={{
                            color: "primary.main",
                            fontWeight: 700,
                            letterSpacing: 2,
                        }}
                    >
                        STAY UPDATED
                    </Typography>

                    <Typography
                        variant="h3"
                        sx={{
                            mt: 1,
                            fontWeight: 800,
                            fontSize: {
                                xs: "2rem",
                                md: "2.8rem",
                            },
                        }}
                    >
                        Get the latest from NEXA AI
                    </Typography>

                    <Typography
                        sx={{
                            mt: 2,
                            color: "text.secondary",
                            maxWidth: 600,
                            mx: "auto",
                            lineHeight: 1.7,
                        }}
                    >
                        Subscribe for AI hiring insights, product updates,
                        and useful recruitment tips.
                    </Typography>

                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{
                            display: "flex",
                            gap: 1.5,
                            mt: 4,
                            maxWidth: 600,
                            mx: "auto",
                            flexDirection: {
                                xs: "column",
                                sm: "row",
                            },
                        }}
                    >
                        <TextField
                            fullWidth
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(event) => {
                                setEmail(event.target.value);

                                if (error) {
                                    setError("");
                                }
                            }}
                            error={Boolean(error)}
                            helperText={error}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            disabled={loading}
                            sx={{
                                minWidth: {
                                    xs: "100%",
                                    sm: 150,
                                },
                                height: 56,
                            }}
                        >
                            {loading ? "Subscribing..." : "Subscribe"}
                        </Button>

                    </Box>

                </MotionBox>
            </Container>
        </Box>
    );
}