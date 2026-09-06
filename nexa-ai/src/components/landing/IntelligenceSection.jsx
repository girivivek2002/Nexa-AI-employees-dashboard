import {
    AutoAwesomeRounded,
    GroupsRounded,
    InsightsRounded,
    SmartToyRounded,
} from "@mui/icons-material";

import {
    Box,
    Container,
    Stack,
    Typography,
} from "@mui/material";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import FeatureCard from "./FeatureCard";
import LiveAIActivity from "./LiveAIActivity";
import Benefits from "./Benefits";

const MotionBox = motion(Box);

const features = [
    {
        icon: <SmartToyRounded />,
        title: "AI Assistant",
        description:
            "Ask questions, get instant answers and interact with your employee data using natural language.",
        path: "/assistant",
    },
    {
        icon: <GroupsRounded />,
        title: "Employee Directory",
        description:
            "Find employees instantly with smart search, department filters and beautifully designed profiles.",
        path: "/employees",
    },
    {
        icon: <InsightsRounded />,
        title: "Workforce Analytics",
        description:
            "Understand your workforce with interactive charts, insights and real-time visual analytics.",
        path: "/analytics",
    },
];

const IntelligenceSection = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                position: "relative",
                py: {
                    xs: 9,
                    md: 13,
                },
                overflow: "hidden",

                borderTop: "1px solid",
                borderColor: "divider",

                background: (theme) =>
                    theme.palette.mode === "dark"
                        ? "linear-gradient(180deg, #070A12 0%, #090D18 50%, #070A12 100%)"
                        : "linear-gradient(180deg, #F5F7FB 0%, #FFFFFF 50%, #F5F7FB 100%)",

                transition:
                    "background 0.3s ease, border-color 0.3s ease",
            }}
        >
            <MotionBox
                animate={{
                    x: [0, 120, -40, 0],
                    y: [0, -50, 30, 0],
                    scale: [1, 1.2, 0.9, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                sx={{
                    position: "absolute",
                    width: 600,
                    height: 600,
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(124,92,252,0.13), transparent 68%)",
                    filter: "blur(60px)",
                    top: -350,
                    left: -250,
                    pointerEvents: "none",
                }}
            />

            <MotionBox
                animate={{
                    x: [0, -100, 50, 0],
                    y: [0, 50, -30, 0],
                    scale: [1, 0.9, 1.15, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                sx={{
                    position: "absolute",
                    width: 600,
                    height: 600,
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(34,211,238,0.09), transparent 68%)",
                    filter: "blur(60px)",
                    right: -300,
                    bottom: -350,
                    pointerEvents: "none",
                }}
            />

            <Container
                maxWidth={false}
                sx={{
                    width: {
                        xs: "94%",
                        sm: "92%",
                        lg: "90%",
                    },
                    maxWidth: "1500px",
                    mx: "auto",
                    position: "relative",
                    zIndex: 2,
                }}
            >
                <MotionBox
                    initial={{
                        opacity: 0,
                        y: 35,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    sx={{
                        textAlign: "center",
                        mb: {
                            xs: 6,
                            md: 8,
                        },
                    }}
                >
                    <MotionBox
                        animate={{
                            opacity: [0.65, 1, 0.65],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 1,
                            px: 2,
                            py: 0.8,
                            mb: 2.5,
                            borderRadius: 20,

                            border: "1px solid",
                            borderColor:
                                "rgba(124,92,252,0.2)",

                            bgcolor: "action.selected",
                        }}
                    >
                        <AutoAwesomeRounded
                            sx={{
                                fontSize: 15,
                                color: "primary.main",
                            }}
                        />

                        <Typography
                            sx={{
                                color: "primary.main",
                                fontSize: "0.7rem",
                                fontWeight: 800,
                                letterSpacing: "0.15em",
                            }}
                        >
                            INTELLIGENCE BUILT IN
                        </Typography>
                    </MotionBox>

                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: {
                                xs: "2.3rem",
                                sm: "3rem",
                                md: "4rem",
                            },
                            fontWeight: 850,
                            letterSpacing: "-0.045em",
                            lineHeight: 1.05,
                            color: "text.primary",
                        }}
                    >
                        Everything your team needs.
                    </Typography>

                    <Typography
                        sx={{
                            mt: 2,
                            maxWidth: 680,
                            mx: "auto",
                            color: "text.secondary",
                            lineHeight: 1.8,
                            fontSize: {
                                xs: "0.95rem",
                                md: "1.05rem",
                            },
                        }}
                    >
                        One intelligent workspace that turns employee
                        data into answers, insights and better decisions.
                    </Typography>
                </MotionBox>

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "repeat(3, minmax(0, 1fr))",
                        },
                        gap: {
                            xs: 2,
                            md: 3,
                        },
                        width: "100%",
                    }}
                >
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={feature.title}
                            feature={feature}
                            index={index}
                            navigate={navigate}
                        />
                    ))}
                </Box>

                <LiveAIActivity />

                <Benefits />
            </Container>
        </Box>
    );
};

export default IntelligenceSection;