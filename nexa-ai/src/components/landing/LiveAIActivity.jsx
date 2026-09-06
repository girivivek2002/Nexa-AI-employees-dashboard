import { Box, Paper, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const LiveAIActivity = () => {
    const bars = [18, 28, 14, 32, 22, 30, 16, 25];

    return (
        <MotionBox
            initial={{
                opacity: 0,
                y: 30,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.2,
            }}
            transition={{
                duration: 0.8,
                delay: 0.25,
            }}
            sx={{
                mt: 4,
            }}
        >
            <Paper
                elevation={0}
                sx={{
                    position: "relative",
                    overflow: "hidden",
                    p: {
                        xs: 2.5,
                        md: 3,
                    },
                    borderRadius: 4,

                    bgcolor: "background.paper",

                    background: (theme) =>
                        theme.palette.mode === "dark"
                            ? "linear-gradient(100deg, rgba(124,92,252,0.07), rgba(34,211,238,0.035), rgba(255,255,255,0.025))"
                            : "linear-gradient(100deg, rgba(124,92,252,0.06), rgba(34,211,238,0.025), rgba(124,92,252,0.02))",

                    border: "1px solid",
                    borderColor: "divider",

                    backdropFilter: "blur(20px)",

                    transition:
                        "background 0.3s ease, border-color 0.3s ease",
                }}
            >
                <MotionBox
                    animate={{
                        x: [
                            "-100%",
                            "350%",
                        ],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatDelay: 2,
                        ease: "easeInOut",
                    }}
                    sx={{
                        position: "absolute",
                        top: 0,
                        width: "25%",
                        height: "100%",
                        background:
                            "linear-gradient(90deg, transparent, rgba(124,92,252,0.08), transparent)",
                        transform: "skewX(-20deg)",
                        pointerEvents: "none",
                    }}
                />

                <Stack
                    direction={{
                        xs: "column",
                        md: "row",
                    }}
                    alignItems={{
                        xs: "flex-start",
                        md: "center",
                    }}
                    justifyContent="space-between"
                    spacing={3}
                >
                    <Stack
                        direction="row"
                        spacing={1.5}
                        alignItems="center"
                    >
                        <MotionBox
                            animate={{
                                scale: [1, 1.35, 1],
                                opacity: [1, 0.5, 1],
                            }}
                            transition={{
                                duration: 1.6,
                                repeat: Infinity,
                            }}
                            sx={{
                                width: 10,
                                height: 10,
                                borderRadius: "50%",
                                bgcolor: "success.main",
                                boxShadow:
                                    "0 0 15px rgba(74,222,128,0.8)",
                            }}
                        />

                        <Box>
                            <Typography
                                fontWeight={800}
                                sx={{
                                    fontSize: "0.9rem",
                                    color: "text.primary",
                                }}
                            >
                                NEXA AI is working
                            </Typography>

                            <Typography
                                variant="caption"
                                color="text.secondary"
                            >
                                Analyzing your workforce in real time
                            </Typography>
                        </Box>
                    </Stack>

                    <Stack
                        direction="row"
                        spacing={1}
                        alignItems="flex-end"
                        sx={{
                            height: 35,
                        }}
                    >
                        {bars.map((height, index) => (
                            <MotionBox
                                key={index}
                                animate={{
                                    height: [
                                        height,
                                        height + 12,
                                        height,
                                    ],
                                }}
                                transition={{
                                    duration:
                                        1.2 + index * 0.08,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay:
                                        index * 0.08,
                                }}
                                sx={{
                                    width: 4,
                                    minHeight: 8,
                                    borderRadius: 5,
                                    background:
                                        "linear-gradient(180deg, #22D3EE, #7C5CFC)",
                                }}
                            />
                        ))}
                    </Stack>

                    <Stack
                        direction="row"
                        spacing={{
                            xs: 2,
                            md: 4,
                        }}
                    >
                        <Box>
                            <Typography
                                variant="caption"
                                color="text.secondary"
                            >
                                Queries
                            </Typography>

                            <Typography
                                fontWeight={800}
                                color="text.primary"
                            >
                                1.2K+
                            </Typography>
                        </Box>

                        <Box>
                            <Typography
                                variant="caption"
                                color="text.secondary"
                            >
                                Accuracy
                            </Typography>

                            <Typography
                                fontWeight={800}
                                color="text.primary"
                            >
                                98.4%
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: {
                                    xs: "none",
                                    sm: "block",
                                },
                            }}
                        >
                            <Typography
                                variant="caption"
                                color="text.secondary"
                            >
                                Status
                            </Typography>

                            <Typography
                                fontWeight={800}
                                color="success.main"
                            >
                                Live
                            </Typography>
                        </Box>
                    </Stack>
                </Stack>
            </Paper>
        </MotionBox>
    );
};

export default LiveAIActivity;