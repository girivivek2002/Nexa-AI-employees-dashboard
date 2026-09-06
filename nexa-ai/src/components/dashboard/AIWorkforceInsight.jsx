import {
    ArrowForwardRounded,
    AutoAwesomeRounded,
    TrendingUpRounded,
} from "@mui/icons-material";

import {
    Box,
    Button,
    Paper,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MotionPaper = motion(Paper);
const MotionBox = motion(Box);

const AIWorkforceInsight = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const isDark = theme.palette.mode === "dark";

    return (
        <MotionPaper
            initial={{
                opacity: 0,
                y: 30,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.65,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
            }}
            elevation={0}
            sx={{
                position: "relative",
                overflow: "hidden",

                width: "100%",
                height: "100%",

                p: {
                    xs: 2.5,
                    sm: 3,
                    md: 3.5,
                },

                borderRadius: 3,

                border: "1px solid",

                borderColor: isDark
                    ? "rgba(124,92,252,.20)"
                    : "rgba(124,92,252,.14)",

                background: isDark
                    ? "linear-gradient(135deg, rgba(124,92,252,.13), rgba(34,211,238,.035))"
                    : "linear-gradient(135deg, rgba(124,92,252,.07), rgba(34,211,238,.025))",

                boxShadow: isDark
                    ? "0 18px 55px rgba(0,0,0,.18)"
                    : "0 15px 45px rgba(50,30,100,.07)",
            }}
        >
            {/* ========================================== */}
            {/* AMBIENT GLOW */}
            {/* ========================================== */}

            <MotionBox
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.3, 0.55, 0.3],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                sx={{
                    position: "absolute",

                    width: 220,
                    height: 220,

                    right: -100,
                    top: -110,

                    borderRadius: "50%",

                    background:
                        "radial-gradient(circle, rgba(124,92,252,.25), transparent 70%)",

                    filter: "blur(25px)",

                    pointerEvents: "none",
                }}
            />

            <Box
                sx={{
                    position: "absolute",

                    width: 160,
                    height: 160,

                    left: -100,
                    bottom: -100,

                    borderRadius: "50%",

                    background:
                        "rgba(34,211,238,.07)",

                    filter: "blur(35px)",

                    pointerEvents: "none",
                }}
            />

            {/* ========================================== */}
            {/* HEADER */}
            {/* ========================================== */}

            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                sx={{
                    position: "relative",
                    zIndex: 2,
                }}
            >
                <Stack
                    direction="row"
                    spacing={1.5}
                    alignItems="center"
                >
                    {/* AI ICON */}

                    <MotionBox
                        animate={{
                            rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        sx={{
                            width: {
                                xs: 42,
                                sm: 46,
                            },

                            height: {
                                xs: 42,
                                sm: 46,
                            },

                            flexShrink: 0,

                            display: "grid",
                            placeItems: "center",

                            borderRadius: 2.5,

                            color: "#A78BFA",

                            background: isDark
                                ? "rgba(124,92,252,.14)"
                                : "rgba(124,92,252,.09)",

                            border:
                                "1px solid rgba(124,92,252,.18)",

                            boxShadow:
                                "0 0 25px rgba(124,92,252,.08)",

                            "& svg": {
                                fontSize: {
                                    xs: 20,
                                    sm: 22,
                                },
                            },
                        }}
                    >
                        <AutoAwesomeRounded />
                    </MotionBox>

                    <Box sx={{ minWidth: 0 }}>
                        <Typography
                            sx={{
                                fontSize: {
                                    xs: ".95rem",
                                    sm: "1.05rem",
                                },

                                fontWeight: 800,

                                color: "text.primary",
                            }}
                        >
                            AI Workforce Insight
                        </Typography>

                        <Typography
                            sx={{
                                mt: 0.25,

                                fontSize: ".68rem",

                                color: "text.secondary",
                            }}
                        >
                            Generated by NEXA AI
                        </Typography>
                    </Box>
                </Stack>

                {/* LIVE STATUS */}

                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={0.7}
                    sx={{
                        flexShrink: 0,

                        display: {
                            xs: "none",
                            sm: "flex",
                        },
                    }}
                >
                    <Box
                        sx={{
                            width: 6,
                            height: 6,

                            borderRadius: "50%",

                            background:
                                theme.palette.success.main,

                            boxShadow: `0 0 10px ${theme.palette.success.main}`,

                            animation:
                                "pulse 2s infinite",

                            "@keyframes pulse": {
                                "0%,100%": {
                                    opacity: 0.4,
                                },
                                "50%": {
                                    opacity: 1,
                                },
                            },
                        }}
                    />

                    <Typography
                        sx={{
                            fontSize: ".62rem",
                            fontWeight: 700,
                            color: "text.secondary",
                        }}
                    >
                        LIVE
                    </Typography>
                </Stack>
            </Stack>

            {/* ========================================== */}
            {/* INSIGHT CONTENT */}
            {/* ========================================== */}

            <Box
                sx={{
                    position: "relative",
                    zIndex: 2,

                    mt: 3,

                    p: {
                        xs: 2,
                        sm: 2.5,
                    },

                    borderRadius: 2.5,

                    backgroundColor: isDark
                        ? "rgba(0,0,0,.12)"
                        : "rgba(124,92,252,.025)",

                    border: "1px solid",
                    borderColor: isDark
                        ? "rgba(255,255,255,.05)"
                        : "rgba(124,92,252,.08)",
                }}
            >
                <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    sx={{
                        mb: 1.5,
                    }}
                >
                    <TrendingUpRounded
                        sx={{
                            fontSize: 18,
                            color: "#22D3EE",
                        }}
                    />

                    <Typography
                        sx={{
                            fontSize: ".68rem",
                            fontWeight: 800,
                            letterSpacing: ".06em",
                            textTransform: "uppercase",
                            color: "#22D3EE",
                        }}
                    >
                        Workforce Trend
                    </Typography>
                </Stack>

                <Typography
                    sx={{
                        fontSize: {
                            xs: ".82rem",
                            sm: ".88rem",
                            md: ".92rem",
                        },

                        lineHeight: 1.8,

                        color: "text.secondary",

                        "& strong": {
                            color: "text.primary",
                            fontWeight: 800,
                        },
                    }}
                >
                    Engineering currently represents the
                    largest department with{" "}
                    <strong>42 employees</strong>. Your
                    workforce has grown by{" "}
                    <strong>12.5%</strong> this month,
                    showing strong hiring momentum.
                </Typography>
            </Box>

            {/* ========================================== */}
            {/* MINI INSIGHT METRICS */}
            {/* ========================================== */}

            <Stack
                direction={{
                    xs: "column",
                    sm: "row",
                }}
                spacing={1.5}
                sx={{
                    mt: 2,
                    position: "relative",
                    zIndex: 2,
                }}
            >
                <Box
                    sx={{
                        flex: 1,

                        px: 1.8,
                        py: 1.5,

                        borderRadius: 2,

                        backgroundColor: isDark
                            ? "rgba(255,255,255,.025)"
                            : "rgba(124,92,252,.035)",

                        border: "1px solid",
                        borderColor:
                            "divider",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: ".62rem",
                            color: "text.secondary",
                        }}
                    >
                        Growth
                    </Typography>

                    <Typography
                        sx={{
                            mt: 0.3,
                            fontSize: "1rem",
                            fontWeight: 800,
                            color:
                                theme.palette.success
                                    .main,
                        }}
                    >
                        +12.5%
                    </Typography>
                </Box>

                <Box
                    sx={{
                        flex: 1,

                        px: 1.8,
                        py: 1.5,

                        borderRadius: 2,

                        backgroundColor: isDark
                            ? "rgba(255,255,255,.025)"
                            : "rgba(34,211,238,.035)",

                        border: "1px solid",
                        borderColor:
                            "divider",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: ".62rem",
                            color: "text.secondary",
                        }}
                    >
                        Top department
                    </Typography>

                    <Typography
                        sx={{
                            mt: 0.3,
                            fontSize: ".85rem",
                            fontWeight: 800,
                            color: "text.primary",
                        }}
                    >
                        Engineering
                    </Typography>
                </Box>
            </Stack>

            {/* ========================================== */}
            {/* ACTION */}
            {/* ========================================== */}

            <Button
                onClick={() =>
                    navigate("/assistant")
                }
                endIcon={
                    <ArrowForwardRounded />
                }
                sx={{
                    position: "relative",
                    zIndex: 2,

                    mt: 2.5,

                    px: 0,

                    fontSize: ".78rem",
                    fontWeight: 750,

                    color:
                        theme.palette.primary.main,

                    "& .MuiButton-endIcon": {
                        transition:
                            "transform .25s ease",
                    },

                    "&:hover": {
                        background: "transparent",

                        "& .MuiButton-endIcon": {
                            transform:
                                "translateX(4px)",
                        },
                    },
                }}
            >
                Ask AI for more insights
            </Button>
        </MotionPaper>
    );
};

export default AIWorkforceInsight;