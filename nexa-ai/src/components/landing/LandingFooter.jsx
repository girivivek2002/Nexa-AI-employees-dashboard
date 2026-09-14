import { useState } from "react";

import {
    Box,
    Button,
    Container,
    Divider,
    IconButton,
    Stack,
    TextField,
    Typography,
} from "@mui/material";

import {
    ArrowUpwardRounded,
    AutoAwesomeRounded,
} from "@mui/icons-material";

import { toast } from "react-toastify";

import { subscribeNewsletter } from "../../services/newsletterService";

const LandingFooter = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubscribe = async () => {
        const trimmedEmail = email.trim();

        if (!trimmedEmail) {
            toast.error("Please enter your email");
            return;
        }

        if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                trimmedEmail
            )
        ) {
            toast.error("Please enter a valid email");
            return;
        }

        try {
            setLoading(true);

            const response =
                await subscribeNewsletter(trimmedEmail);

            toast.success(
                response?.message ||
                "Successfully subscribed!"
            );

            setEmail("");
        } catch (error) {
            toast.error(
                error?.response?.data?.message ||
                "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    const scrollToSection = (id) => {
        document
            .getElementById(id)
            ?.scrollIntoView({
                behavior: "smooth",
            });
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Box
            component="footer"
            sx={{
                position: "relative",
                mt: 8,
                overflow: "hidden",
                borderTop: "1px solid",
                borderColor: "divider",
                background:
                    "linear-gradient(180deg, rgba(124,92,252,0.04), transparent)",
            }}
        >
            {/* Subtle background glow */}
            <Box
                sx={{
                    position: "absolute",
                    width: 280,
                    height: 280,
                    borderRadius: "50%",
                    background:
                        "rgba(124,92,252,0.10)",
                    filter: "blur(90px)",
                    top: -180,
                    left: "50%",
                    transform: "translateX(-50%)",
                    pointerEvents: "none",
                }}
            />

            <Container
                maxWidth="lg"
                sx={{
                    position: "relative",
                    py: {
                        xs: 4,
                        md: 5,
                    },
                }}
            >
                {/* Main Footer */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: {
                            xs: "column",
                            md: "row",
                        },
                        alignItems: {
                            xs: "flex-start",
                            md: "center",
                        },
                        justifyContent: "space-between",
                        gap: 4,
                    }}
                >
                    {/* Brand */}
                    <Box
                        sx={{
                            maxWidth: 280,
                        }}
                    >
                        <Stack
                            direction="row"
                            spacing={1}
                            alignItems="center"
                            mb={1}
                        >
                            <AutoAwesomeRounded
                                sx={{
                                    color: "#7C5CFC",
                                    fontSize: 21,
                                }}
                            />

                            <Typography
                                fontWeight={800}
                                fontSize="1.1rem"
                                sx={{
                                    background:
                                        "linear-gradient(90deg, #7C5CFC, #22D3EE)",
                                    WebkitBackgroundClip:
                                        "text",
                                    WebkitTextFillColor:
                                        "transparent",
                                }}
                            >
                                NEXA AI
                            </Typography>
                        </Stack>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                            lineHeight={1.6}
                        >
                            Intelligent hiring solutions
                            designed to help you find the
                            right talent faster.
                        </Typography>
                    </Box>

                    {/* Newsletter */}
                    <Box
                        sx={{
                            width: {
                                xs: "100%",
                                md: 390,
                            },
                        }}
                    >
                        <Typography
                            fontWeight={700}
                            mb={0.5}
                        >
                            Stay in the loop
                        </Typography>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                            mb={1.5}
                        >
                            Get AI hiring tips and product
                            updates in your inbox.
                        </Typography>

                        <Stack
                            direction="row"
                            spacing={1}
                        >
                            <TextField
                                fullWidth
                                size="small"
                                placeholder="Your email address"
                                value={email}
                                onChange={(e) =>
                                    setEmail(
                                        e.target.value
                                    )
                                }
                                onKeyDown={(e) => {
                                    if (
                                        e.key === "Enter"
                                    ) {
                                        handleSubscribe();
                                    }
                                }}
                                sx={{
                                    "& .MuiOutlinedInput-root":
                                    {
                                        borderRadius: 2,
                                        bgcolor:
                                            "background.paper",
                                    },
                                }}
                            />

                            <Button
                                variant="contained"
                                onClick={
                                    handleSubscribe
                                }
                                disabled={loading}
                                sx={{
                                    minWidth: 100,
                                    borderRadius: 2,
                                    background:
                                        "linear-gradient(135deg, #7C5CFC, #5B4AE8)",
                                    whiteSpace:
                                        "nowrap",
                                }}
                            >
                                {loading
                                    ? "..."
                                    : "Subscribe"}
                            </Button>
                        </Stack>
                    </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* Bottom Row */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent:
                            "space-between",
                        gap: 2,
                        flexWrap: "wrap",
                    }}
                >
                    <Typography
                        variant="caption"
                        color="text.secondary"
                    >
                        © {new Date().getFullYear()} NEXA AI.
                        All rights reserved.
                    </Typography>

                    <Stack
                        direction="row"
                        spacing={0.5}
                        alignItems="center"
                    >
                        <Button
                            size="small"
                            onClick={() =>
                                scrollToSection(
                                    "contact"
                                )
                            }
                            sx={{
                                color: "text.secondary",
                                textTransform:
                                    "none",
                                fontSize: "0.78rem",
                            }}
                        >
                            Contact
                        </Button>

                        <Button
                            size="small"
                            onClick={() =>
                                scrollToTop()
                            }
                            endIcon={
                                <ArrowUpwardRounded
                                    sx={{
                                        fontSize:
                                            "16px !important",
                                    }}
                                />
                            }
                            sx={{
                                color: "text.secondary",
                                textTransform:
                                    "none",
                                fontSize: "0.78rem",
                            }}
                        >
                            Back to top
                        </Button>

                        <IconButton
                            size="small"
                            onClick={scrollToTop}
                            sx={{
                                display: {
                                    xs: "none",
                                    sm: "inline-flex",
                                },
                            }}
                        >
                            <ArrowUpwardRounded fontSize="small" />
                        </IconButton>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
};

export default LandingFooter;