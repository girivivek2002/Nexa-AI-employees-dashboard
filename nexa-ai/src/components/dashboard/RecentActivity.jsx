import {
    ArrowForwardRounded,
    PersonAddAltRounded,
} from "@mui/icons-material";

import {
    Avatar,
    Box,
    Button,
    Divider,
    Paper,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import useEmployees from "../../hooks/useEmployees";

const MotionPaper = motion(Paper);
const MotionBox = motion(Box);

const RecentActivity = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const {
        employees,
        loading,
    } = useEmployees();

    const isDark = theme.palette.mode === "dark";

    // Get recently joined employees from MongoDB data
    const recentEmployees = [...employees]
        .sort((a, b) => {
            const dateA = new Date(a.joined);
            const dateB = new Date(b.joined);

            return dateB - dateA;
        })
        .slice(0, 5);

    return (
        <MotionPaper
            initial={{
                opacity: 0,
                y: 25,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.55,
                delay: 0.15,
            }}
            elevation={0}
            sx={{
                position: "relative",
                width: "100%",
                minWidth: 0,
                overflow: "hidden",

                p: {
                    xs: 2,
                    sm: 2.5,
                    md: 3,
                },

                borderRadius: {
                    xs: 3,
                    md: 4,
                },

                border: "1px solid",
                borderColor: "divider",

                background: isDark
                    ? `linear-gradient(
                        145deg,
                        ${theme.palette.background.paper} 0%,
                        rgba(124, 92, 252, 0.055) 100%
                    )`
                    : `linear-gradient(
                        145deg,
                        ${theme.palette.background.paper} 0%,
                        rgba(124, 92, 252, 0.025) 100%
                    )`,

                transition: "all 0.3s ease",

                "&:hover": {
                    borderColor:
                        "rgba(124, 92, 252, 0.35)",

                    boxShadow: isDark
                        ? "0 18px 45px rgba(0,0,0,0.25)"
                        : "0 18px 45px rgba(30,25,80,0.08)",
                },
            }}
        >
            {/* Ambient glow */}

            <Box
                sx={{
                    position: "absolute",
                    top: -90,
                    right: -80,

                    width: 180,
                    height: 180,

                    borderRadius: "50%",

                    background:
                        "radial-gradient(circle, rgba(124,92,252,0.14), transparent 70%)",

                    pointerEvents: "none",
                }}
            />

            {/* Header */}

            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                spacing={2}
                sx={{
                    position: "relative",
                    zIndex: 1,
                    mb: 2.5,
                }}
            >
                <Box sx={{ minWidth: 0 }}>
                    <Typography
                        sx={{
                            fontWeight: 800,
                            letterSpacing: "-0.02em",

                            color: "text.primary",

                            fontSize: {
                                xs: "1rem",
                                sm: "1.1rem",
                            },
                        }}
                    >
                        Recent Activity
                    </Typography>

                    <Typography
                        sx={{
                            mt: 0.4,

                            color: "text.secondary",

                            fontSize: "0.8rem",
                        }}
                    >
                        Recently joined employees
                    </Typography>
                </Box>

                {/* Header icon */}

                <Box
                    sx={{
                        width: 38,
                        height: 38,

                        flexShrink: 0,

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",

                        borderRadius: 2.5,

                        color: "#7C5CFC",

                        backgroundColor: isDark
                            ? "rgba(124,92,252,0.12)"
                            : "rgba(124,92,252,0.08)",
                    }}
                >
                    <PersonAddAltRounded fontSize="small" />
                </Box>
            </Stack>

            {/* Employee activity */}

            <Stack
                divider={
                    <Divider
                        flexItem
                        sx={{
                            borderColor:
                                theme.palette.divider,
                            opacity: 0.7,
                        }}
                    />
                }
                sx={{
                    position: "relative",
                    zIndex: 1,
                }}
            >
                {recentEmployees.map(
                    (employee, index) => {
                        const initials =
                            employee.name
                                .split(" ")
                                .map(
                                    (word) =>
                                        word[0]
                                )
                                .join("")
                                .slice(0, 2)
                                .toUpperCase();

                        return (
                            <MotionBox
                                key={employee._id || employee.id}
                                initial={{
                                    opacity: 0,
                                    x: -15,
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                transition={{
                                    duration: 0.4,
                                    delay:
                                        0.25 +
                                        index * 0.08,
                                }}
                                sx={{
                                    py: 1.5,

                                    display: "flex",
                                    alignItems:
                                        "center",

                                    gap: 1.5,

                                    borderRadius: 2.5,

                                    transition:
                                        "all 0.25s ease",

                                    "&:hover": {
                                        px: 1,

                                        backgroundColor:
                                            isDark
                                                ? "rgba(255,255,255,0.035)"
                                                : "rgba(124,92,252,0.035)",
                                    },
                                }}
                            >
                                {/* Avatar */}

                                <Avatar
                                    sx={{
                                        width: {
                                            xs: 38,
                                            sm: 42,
                                        },

                                        height: {
                                            xs: 38,
                                            sm: 42,
                                        },

                                        flexShrink: 0,

                                        fontSize:
                                            "0.75rem",
                                        fontWeight: 800,

                                        color:
                                            "#7C5CFC",

                                        background:
                                            isDark
                                                ? "rgba(124,92,252,0.15)"
                                                : "rgba(124,92,252,0.09)",

                                        border: "1px solid",

                                        borderColor:
                                            isDark
                                                ? "rgba(124,92,252,0.25)"
                                                : "rgba(124,92,252,0.15)",
                                    }}
                                >
                                    {initials}
                                </Avatar>

                                {/* Employee information */}

                                <Box
                                    sx={{
                                        flex: 1,
                                        minWidth: 0,
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color:
                                                "text.primary",

                                            fontWeight: 700,

                                            fontSize: {
                                                xs: "0.8rem",
                                                sm: "0.84rem",
                                            },

                                            overflow:
                                                "hidden",
                                            textOverflow:
                                                "ellipsis",
                                            whiteSpace:
                                                "nowrap",
                                        }}
                                    >
                                        {employee.name}
                                    </Typography>

                                    <Stack
                                        direction="row"
                                        alignItems="center"
                                        spacing={0.6}
                                        sx={{
                                            mt: 0.35,
                                            minWidth: 0,
                                        }}
                                    >
                                        <PersonAddAltRounded
                                            sx={{
                                                fontSize: 14,
                                                color:
                                                    "#7C5CFC",
                                                flexShrink: 0,
                                            }}
                                        />

                                        <Typography
                                            sx={{
                                                color:
                                                    "text.secondary",

                                                fontSize:
                                                    "0.72rem",

                                                overflow:
                                                    "hidden",

                                                textOverflow:
                                                    "ellipsis",

                                                whiteSpace:
                                                    "nowrap",
                                            }}
                                        >
                                            Joined{" "}
                                            {
                                                employee.department
                                            }
                                        </Typography>
                                    </Stack>
                                </Box>

                                {/* Joined date */}

                                <Typography
                                    sx={{
                                        flexShrink: 0,

                                        color:
                                            "text.secondary",

                                        fontSize: {
                                            xs: "0.62rem",
                                            sm: "0.68rem",
                                        },
                                    }}
                                >
                                    {employee.joined}
                                </Typography>
                            </MotionBox>
                        );
                    }
                )}
            </Stack>

            {/* Empty state */}

            {!loading &&
                recentEmployees.length === 0 && (
                    <Box
                        sx={{
                            py: 4,
                            textAlign: "center",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "0.8rem",
                                color:
                                    "text.secondary",
                            }}
                        >
                            No employee activity yet.
                        </Typography>
                    </Box>
                )}

            {/* Footer */}

            <Button
                fullWidth
                endIcon={<ArrowForwardRounded />}
                onClick={() =>
                    navigate("/employees")
                }
                sx={{
                    position: "relative",
                    zIndex: 1,

                    mt: 2,

                    py: 1.1,

                    borderRadius: 2.5,

                    color: "#7C5CFC",

                    fontWeight: 700,

                    fontSize: "0.78rem",

                    backgroundColor: isDark
                        ? "rgba(124,92,252,0.08)"
                        : "rgba(124,92,252,0.05)",

                    "&:hover": {
                        backgroundColor: isDark
                            ? "rgba(124,92,252,0.14)"
                            : "rgba(124,92,252,0.09)",
                    },

                    "& .MuiButton-endIcon": {
                        transition:
                            "transform 0.25s ease",
                    },

                    "&:hover .MuiButton-endIcon": {
                        transform:
                            "translateX(4px)",
                    },
                }}
            >
                View all employees
            </Button>
        </MotionPaper>
    );
};

export default RecentActivity;