import {
    AutoAwesomeRounded,
    BoltRounded,
    GroupsRounded,
    InsightsRounded,
    PsychologyRounded,
    SecurityRounded,
    SmartToyRounded,
} from "@mui/icons-material";

import {
    Box,
    Chip,
    Paper,
    Stack,
    Typography,
} from "@mui/material";

const features = [
    {
        icon: <SmartToyRounded />,
        title: "AI Assistant",
        description:
            "Ask questions and interact with your employee data using natural language.",
    },
    {
        icon: <GroupsRounded />,
        title: "Employee Directory",
        description:
            "Discover employees, teams and departments from one connected workspace.",
    },
    {
        icon: <InsightsRounded />,
        title: "Workforce Analytics",
        description:
            "Turn workforce data into clear insights and smarter business decisions.",
    },
    {
        icon: <PsychologyRounded />,
        title: "AI Insights",
        description:
            "Let AI discover patterns, trends and opportunities across your workforce.",
    },
    {
        icon: <BoltRounded />,
        title: "Instant Answers",
        description:
            "Find the information you need in seconds without searching through dashboards.",
    },
    {
        icon: <SecurityRounded />,
        title: "Secure Workspace",
        description:
            "Protect sensitive employee information with a secure and reliable architecture.",
    },
];

const FeatureCard = ({ feature }) => {
    return (
        <Paper
            elevation={0}
            sx={{
                flex: "0 0 420px",
                width: 420,
                height: 260,
                boxSizing: "border-box",
                p: 3.5,
                borderRadius: "26px",
                display: "flex",

                bgcolor: "background.paper",

                background: (theme) =>
                    theme.palette.mode === "dark"
                        ? "linear-gradient(145deg, rgba(255,255,255,0.07), rgba(255,255,255,0.025))"
                        : "linear-gradient(145deg, rgba(255,255,255,0.98), rgba(248,250,252,0.96))",

                border: "1px solid",
                borderColor: "divider",

                backdropFilter: "blur(20px)",
                position: "relative",
                overflow: "hidden",

                transition:
                    "transform .35s ease, border-color .35s ease, box-shadow .35s ease, background .35s ease",

                "&:hover": {
                    transform: "translateY(-8px)",

                    borderColor:
                        "rgba(124,92,252,.45)",

                    boxShadow: (theme) =>
                        theme.palette.mode === "dark"
                            ? "0 25px 70px rgba(124,92,252,.16)"
                            : "0 25px 60px rgba(124,92,252,.12)",
                },

                "&::before": {
                    content: '""',
                    position: "absolute",
                    width: 220,
                    height: 220,
                    right: -100,
                    top: -110,
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(124,92,252,.20), transparent 70%)",
                    pointerEvents: "none",
                },

                "@media (max-width:600px)": {
                    flex: "0 0 300px",
                    width: 300,
                    height: 240,
                    p: 2.5,
                },
            }}
        >
            <Stack
                sx={{
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    textAlign: "center",
                    position: "relative",
                    zIndex: 2,
                }}
            >
                <Box
                    sx={{
                        width: 56,
                        height: 56,
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "17px",
                        color: "primary.main",

                        background:
                            "linear-gradient(135deg, rgba(124,92,252,.20), rgba(34,211,238,.08))",

                        border: "1px solid",
                        borderColor:
                            "rgba(124,92,252,.25)",

                        boxShadow:
                            "0 10px 30px rgba(124,92,252,.12)",

                        "& svg": {
                            fontSize: 27,
                        },
                    }}
                >
                    {feature.icon}
                </Box>

                <Typography
                    sx={{
                        width: "100%",
                        mt: 2.2,
                        textAlign: "center",
                        fontSize: "1.35rem",
                        lineHeight: 1.25,
                        fontWeight: 800,
                        letterSpacing: "-.025em",
                        color: "text.primary",
                    }}
                >
                    {feature.title}
                </Typography>

                <Typography
                    sx={{
                        width: "100%",
                        maxWidth: 350,
                        mt: 1.2,
                        mx: "auto",
                        textAlign: "center",
                        fontSize: ".86rem",
                        lineHeight: 1.65,
                        color: "text.secondary",
                    }}
                >
                    {feature.description}
                </Typography>

                <Typography
                    sx={{
                        mt: "auto",
                        px: 1.5,
                        py: 0.6,
                        borderRadius: "999px",
                        fontSize: ".62rem",
                        fontWeight: 800,
                        letterSpacing: ".09em",
                        color: "primary.main",
                        bgcolor: "action.selected",
                        border: "1px solid",
                        borderColor:
                            "rgba(124,92,252,.18)",
                    }}
                >
                    AI POWERED
                </Typography>
            </Stack>
        </Paper>
    );
};

