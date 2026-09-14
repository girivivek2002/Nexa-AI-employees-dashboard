import {
    AutoAwesomeRounded,
    ArrowForwardRounded,
} from "@mui/icons-material";

import {
    Box,
    Button,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";

import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MotionBox = motion(Box);

const DashboardHeader = () => {
    const theme = useTheme();
    const navigate = useNavigate();



    // Get logged-in user from Redux
    const user = useSelector(
        (state) => state.auth?.user
    );

    const isDark = theme.palette.mode === "dark";

    return (
        <MotionBox
            initial={{
                opacity: 0,
                y: 20,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
            }}
            sx={{
                position: "relative",
                overflow: "hidden",

                p: {
                    xs: 2.5,
                    sm: 3,
                    md: 4,
                },

                borderRadius: {
                    xs: 3,
                    md: 4,
                },

                border: "1px solid",
                borderColor: isDark
                    ? "rgba(167,139,250,0.14)"
                    : "rgba(124,92,252,0.12)",

                background: isDark
                    ? "linear-gradient(135deg, rgba(124,92,252,0.10), rgba(34,211,238,0.04))"
                    : "linear-gradient(135deg, rgba(124,92,252,0.06), rgba(34,211,238,0.025))",

                boxShadow: isDark
                    ? "0 20px 60px rgba(0,0,0,0.18)"
                    : "0 15px 45px rgba(60,40,120,0.07)",
            }}
        >
            {/* Decorative glow */}

            <Box
                sx={{
                    position: "absolute",
                    width: 220,
                    height: 220,
                    right: -100,
                    top: -120,

                    borderRadius: "50%",

                    background: isDark
                        ? "rgba(124,92,252,0.12)"
                        : "rgba(124,92,252,0.08)",

                    filter: "blur(50px)",
                    pointerEvents: "none",
                }}
            />

            <Box
                sx={{
                    position: "absolute",
                    width: 180,
                    height: 180,
                    right: "20%",
                    bottom: -150,

                    borderRadius: "50%",

                    background: isDark
                        ? "rgba(34,211,238,0.08)"
                        : "rgba(34,211,238,0.06)",

                    filter: "blur(50px)",
                    pointerEvents: "none",
                }}
            />

            <Stack
                direction={{
                    xs: "column",
                    sm: "row",
                }}
                justifyContent="space-between"
                alignItems={{
                    xs: "stretch",
                    sm: "center",
                }}
                spacing={{
                    xs: 3,
                    sm: 2,
                }}
                sx={{
                    position: "relative",
                    zIndex: 1,
                }}
            >
                {/* LEFT */}

                <Box sx={{ minWidth: 0 }}>
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1}
                        sx={{
                            mb: 0.8,
                        }}
                    >
                        <Typography
                            component="h1"
                            sx={{
                                fontSize: {
                                    xs: "1.55rem",
                                    sm: "1.8rem",
                                    md: "2rem",
                                },

                                lineHeight: 1.2,
                                fontWeight: 850,
                                letterSpacing: "-0.035em",

                                color: "text.primary",
                            }}
                        >
                            Good morning, {user.name}
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: {
                                    xs: "1.35rem",
                                    sm: "1.6rem",
                                },
                            }}
                        >
                            👋
                        </Typography>
                    </Stack>

                    <Typography
                        sx={{
                            color: "text.secondary",

                            fontSize: {
                                xs: "0.85rem",
                                sm: "0.9rem",
                                md: "0.95rem",
                            },

                            lineHeight: 1.6,
                        }}
                    >
                        Here's what's happening across your
                        workplace today.
                    </Typography>
                </Box>

                {/* RIGHT */}

                <Button
                    variant="contained"
                    startIcon={<AutoAwesomeRounded />}
                    endIcon={<ArrowForwardRounded />}
                    onClick={() =>
                        navigate("/assistant")
                    }
                    sx={{
                        flexShrink: 0,

                        alignSelf: {
                            xs: "stretch",
                            sm: "center",
                        },

                        minHeight: 46,

                        px: 2.5,

                        borderRadius: 2.5,

                        fontWeight: 750,

                        background:
                            "linear-gradient(135deg, #7C5CFC, #22D3EE)",

                        boxShadow:
                            "0 10px 30px rgba(124,92,252,0.20)",

                        transition:
                            "transform .25s ease, box-shadow .25s ease",

                        "& .MuiButton-endIcon": {
                            transition:
                                "transform .25s ease",
                        },

                        "&:hover": {
                            transform:
                                "translateY(-2px)",

                            boxShadow:
                                "0 15px 40px rgba(124,92,252,0.28)",

                            "& .MuiButton-endIcon": {
                                transform:
                                    "translateX(3px)",
                            },
                        },
                    }}
                >
                    Ask NEXA AI
                </Button>
            </Stack>
        </MotionBox>
    );
};

export default DashboardHeader;