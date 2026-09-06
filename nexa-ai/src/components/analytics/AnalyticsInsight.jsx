import {
    AutoAwesomeRounded,
    ArrowForwardRounded,
    GroupsRounded,
    TrendingUpRounded,
} from "@mui/icons-material";

import {
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    Divider,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { getAnalyticsData } from "../../data/analyticsData";
import useEmployees from "../../hooks/useEmployees";

const MotionCard = motion(Card);

const AnalyticsInsight = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const isDark = theme.palette.mode === "dark";

    const { employees } = useEmployees();

    const {
        totalEmployees,
        activeEmployees,
        activePercentage,
        largestDepartment,
        largestDepartmentPercentage,
    } = getAnalyticsData(employees);

    const inactiveOrAwayEmployees =
        totalEmployees - activeEmployees;

    return (
        <MotionCard
            initial={{
                opacity: 0,
                y: 25,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.5,
                delay: 0.35,
            }}
            sx={{
                width: "100%",
                height: "100%",
                minWidth: 0,
                borderRadius: "22px",
                border: "1px solid",
                borderColor: isDark
                    ? "rgba(124,92,252,0.20)"
                    : "rgba(124,92,252,0.15)",
                background: isDark
                    ? "linear-gradient(145deg, rgba(124,92,252,0.10), rgba(255,255,255,0.025))"
                    : "linear-gradient(145deg, rgba(124,92,252,0.06), #ffffff)",
                boxShadow: isDark
                    ? "0 12px 40px rgba(0,0,0,0.20)"
                    : "0 12px 40px rgba(124,92,252,0.08)",
                overflow: "hidden",
                position: "relative",
            }}
        >
            {/* Decorative glow */}

            <Box
                sx={{
                    position: "absolute",
                    width: 180,
                    height: 180,
                    borderRadius: "50%",
                    top: -100,
                    right: -70,
                    background:
                        "linear-gradient(135deg, #7C5CFC, #06B6D4)",
                    opacity: 0.08,
                    filter: "blur(8px)",
                    pointerEvents: "none",
                }}
            />

            <CardContent
                sx={{
                    position: "relative",
                    zIndex: 1,
                    p: { xs: 2, sm: 2.5, md: 3 },
                    "&:last-child": {
                        pb: { xs: 2, sm: 2.5, md: 3 },
                    },
                }}
            >
                {/* Header */}

                <Stack
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="space-between"
                    spacing={2}
                >
                    <Stack
                        direction="row"
                        spacing={1.5}
                        alignItems="center"
                    >
                        <Box
                            sx={{
                                width: 46,
                                height: 46,
                                flexShrink: 0,
                                borderRadius: "14px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#fff",
                                background:
                                    "linear-gradient(135deg, #7C5CFC, #06B6D4)",
                                boxShadow:
                                    "0 8px 24px rgba(124,92,252,0.25)",
                            }}
                        >
                            <AutoAwesomeRounded />
                        </Box>

                        <Box>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 800,
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                AI Workforce Insight
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                NEXA AI analysis
                            </Typography>
                        </Box>
                    </Stack>

                    <Chip
                        label="AI Insight"
                        size="small"
                        icon={
                            <AutoAwesomeRounded
                                sx={{ fontSize: 15 }}
                            />
                        }
                        sx={{
                            display: {
                                xs: "none",
                                sm: "flex",
                            },
                            borderRadius: "8px",
                            fontWeight: 700,
                            color: "#7C5CFC",
                            backgroundColor:
                                "rgba(124,92,252,0.10)",
                            border:
                                "1px solid rgba(124,92,252,0.15)",

                            "& .MuiChip-icon": {
                                color: "#7C5CFC",
                            },
                        }}
                    />
                </Stack>

                <Divider
                    sx={{
                        my: 2.5,
                        borderColor: isDark
                            ? "rgba(255,255,255,0.08)"
                            : "rgba(15,23,42,0.08)",
                    }}
                />

                {/* Main insight */}

                <Box
                    sx={{
                        p: 2,
                        borderRadius: "14px",
                        backgroundColor: isDark
                            ? "rgba(255,255,255,0.035)"
                            : "rgba(255,255,255,0.7)",
                        border: "1px solid",
                        borderColor: isDark
                            ? "rgba(255,255,255,0.06)"
                            : "rgba(15,23,42,0.05)",
                    }}
                >
                    <Stack
                        direction="row"
                        spacing={1.5}
                        alignItems="flex-start"
                    >
                        <TrendingUpRounded
                            sx={{
                                color: "#7C5CFC",
                                mt: 0.2,
                            }}
                        />

                        <Typography
                            variant="body2"
                            sx={{
                                lineHeight: 1.8,
                                color: "text.primary",
                            }}
                        >
                            <strong>
                                {largestDepartment.name}
                            </strong>{" "}
                            is currently your largest department,
                            representing{" "}
                            <strong>
                                {largestDepartmentPercentage}%
                            </strong>{" "}
                            of the workforce with{" "}
                            <strong>
                                {largestDepartment.value}
                            </strong>{" "}
                            employees. Overall,{" "}
                            <strong>{activePercentage}%</strong>{" "}
                            of your workforce is currently active.
                        </Typography>
                    </Stack>
                </Box>

                {/* Metrics */}

                <Stack
                    direction={{
                        xs: "column",
                        sm: "row",
                    }}
                    spacing={1.5}
                    sx={{ mt: 2 }}
                >
                    {/* Largest department */}

                    <Box
                        sx={{
                            flex: 1,
                            p: 1.5,
                            borderRadius: "12px",
                            backgroundColor: isDark
                                ? "rgba(255,255,255,0.025)"
                                : "rgba(15,23,42,0.025)",
                        }}
                    >
                        <Stack
                            direction="row"
                            spacing={1}
                            alignItems="center"
                        >
                            <GroupsRounded
                                sx={{
                                    fontSize: 19,
                                    color: "#7C5CFC",
                                }}
                            />

                            <Typography
                                variant="caption"
                                color="text.secondary"
                            >
                                Largest team
                            </Typography>
                        </Stack>

                        <Typography
                            sx={{
                                mt: 0.7,
                                fontWeight: 800,
                            }}
                        >
                            {largestDepartment.name}
                        </Typography>
                    </Box>

                    {/* Active workforce */}

                    <Box
                        sx={{
                            flex: 1,
                            p: 1.5,
                            borderRadius: "12px",
                            backgroundColor: isDark
                                ? "rgba(255,255,255,0.025)"
                                : "rgba(15,23,42,0.025)",
                        }}
                    >
                        <Stack
                            direction="row"
                            spacing={1}
                            alignItems="center"
                        >
                            <Box
                                sx={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: "50%",
                                    backgroundColor: "#22C55E",
                                    boxShadow:
                                        "0 0 0 4px rgba(34,197,94,0.10)",
                                }}
                            />

                            <Typography
                                variant="caption"
                                color="text.secondary"
                            >
                                Active workforce
                            </Typography>
                        </Stack>

                        <Typography
                            sx={{
                                mt: 0.7,
                                fontWeight: 800,
                            }}
                        >
                            {activeEmployees} / {totalEmployees}
                        </Typography>
                    </Box>
                </Stack>

                {/* Secondary observation */}

                {inactiveOrAwayEmployees > 0 && (
                    <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{
                            display: "block",
                            mt: 2,
                            lineHeight: 1.6,
                        }}
                    >
                        {inactiveOrAwayEmployees} employee
                        {inactiveOrAwayEmployees > 1 ? "s are" : " is"}{" "}
                        currently outside the active workforce status.
                    </Typography>
                )}

                {/* CTA */}

                <Button
                    variant="text"
                    endIcon={<ArrowForwardRounded />}
                    onClick={() => navigate("/assistant")}
                    sx={{
                        mt: 2,
                        px: 0,
                        textTransform: "none",
                        fontWeight: 700,
                        color: "#7C5CFC",

                        "& .MuiButton-endIcon": {
                            transition:
                                "transform 0.25s ease",
                        },

                        "&:hover": {
                            backgroundColor: "transparent",

                            "& .MuiButton-endIcon": {
                                transform:
                                    "translateX(4px)",
                            },
                        },
                    }}
                >
                    Ask NEXA AI for deeper insights
                </Button>
            </CardContent>
        </MotionCard>
    );
};

export default AnalyticsInsight;