const FeatureMarquee = () => {
    return (
        <Box
            sx={{
                width: "100%",
                position: "relative",
                overflow: "hidden",
                py: {
                    xs: 8,
                    md: 12,
                },

                background: (theme) =>
                    theme.palette.mode === "dark"
                        ? "linear-gradient(180deg, transparent, rgba(124,92,252,.025), transparent)"
                        : "linear-gradient(180deg, transparent, rgba(124,92,252,.035), transparent)",
            }}
        >
            <Stack
                sx={{
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    px: {
                        xs: 2,
                        sm: 3,
                    },
                    mb: {
                        xs: 5,
                        md: 7,
                    },
                }}
            >
                <Chip
                    icon={<AutoAwesomeRounded />}
                    label="AI POWERED WORKSPACE"
                    sx={{
                        mb: 2,
                        height: 32,
                        color: "primary.main",
                        bgcolor: "action.selected",
                        border: "1px solid",
                        borderColor:
                            "rgba(124,92,252,.22)",
                        fontSize: ".65rem",
                        fontWeight: 800,
                        letterSpacing: ".08em",

                        "& .MuiChip-icon": {
                            color: "primary.main",
                            fontSize: 17,
                        },
                    }}
                />

                <Typography
                    component="h2"
                    sx={{
                        position: "relative",
                        zIndex: 2,
                        width: "100%",
                        maxWidth: "900px",
                        mx: "auto",
                        textAlign: "center",

                        fontSize: {
                            xs: "2rem",
                            sm: "2.7rem",
                            md: "3.6rem",
                        },

                        lineHeight: 1.08,
                        fontWeight: 850,
                        letterSpacing: "-.05em",
                        color: "text.primary",
                        mb: 0,
                    }}
                >
                    Intelligence built into

                    <Box
                        component="span"
                        sx={{
                            display: "block",
                            position: "relative",
                            zIndex: 3,

                            background:
                                "linear-gradient(90deg,#A78BFA,#22D3EE)",

                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor:
                                "transparent",
                            backgroundClip: "text",

                            pb: {
                                xs: 1,
                                md: 1.5,
                            },
                        }}
                    >
                        every workflow.
                    </Box>
                </Typography>

                <Typography
                    sx={{
                        position: "relative",
                        zIndex: 1,
                        width: "100%",
                        maxWidth: "760px",
                        mx: "auto",
                        mt: {
                            xs: 2.5,
                            md: 3,
                        },
                        textAlign: "center",
                        color: "text.secondary",
                        fontSize: {
                            xs: "0.95rem",
                            sm: "1rem",
                            md: "1.05rem",
                        },
                        lineHeight: 1.7,
                    }}
                >
                    Powerful AI capabilities that help your
                    team understand people, discover
                    information and make smarter decisions.
                </Typography>
            </Stack>

            <Box
                sx={{
                    position: "absolute",
                    zIndex: 10,
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: {
                        xs: 40,
                        md: 170,
                    },
                    pointerEvents: "none",

                    background: (theme) =>
                        theme.palette.mode === "dark"
                            ? "linear-gradient(90deg, #070A12, transparent)"
                            : "linear-gradient(90deg, #F5F7FB, transparent)",
                }}
            />

            <Box
                sx={{
                    position: "absolute",
                    zIndex: 10,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: {
                        xs: 40,
                        md: 170,
                    },
                    pointerEvents: "none",

                    background: (theme) =>
                        theme.palette.mode === "dark"
                            ? "linear-gradient(270deg, #070A12, transparent)"
                            : "linear-gradient(270deg, #F5F7FB, transparent)",
                }}
            />

            <Box
                sx={{
                    width: "100%",
                    overflow: "hidden",
                }}
            >
                <Box
                    className="nexa-marquee-track"
                    sx={{
                        display: "flex",
                        width: "max-content",
                        gap: 3,
                        paddingLeft: 3,
                        paddingRight: 3,

                        animation:
                            "nexaMarquee 35s linear infinite",

                        "&:hover": {
                            animationPlayState:
                                "paused",
                        },

                        "@keyframes nexaMarquee": {
                            from: {
                                transform:
                                    "translateX(0)",
                            },
                            to: {
                                transform:
                                    "translateX(calc(-50% - 12px))",
                            },
                        },

                        "@media (max-width:600px)": {
                            gap: 2,
                            paddingLeft: 2,
                            paddingRight: 2,
                            animationDuration:
                                "28s",
                        },
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            gap: 3,

                            "@media (max-width:600px)": {
                                gap: 2,
                            },
                        }}
                    >
                        {features.map((feature) => (
                            <FeatureCard
                                key={feature.title}
                                feature={feature}
                            />
                        ))}
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            gap: 3,

                            "@media (max-width:600px)": {
                                gap: 2,
                            },
                        }}
                    >
                        {features.map((feature) => (
                            <FeatureCard
                                key={`duplicate-${feature.title}`}
                                feature={feature}
                            />
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default FeatureMarquee;