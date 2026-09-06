
import {
    ArrowUpwardRounded,
    AutoAwesomeRounded,
} from "@mui/icons-material";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionPaper = motion(Paper);
const MotionBox = motion(Box);

export default function StatCard({
    icon: Icon,
    title,
    value,
    change,
    subtitle,
    accent = "#7C5CFC",
    delay = 0,
}) {
    return (
        <MotionPaper
            elevation={0}
            initial={{
                opacity: 0,
                y: 25,
                scale: 0.96,
            }}
            animate={{
                opacity: 1,
                y: 0,
                scale: 1,
            }}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
                y: -7,
                transition: { duration: 0.25 },
            }}
            sx={{
                position: "relative",
                overflow: "hidden",
                width: "100%",
                minWidth: 0,
                minHeight: {
                    xs: 150,
                    sm: 170,
                },
                p: {
                    xs: 1.5,
                    sm: 2.25,
                    md: 2.5,
                },
                boxSizing: "border-box",
                borderRadius: 3,
                bgcolor: "background.paper",
                color: "text.primary",
                border: "1px solid",
                borderColor: "divider",

                transition:
                    "border-color .3s ease, box-shadow .3s ease",

                "&:hover": {
                    borderColor: accent,
                    boxShadow: `0 18px 45px ${accent} 20`,
                },
            }}
        >
            {/* Ambient glow */}
            <MotionBox
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.15, 0.28, 0.15],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                sx={{
                    position: "absolute",
                    width: 130,
                    height: 130,
                    top: -75,
                    right: -60,
                    borderRadius: "50%",
                    bgcolor: accent,
                    filter: "blur(30px)",
                    pointerEvents: "none",
                }}
            />

            {/* Floating particles */}
            {[0, 1, 2].map((item) => (
                <MotionBox
                    key={item}
                    animate={{
                        y: [0, -12, 0],
                        opacity: [0.15, 0.7, 0.15],
                    }}
                    transition={{
                        duration: 2.5 + item * 0.5,
                        delay: item * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    sx={{
                        position: "absolute",
                        width: 3,
                        height: 3,
                        borderRadius: "50%",
                        bgcolor: accent,
                        right: `${18 + item * 14}% `,
                        top: `${18 + item * 8}% `,
                        boxShadow: `0 0 10px ${accent} `,
                    }}
                />
            ))}

            {/* Header */}
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                    position: "relative",
                    zIndex: 2,
                }}
            >
                {/* Icon */}
                <MotionBox
                    whileHover={{
                        scale: 1.08,
                        rotate: 5,
                    }}
                    sx={{
                        width: {
                            xs: 36,
                            sm: 44,
                        },
                        height: {
                            xs: 36,
                            sm: 44,
                        },
                        borderRadius: 2.2,
                        display: "grid",
                        placeItems: "center",
                        color: accent,
                        bgcolor: "action.hover",
                        border: "1px solid",
                        borderColor: "divider",
                        flexShrink: 0,
                    }}
                >
                    <Icon
                        sx={{
                            fontSize: {
                                xs: 19,
                                sm: 22,
                            },
                        }}
                    />
                </MotionBox>

                {/* Live indicator */}
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={0.6}
                >
                    <MotionBox
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 1.8,
                            repeat: Infinity,
                        }}
                        sx={{
                            width: 5,
                            height: 5,
                            borderRadius: "50%",
                            bgcolor: "secondary.main",
                            boxShadow:
                                "0 0 10px rgba(34,211,238,.7)",
                        }}
                    />

                    <AutoAwesomeRounded
                        sx={{
                            fontSize: 14,
                            color: "secondary.main",
                        }}
                    />

                    <Typography
                        sx={{
                            fontSize: "0.58rem",
                            fontWeight: 800,
                            color: "text.secondary",
                            letterSpacing: ".08em",
                        }}
                    >
                        LIVE
                    </Typography>
                </Stack>
            </Stack>

            {/* Value */}
            <Typography
                sx={{
                    position: "relative",
                    zIndex: 2,
                    mt: {
                        xs: 1.8,
                        sm: 2.2,
                    },
                    fontSize: {
                        xs: "1.5rem",
                        sm: "1.85rem",
                        md: "2rem",
                    },
                    lineHeight: 1,
                    fontWeight: 800,
                    letterSpacing: "-0.045em",
                }}
            >
                {value}
            </Typography>

            {/* Title */}
            <Typography
                sx={{
                    position: "relative",
                    zIndex: 2,
                    mt: 0.9,
                    fontSize: {
                        xs: "0.72rem",
                        sm: "0.82rem",
                    },
                    fontWeight: 700,
                    color: "text.primary",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                }}
            >
                {title}
            </Typography>

            {/* Bottom information */}
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{
                    mt: 0.5,
                    position: "relative",
                    zIndex: 2,
                }}
            >
                <Typography
                    sx={{
                        fontSize: {
                            xs: "0.6rem",
                            sm: "0.68rem",
                        },
                        color: "text.secondary",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                    }}
                >
                    {subtitle}
                </Typography>

                {/* Change */}
                <MotionBox
                    animate={{
                        y: [0, -2, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.2,
                        color: "secondary.main",
                        flexShrink: 0,
                        ml: 1,
                    }}
                >
                    <ArrowUpwardRounded
                        sx={{ fontSize: 13 }}
                    />

                    <Typography
                        sx={{
                            fontSize: {
                                xs: "0.58rem",
                                sm: "0.65rem",
                            },
                            fontWeight: 800,
                        }}
                    >
                        {change}
                    </Typography>
                </MotionBox>
            </Stack>

            {/* Animated bottom signal */}
            <Box
                sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: 2,
                    bgcolor: "divider",
                    overflow: "hidden",
                }}
            >
                <MotionBox
                    animate={{
                        x: ["-100%", "100%"],
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    sx={{
                        width: "35%",
                        height: "100%",
                        background: `linear - gradient(
    90deg,
    transparent,
    ${accent},
                            #22D3EE,
    transparent
)`,
                        boxShadow: `0 0 12px ${accent} `,
                    }}
                />
            </Box>
        </MotionPaper>
    );
}

