
import {
    ArrowForwardRounded,
    AutoAwesomeRounded,
} from "@mui/icons-material";

import {
    Box,
    Button,
    Container,
    Stack,
    Typography,
} from "@mui/material";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MotionBox = motion(Box);

const BottomCTA = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                position: "relative",
                overflow: "hidden",
                py: {
                    xs: 9,
                    sm: 12,
                    md: 16,
                },

                bgcolor: "background.default",
            }}
        >
            {/* =========================================
                MAIN AMBIENT GLOW
            ========================================= */}

            <MotionBox
                animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.18, 0.3, 0.18],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                sx={{
                    position: "absolute",

                    width: {
                        xs: 280,
                        sm: 450,
                        md: 650,
                    },

                    height: {
                        xs: 280,
                        sm: 450,
                        md: 650,
                    },

                    left: "50%",
                    top: "50%",

                    transform: "translate(-50%, -50%)",

                    borderRadius: "50%",

                    background: (theme) =>
                        theme.palette.mode === "dark"
                            ? "radial-gradient(circle, rgba(124,92,252,.18), rgba(34,211,238,.06) 35%, transparent 70%)"
                            : "radial-gradient(circle, rgba(124,92,252,.10), rgba(34,211,238,.035) 35%, transparent 70%)",

                    filter: "blur(25px)",

                    pointerEvents: "none",
                }}
            />

            {/* =========================================
                ORBIT
            ========================================= */}

            <Box
                sx={{
                    position: "absolute",

                    width: {
                        xs: 250,
                        sm: 400,
                        md: 560,
                    },

                    height: {
                        xs: 250,
                        sm: 400,
                        md: 560,
                    },

                    left: "50%",
                    top: "50%",

                    transform:
                        "translate(-50%, -50%)",

                    borderRadius: "50%",

                    border: "1px solid",

                    borderColor: (theme) =>
                        theme.palette.mode === "dark"
                            ? "rgba(167,139,250,.08)"
                            : "rgba(124,92,252,.10)",

                    pointerEvents: "none",

                    animation:
                        "orbitRotate 24s linear infinite",

                    "@keyframes orbitRotate": {
                        from: {
                            transform:
                                "translate(-50%, -50%) rotate(0deg)",
                        },

                        to: {
                            transform:
                                "translate(-50%, -50%) rotate(360deg)",
                        },
                    },

                    "&::before": {
                        content: '""',

                        position: "absolute",

                        inset: "13%",

                        borderRadius: "50%",

                        border: "1px dashed",

                        borderColor: (theme) =>
                            theme.palette.mode === "dark"
                                ? "rgba(34,211,238,.10)"
                                : "rgba(34,211,238,.14)",
                    },

                    "&::after": {
                        content: '""',

                        position: "absolute",

                        width: 7,
                        height: 7,

                        top: "5%",
                        left: "50%",

                        transform:
                            "translateX(-50%)",

                        borderRadius: "50%",

                        bgcolor:
                            "secondary.main",

                        boxShadow:
                            "0 0 18px rgba(34,211,238,.7)",
                    },
                }}
            />

            {/* =========================================
                FLOATING PARTICLES
            ========================================= */}

            {[...Array(10)].map((_, index) => (
                <MotionBox
                    key={index}
                    animate={{
                        y: [0, -18, 0],
                        opacity: [0.15, 0.65, 0.15],
                    }}
                    transition={{
                        duration:
                            3.5 + (index % 4) * 0.7,

                        delay: index * 0.25,

                        repeat: Infinity,

                        ease: "easeInOut",
                    }}
                    sx={{
                        position: "absolute",

                        left:
                            `${8 + ((index * 71) % 84)}% `,

                        top:
                            `${15 + ((index * 43) % 68)}% `,

                        width:
                            index % 3 === 0 ? 4 : 2,

                        height:
                            index % 3 === 0 ? 4 : 2,

                        borderRadius: "50%",

                        bgcolor:
                            index % 2 === 0
                                ? "primary.main"
                                : "secondary.main",

                        boxShadow:
                            "0 0 10px currentColor",

                        pointerEvents: "none",
                    }}
                />
            ))}

            {/* =========================================
                CONTENT
            ========================================= */}

            <Container
                maxWidth="md"
                sx={{
                    position: "relative",
                    zIndex: 5,

                    display: "flex",
                    justifyContent: "center",

                    textAlign: "center",
                }}
            >
                <Stack
                    alignItems="center"
                    justifyContent="center"
                    spacing={0}
                    sx={{
                        width: "100%",
                        maxWidth: 760,

                        mx: "auto",

                        textAlign: "center",
                    }}
                >
                    {/* Badge */}

                    <MotionBox
                        animate={{
                            y: [0, -4, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        sx={{
                            display: "inline-flex",

                            alignItems: "center",
                            justifyContent: "center",

                            gap: 1,

                            px: 2,
                            py: 0.9,

                            mb: 3,

                            borderRadius: 20,

                            border: "1px solid",

                            borderColor: (theme) =>
                                theme.palette.mode ===
                                    "dark"
                                    ? "rgba(167,139,250,.2)"
                                    : "rgba(124,92,252,.18)",

                            bgcolor: (theme) =>
                                theme.palette.mode ===
                                    "dark"
                                    ? "rgba(124,92,252,.06)"
                                    : "rgba(124,92,252,.06)",

                            boxShadow: (theme) =>
                                theme.palette.mode ===
                                    "dark"
                                    ? "0 8px 30px rgba(124,92,252,.08)"
                                    : "0 8px 30px rgba(124,92,252,.06)",

                            backdropFilter:
                                "blur(12px)",
                        }}
                    >
                        <AutoAwesomeRounded
                            sx={{
                                fontSize: 16,
                                color: "primary.main",
                            }}
                        />

                        <Typography
                            sx={{
                                fontSize: ".65rem",
                                fontWeight: 800,
                                letterSpacing: ".12em",
                                color: "primary.main",
                            }}
                        >
                            INTELLIGENCE, ACTIVATED
                        </Typography>
                    </MotionBox>

                    {/* =================================
                        HEADING
                    ================================= */}

                    <Typography
                        component="h2"
                        sx={{
                            width: "100%",

                            m: 0,

                            textAlign: "center",

                            fontSize: {
                                xs: "2.4rem",
                                sm: "3.5rem",
                                md: "4.6rem",
                            },

                            lineHeight: {
                                xs: 1.08,
                                md: 1,
                            },

                            fontWeight: 900,

                            letterSpacing: "-.055em",

                            color: "text.primary",
                        }}
                    >
                        <Box
                            component="span"
                            sx={{
                                display: "block",
                            }}
                        >
                            Work smarter.
                        </Box>

                        <Box
                            component="span"
                            sx={{
                                display: "block",

                                background:
                                    "linear-gradient(90deg,#7C5CFC,#22D3EE,#7C5CFC)",

                                backgroundSize:
                                    "200% auto",

                                WebkitBackgroundClip:
                                    "text",

                                WebkitTextFillColor:
                                    "transparent",

                                animation:
                                    "gradientMove 4s linear infinite",

                                "@keyframes gradientMove": {
                                    from: {
                                        backgroundPosition:
                                            "0% center",
                                    },

                                    to: {
                                        backgroundPosition:
                                            "200% center",
                                    },
                                },
                            }}
                        >
                            think with NEXA.
                        </Box>
                    </Typography>

                    {/* =================================
                        DESCRIPTION
                    ================================= */}

                    <Typography
                        sx={{
                            width: "100%",

                            maxWidth: 600,

                            mx: "auto",

                            mt: 3,

                            px: {
                                xs: 1,
                                sm: 0,
                            },

                            textAlign: "center",

                            color: "text.secondary",

                            fontSize: {
                                xs: ".92rem",
                                sm: "1rem",
                                md: "1.08rem",
                            },

                            lineHeight: 1.8,
                        }}
                    >
                        Turn your workplace data into
                        intelligent answers, meaningful
                        insights, and faster decisions.
                    </Typography>

                    {/* =================================
                        BUTTON
                    ================================= */}

                    <MotionBox
                        whileHover={{
                            scale: 1.04,
                        }}
                        whileTap={{
                            scale: 0.97,
                        }}
                        sx={{
                            position: "relative",
                            mt: 5,
                        }}
                    >
                        {/* Button glow */}

                        <MotionBox
                            animate={{
                                scale: [1, 1.18, 1],
                                opacity: [
                                    0.25,
                                    0.45,
                                    0.25,
                                ],
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            sx={{
                                position: "absolute",

                                inset: -10,

                                borderRadius: 4,

                                background:
                                    "linear-gradient(90deg,#7C5CFC,#22D3EE)",

                                filter: "blur(18px)",

                                zIndex: 0,
                            }}
                        />

                        <Button
                            size="large"
                            variant="contained"
                            endIcon={
                                <ArrowForwardRounded />
                            }
                            onClick={() =>
                                navigate("/assistant")
                            }
                            sx={{
                                position: "relative",
                                zIndex: 2,

                                minWidth: {
                                    xs: 205,
                                    sm: 230,
                                },

                                px: 4,
                                py: 1.7,

                                borderRadius: 3,

                                fontSize: ".95rem",

                                fontWeight: 800,

                                color: "#fff",

                                background:
                                    "linear-gradient(135deg,#7C5CFC,#22D3EE)",

                                boxShadow:
                                    "0 12px 40px rgba(124,92,252,.22)",

                                "&:hover": {
                                    background:
                                        "linear-gradient(135deg,#6D4FE8,#16BFD9)",

                                    boxShadow:
                                        "0 18px 55px rgba(34,211,238,.25)",
                                },

                                "& .MuiButton-endIcon": {
                                    transition:
                                        "transform .3s ease",
                                },

                                "&:hover .MuiButton-endIcon": {
                                    transform:
                                        "translateX(5px)",
                                },
                            }}
                        >
                            Launch NEXA AI
                        </Button>
                    </MotionBox>

                    {/* Bottom caption */}

                    <Typography
                        sx={{
                            mt: 2.5,

                            textAlign: "center",

                            fontSize: ".68rem",

                            color: "text.secondary",

                            opacity: 0.65,

                            letterSpacing: ".04em",
                        }}
                    >
                        Your intelligent workspace is ready.
                    </Typography>
                </Stack>
            </Container>
        </Box>
    );
};

export default BottomCTA;

