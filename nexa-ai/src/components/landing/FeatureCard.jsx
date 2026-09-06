import { ArrowForwardRounded } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const FeatureCard = ({
    feature,
    index,
    navigate,
}) => {
    return (
        <MotionBox
            initial={{
                opacity: 0,
                y: 40,
                scale: 0.96,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
            }}
            viewport={{
                once: true,
                amount: 0.2,
            }}
            transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
            }}
            sx={{
                minWidth: 0,
            }}
        >
            <MotionBox
                whileHover={{
                    y: -8,
                }}
                transition={{
                    duration: 0.3,
                }}
                sx={{
                    height: "100%",
                }}
            >
                <Paper
                    elevation={0}
                    sx={{
                        position: "relative",
                        height: "100%",
                        minHeight: 255,

                        p: {
                            xs: 2.5,
                            md: 3,
                        },

                        borderRadius: 4,
                        overflow: "hidden",

                        bgcolor: "background.paper",

                        background: (theme) =>
                            theme.palette.mode === "dark"
                                ? "linear-gradient(145deg, rgba(255,255,255,0.045), rgba(255,255,255,0.012))"
                                : "linear-gradient(145deg, rgba(255,255,255,0.98), rgba(248,250,252,0.96))",

                        border: "1px solid",
                        borderColor: "divider",

                        backdropFilter: "blur(20px)",

                        transition:
                            "border-color .35s ease, box-shadow .35s ease, background .35s ease",

                        "&:hover": {
                            borderColor:
                                "rgba(124,92,252,0.45)",

                            boxShadow: (theme) =>
                                theme.palette.mode === "dark"
                                    ? "0 25px 70px rgba(124,92,252,0.14)"
                                    : "0 25px 60px rgba(124,92,252,0.12)",
                        },
                    }}
                >
                    <MotionBox
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.04, 0.13, 0.04],
                        }}
                        transition={{
                            duration: 5 + index,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        sx={{
                            position: "absolute",
                            width: 220,
                            height: 220,
                            borderRadius: "50%",

                            background:
                                "radial-gradient(circle, rgba(124,92,252,0.4), transparent 70%)",

                            filter: "blur(30px)",
                            top: -110,
                            right: -100,
                            pointerEvents: "none",
                        }}
                    />

                    <MotionBox
                        animate={{
                            x: [
                                "-150%",
                                "350%",
                            ],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatDelay: 3 + index,
                            ease: "easeInOut",
                        }}
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "30%",
                            height: "100%",

                            background: (theme) =>
                                theme.palette.mode === "dark"
                                    ? "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)"
                                    : "linear-gradient(90deg, transparent, rgba(124,92,252,0.05), transparent)",

                            transform: "skewX(-20deg)",
                            pointerEvents: "none",
                        }}
                    />

                    <Typography
                        sx={{
                            position: "absolute",
                            top: 22,
                            right: 24,
                            fontSize: "0.7rem",
                            fontWeight: 800,

                            color: (theme) =>
                                theme.palette.mode === "dark"
                                    ? "rgba(255,255,255,0.18)"
                                    : "rgba(15,23,42,0.18)",

                            letterSpacing: "0.1em",
                        }}
                    >
                        0{index + 1}
                    </Typography>

                    <MotionBox
                        whileHover={{
                            scale: 1.12,
                            rotate: 6,
                        }}
                        transition={{
                            duration: 0.3,
                        }}
                        sx={{
                            position: "relative",
                            width: 54,
                            height: 54,
                            display: "grid",
                            placeItems: "center",
                            borderRadius: 2.5,

                            color: "primary.main",

                            background:
                                "linear-gradient(135deg, rgba(124,92,252,0.17), rgba(34,211,238,0.07))",

                            border: "1px solid",
                            borderColor:
                                "rgba(124,92,252,0.2)",

                            mb: 2.5,
                        }}
                    >
                        <MotionBox
                            animate={{
                                rotate: 360,
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            sx={{
                                position: "absolute",
                                inset: -5,
                                borderRadius: "inherit",

                                border: "1px dashed",
                                borderColor:
                                    "rgba(124,92,252,0.2)",
                            }}
                        />

                        {feature.icon}
                    </MotionBox>

                    <Typography
                        variant="h6"
                        fontWeight={800}
                        sx={{
                            position: "relative",
                            zIndex: 2,
                            fontSize: {
                                xs: "1.05rem",
                                md: "1.15rem",
                            },
                        }}
                    >
                        {feature.title}
                    </Typography>

                    <Typography
                        color="text.secondary"
                        sx={{
                            position: "relative",
                            zIndex: 2,
                            mt: 1.2,
                            fontSize: "0.88rem",
                            lineHeight: 1.7,
                            maxWidth: 430,
                        }}
                    >
                        {feature.description}
                    </Typography>

                    <MotionBox
                        whileHover={{
                            x: 6,
                        }}
                        transition={{
                            duration: 0.25,
                        }}
                        onClick={() =>
                            navigate(feature.path)
                        }
                        sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 0.6,
                            mt: 2.2,

                            color: "primary.main",

                            fontSize: "0.78rem",
                            fontWeight: 700,
                            cursor: "pointer",

                            position: "relative",
                            zIndex: 5,
                            userSelect: "none",
                        }}
                    >
                        Explore feature

                        <ArrowForwardRounded
                            sx={{
                                fontSize: 15,
                            }}
                        />
                    </MotionBox>
                </Paper>
            </MotionBox>
        </MotionBox>
    );
};

export default FeatureCard;