import {
    ArrowForwardRounded,
    SmartToyRounded,
} from "@mui/icons-material";

import {
    Box,
    Chip,
    Paper,
    Stack,
    Typography,
} from "@mui/material";

import { motion } from "framer-motion";

const MotionBox = motion(Box);

const AIPreview = () => {
    return (
        <MotionBox
            initial={{
                opacity: 0,
                x: 60,
                scale: 0.95,
            }}
            animate={{
                opacity: 1,
                x: 0,
                scale: 1,
            }}
            transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
            }}
            sx={{
                position: "relative",
                width: "100%",
                maxWidth: 540,
                mx: "auto",
            }}
        >
            <MotionBox
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.25, 0.45, 0.25],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                sx={{
                    position: "absolute",
                    inset: -60,
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(124,92,252,0.35), transparent 65%)",
                    filter: "blur(40px)",
                    pointerEvents: "none",
                }}
            />

            <MotionBox
                whileHover={{
                    y: -8,
                    boxShadow: (theme) =>
                        theme.palette.mode === "dark"
                            ? "0 40px 100px rgba(124,92,252,0.25)"
                            : "0 30px 70px rgba(124,92,252,0.16)",
                }}
                transition={{
                    duration: 0.35,
                }}
                sx={{
                    position: "relative",
                    zIndex: 2,
                    p: {
                        xs: 2,
                        sm: 3,
                    },
                    borderRadius: 4,

                    bgcolor: "background.paper",

                    background: (theme) =>
                        theme.palette.mode === "dark"
                            ? "linear-gradient(145deg, rgba(18,23,38,0.96), rgba(10,14,25,0.96))"
                            : "linear-gradient(145deg, rgba(255,255,255,0.98), rgba(248,250,252,0.98))",

                    border: "1px solid",
                    borderColor: "divider",

                    backdropFilter: "blur(20px)",

                    boxShadow: (theme) =>
                        theme.palette.mode === "dark"
                            ? "0 35px 100px rgba(0,0,0,0.45)"
                            : "0 25px 70px rgba(15,23,42,0.12)",

                    overflow: "hidden",

                    transition:
                        "background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
                }}
            >
                <MotionBox
                    animate={{
                        x: ["-120%", "120%"],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatDelay: 2,
                        ease: "easeInOut",
                    }}
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "40%",
                        height: "100%",
                        background: (theme) =>
                            theme.palette.mode === "dark"
                                ? "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)"
                                : "linear-gradient(90deg, transparent, rgba(124,92,252,0.05), transparent)",
                        transform: "skewX(-20deg)",
                        pointerEvents: "none",
                    }}
                />

                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{
                        pb: 2,
                        borderBottom: "1px solid",
                        borderColor: "divider",
                    }}
                >
                    <Stack
                        direction="row"
                        spacing={1.5}
                        alignItems="center"
                    >
                        <MotionBox
                            animate={{
                                rotate: [0, 5, -5, 0],
                                scale: [1, 1.05, 1],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            sx={{
                                width: 44,
                                height: 44,
                                borderRadius: 2,
                                display: "grid",
                                placeItems: "center",
                                background:
                                    "linear-gradient(135deg, #7C5CFC, #22D3EE)",
                                boxShadow:
                                    "0 8px 30px rgba(124,92,252,0.35)",
                            }}
                        >
                            <SmartToyRounded />
                        </MotionBox>

                        <Box>
                            <Typography fontWeight={700}>
                                NEXA Assistant
                            </Typography>

                            <Stack
                                direction="row"
                                spacing={0.7}
                                alignItems="center"
                            >
                                <MotionBox
                                    animate={{
                                        opacity: [1, 0.3, 1],
                                        scale: [1, 0.8, 1],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                    }}
                                    sx={{
                                        width: 7,
                                        height: 7,
                                        borderRadius: "50%",
                                        bgcolor: "#4ADE80",
                                    }}
                                />

                                <Typography
                                    variant="caption"
                                    color="text.secondary"
                                >
                                    Online
                                </Typography>
                            </Stack>
                        </Box>
                    </Stack>

                    <Chip
                        label="AI v1.0"
                        size="small"
                        sx={{
                            bgcolor: "action.selected",
                            color: "primary.main",
                            border: "1px solid",
                            borderColor: "primary.main",
                        }}
                    />
                </Stack>

                <Stack
                    spacing={2.5}
                    sx={{ py: 3 }}
                >
                    <MotionBox
                        initial={{
                            opacity: 0,
                            x: -20,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            delay: 0.8,
                            duration: 0.5,
                        }}
                        sx={{
                            display: "flex",
                            justifyContent: "flex-start",
                        }}
                    >
                        <Paper
                            elevation={0}
                            sx={{
                                p: 2,
                                maxWidth: "85%",
                                borderRadius:
                                    "4px 16px 16px 16px",

                                bgcolor: "action.hover",

                                border: "1px solid",
                                borderColor: "divider",
                            }}
                        >
                            <Typography
                                variant="body2"
                                lineHeight={1.7}
                            >
                                Good morning! 👋
                                <br />
                                How can I help you today?
                            </Typography>
                        </Paper>
                    </MotionBox>

                    <MotionBox
                        initial={{
                            opacity: 0,
                            x: 20,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            delay: 1.2,
                            duration: 0.5,
                        }}
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                        }}
                    >
                        <Paper
                            elevation={0}
                            sx={{
                                p: 2,
                                maxWidth: "85%",
                                borderRadius:
                                    "16px 4px 16px 16px",

                                background:
                                    "linear-gradient(135deg, rgba(124,92,252,0.9), rgba(91,74,232,0.9))",

                                color: "#FFFFFF",
                            }}
                        >
                            <Typography
                                variant="body2"
                                lineHeight={1.7}
                            >
                                Who works in the Engineering
                                department?
                            </Typography>
                        </Paper>
                    </MotionBox>

                    <MotionBox
                        initial={{
                            opacity: 0,
                            x: -20,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            delay: 1.6,
                            duration: 0.5,
                        }}
                        sx={{
                            display: "flex",
                            justifyContent: "flex-start",
                        }}
                    >
                        <Paper
                            elevation={0}
                            sx={{
                                p: 2,
                                maxWidth: "90%",
                                borderRadius:
                                    "4px 16px 16px 16px",

                                bgcolor: "action.hover",

                                border: "1px solid",
                                borderColor: "divider",
                            }}
                        >
                            <Typography
                                variant="body2"
                                lineHeight={1.7}
                            >
                                I found{" "}
                                <strong>32 employees</strong>{" "}
                                in Engineering. Would you like
                                me to show their profiles?
                            </Typography>
                        </Paper>
                    </MotionBox>
                </Stack>

                <MotionBox
                    whileHover={{
                        borderColor: "rgba(124,92,252,0.5)",
                        backgroundColor:
                            "rgba(124,92,252,0.06)",
                    }}
                    sx={{
                        p: 1.5,
                        borderRadius: 2.5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",

                        bgcolor: "action.hover",

                        border: "1px solid",
                        borderColor: "divider",

                        transition: "all 0.3s ease",
                    }}
                >
                    <Typography
                        variant="body2"
                        color="text.secondary"
                    >
                        Ask NEXA anything...
                    </Typography>

                    <MotionBox
                        whileHover={{
                            scale: 1.1,
                            rotate: 5,
                        }}
                        whileTap={{
                            scale: 0.9,
                        }}
                        sx={{
                            width: 36,
                            height: 36,
                            borderRadius: 1.5,
                            display: "grid",
                            placeItems: "center",

                            background:
                                "linear-gradient(135deg, #7C5CFC, #22D3EE)",

                            cursor: "pointer",
                        }}
                    >
                        <ArrowForwardRounded
                            sx={{ fontSize: 18 }}
                        />
                    </MotionBox>
                </MotionBox>
            </MotionBox>

            <MotionBox
                initial={{
                    opacity: 0,
                    scale: 0.8,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -8, 0],
                }}
                transition={{
                    opacity: {
                        delay: 1.8,
                        duration: 0.5,
                    },
                    scale: {
                        delay: 1.8,
                        duration: 0.5,
                    },
                    y: {
                        delay: 2.3,
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                }}
                sx={{
                    position: "relative",
                    zIndex: 3,
                    width: "fit-content",
                    mx: "auto",
                    mt: 2,
                    p: 2,
                    borderRadius: 3,

                    bgcolor: "background.paper",

                    border: "1px solid",
                    borderColor: "primary.main",

                    backdropFilter: "blur(15px)",

                    boxShadow: (theme) =>
                        theme.palette.mode === "dark"
                            ? "0 20px 50px rgba(0,0,0,0.3)"
                            : "0 15px 40px rgba(15,23,42,0.12)",

                    transition:
                        "background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
                }}
            >
                <Typography
                    variant="caption"
                    color="text.secondary"
                >
                    AI queries today
                </Typography>

                <Stack
                    direction="row"
                    spacing={1.5}
                    alignItems="center"
                >
                    <Typography
                        variant="h5"
                        fontWeight={800}
                    >
                        1,284
                    </Typography>

                    <Typography
                        variant="caption"
                        sx={{ color: "#4ADE80" }}
                    >
                        ↗ 24.8%
                    </Typography>
                </Stack>
            </MotionBox>
        </MotionBox>
    );
};

export default AIPreview;