import {
    ArrowForwardRounded,
    AutoAwesomeRounded,
    CheckCircleRounded,
} from "@mui/icons-material";

import {
    Box,
    Button,
    Chip,
    Stack,
    Typography,
} from "@mui/material";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MotionBox = motion(Box);

const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <MotionBox
            initial={{
                opacity: 0,
                y: 30,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.8,
            }}
        >
            <Chip
                icon={<AutoAwesomeRounded />}
                label="AI-Powered Employee Intelligence"
                sx={{
                    mb: 3,
                    px: 1,
                    py: 2.5,

                    color: "primary.main",
                    bgcolor: "action.selected",

                    border: "1px solid",
                    borderColor:
                        "rgba(124,92,252,0.25)",

                    "& .MuiChip-icon": {
                        color: "primary.main",
                    },
                }}
            />

            <Typography
                variant="h1"
                sx={{
                    fontSize: {
                        xs: "3rem",
                        sm: "4rem",
                        md: "4.8rem",
                    },
                    lineHeight: 1.02,
                    maxWidth: 700,
                    color: "text.primary",
                }}
            >
                Your workplace,

                <Box
                    component="span"
                    sx={{
                        display: "block",

                        background:
                            "linear-gradient(90deg, #7C5CFC 10%, #22D3EE 90%)",

                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor:
                            "transparent",
                    }}
                >
                    intelligently connected.
                </Box>
            </Typography>

            <Typography
                sx={{
                    mt: 3,
                    maxWidth: 600,
                    color: "text.secondary",
                    fontSize: {
                        xs: "1rem",
                        md: "1.15rem",
                    },
                    lineHeight: 1.8,
                }}
            >
                Meet your AI-powered employee assistant.
                Discover people, explore workforce data,
                get instant answers and make smarter
                decisions from one intelligent workspace.
            </Typography>

            <Stack
                direction={{
                    xs: "column",
                    sm: "row",
                }}
                spacing={2}
                sx={{
                    mt: 4,
                    alignItems: {
                        xs: "stretch",
                        sm: "center",
                    },
                }}
            >
                <Button
                    size="large"
                    variant="contained"
                    endIcon={<ArrowForwardRounded />}
                    onClick={() =>
                        navigate("/assistant")
                    }
                    sx={{
                        px: 3,
                        py: 1.5,
                        fontSize: "1rem",

                        background:
                            "linear-gradient(135deg, #7C5CFC, #5B4AE8)",

                        boxShadow:
                            "0 15px 40px rgba(124,92,252,0.3)",

                        "&:hover": {
                            transform:
                                "translateY(-3px)",

                            boxShadow:
                                "0 20px 45px rgba(124,92,252,0.45)",
                        },

                        transition:
                            "all 0.3s ease",
                    }}
                >
                    Start with AI
                </Button>

                <Button
                    size="large"
                    onClick={() =>
                        navigate("/dashboard")
                    }
                    sx={{
                        px: 3,
                        py: 1.5,

                        color: "text.primary",

                        bgcolor: "action.hover",

                        border: "1px solid",
                        borderColor: "divider",

                        "&:hover": {
                            bgcolor: "action.selected",
                            borderColor:
                                "rgba(124,92,252,0.35)",
                        },

                        transition:
                            "all 0.3s ease",
                    }}
                >
                    Explore Dashboard
                </Button>
            </Stack>

            <Stack
                direction="row"
                spacing={3}
                sx={{
                    mt: 4,
                    flexWrap: "wrap",
                    rowGap: 1,
                }}
            >
                {[
                    "Smart AI",
                    "Fast insights",
                    "Simple workflow",
                ].map((item) => (
                    <Stack
                        direction="row"
                        spacing={0.7}
                        key={item}
                        alignItems="center"
                    >
                        <CheckCircleRounded
                            sx={{
                                fontSize: 18,
                                color: "secondary.main",
                            }}
                        />

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            {item}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </MotionBox>
    );
};

export default HeroSection;