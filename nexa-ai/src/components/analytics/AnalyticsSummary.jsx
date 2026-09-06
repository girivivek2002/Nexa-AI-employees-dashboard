import {
    CheckCircleRounded,
    GroupsRounded,
    LocationOnRounded,
    WorkspacePremiumRounded,
} from "@mui/icons-material";

import {
    Box,
    Card,
    CardContent,
    Divider,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";

import { motion } from "framer-motion";

import { getAnalyticsData } from "../../data/analyticsData";
import useEmployees from "../../hooks/useEmployees";

const MotionCard = motion(Card);

const AnalyticsSummary = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";

    const { employees } = useEmployees();

    const {
        activeEmployees,
        activePercentage,
        largestDepartment,
        largestDepartmentPercentage,
        totalDepartments,
        totalEmployees,
        totalLocations,
    } = getAnalyticsData(employees);

    const averageExperience =
        employees.length > 0
            ? (
                employees.reduce((total, employee) => {
                    return (
                        total +
                        (parseFloat(employee.experience) || 0)
                    );
                }, 0) / employees.length
            ).toFixed(1)
            : "0";

    const summaryItems = [
        {
            label: "Workforce Health",
            value: `${activePercentage}% active`,
            description:
                activePercentage >= 80
                    ? "Healthy workforce availability"
                    : "Workforce availability needs attention",
            icon: CheckCircleRounded,
            accent:
                activePercentage >= 80
                    ? "#22C55E"
                    : "#F59E0B",
        },
        {
            label: "Largest Department",
            value: largestDepartment.name,
            description: `${largestDepartment.value} employees · ${largestDepartmentPercentage}% of workforce`,
            icon: GroupsRounded,
            accent: "#7C5CFC",
        },
        {
            label: "Experience",
            value: `${averageExperience} years`,
            description: "Average employee experience",
            icon: WorkspacePremiumRounded,
            accent: "#F59E0B",
        },
        {
            label: "Locations",
            value: totalLocations,
            description: `Across ${totalDepartments} departments`,
            icon: LocationOnRounded,
            accent: "#06B6D4",
        },
    ];

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
                delay: 0.4,
            }}
            sx={{
                width: "100%",
                height: "100%",
                minWidth: 0,
                borderRadius: "22px",
                border: "1px solid",
                borderColor: isDark
                    ? "rgba(255,255,255,0.08)"
                    : "rgba(15,23,42,0.08)",
                background: isDark
                    ? "rgba(255,255,255,0.025)"
                    : "#fff",
                boxShadow: isDark
                    ? "0 12px 40px rgba(0,0,0,0.18)"
                    : "0 12px 40px rgba(15,23,42,0.06)",
                overflow: "hidden",
            }}
        >
            <CardContent
                sx={{
                    p: { xs: 2, sm: 2.5, md: 3 },
                    "&:last-child": {
                        pb: { xs: 2, sm: 2.5, md: 3 },
                    },
                }}
            >
                {/* Header */}

                <Box sx={{ mb: 2.5 }}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 800,
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Workforce Summary
                    </Typography>

                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 0.5 }}
                    >
                        A quick overview of your organization's
                        workforce health.
                    </Typography>
                </Box>

                {/* Overall workforce */}

                <Box
                    sx={{
                        p: 2,
                        mb: 2,
                        borderRadius: "14px",
                        background: isDark
                            ? "linear-gradient(135deg, rgba(124,92,252,0.10), rgba(6,182,212,0.06))"
                            : "linear-gradient(135deg, rgba(124,92,252,0.06), rgba(6,182,212,0.04))",
                        border: "1px solid",
                        borderColor: isDark
                            ? "rgba(124,92,252,0.12)"
                            : "rgba(124,92,252,0.10)",
                    }}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        spacing={2}
                    >
                        <Box>
                            <Typography
                                variant="caption"
                                color="text.secondary"
                                sx={{
                                    fontWeight: 600,
                                }}
                            >
                                Total Workforce
                            </Typography>

                            <Typography
                                variant="h4"
                                sx={{
                                    mt: 0.4,
                                    fontWeight: 800,
                                    letterSpacing: "-0.04em",
                                }}
                            >
                                {totalEmployees}
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                width: 52,
                                height: 52,
                                borderRadius: "16px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#7C5CFC",
                                backgroundColor:
                                    "rgba(124,92,252,0.10)",
                            }}
                        >
                            <GroupsRounded />
                        </Box>
                    </Stack>

                    <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{
                            display: "block",
                            mt: 1,
                        }}
                    >
                        {activeEmployees} of {totalEmployees}{" "}
                        employees are currently active.
                    </Typography>
                </Box>

                <Divider
                    sx={{
                        mb: 1,
                        borderColor: isDark
                            ? "rgba(255,255,255,0.07)"
                            : "rgba(15,23,42,0.07)",
                    }}
                />

                {/* Summary items */}

                <Stack>
                    {summaryItems.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <Box key={item.label}>
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    spacing={1.5}
                                    sx={{
                                        py: 1.5,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 40,
                                            height: 40,
                                            flexShrink: 0,
                                            borderRadius: "12px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: item.accent,
                                            backgroundColor: `${item.accent}14`,
                                        }}
                                    >
                                        <Icon
                                            sx={{
                                                fontSize: 20,
                                            }}
                                        />
                                    </Box>

                                    <Box
                                        sx={{
                                            minWidth: 0,
                                            flex: 1,
                                        }}
                                    >
                                        <Typography
                                            variant="caption"
                                            color="text.secondary"
                                            sx={{
                                                fontWeight: 600,
                                            }}
                                        >
                                            {item.label}
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            sx={{
                                                mt: 0.2,
                                                fontWeight: 800,
                                            }}
                                        >
                                            {item.value}
                                        </Typography>

                                        <Typography
                                            variant="caption"
                                            color="text.secondary"
                                            sx={{
                                                display: "block",
                                                mt: 0.2,
                                                overflow: "hidden",
                                                textOverflow:
                                                    "ellipsis",
                                                whiteSpace: "nowrap",
                                            }}
                                        >
                                            {item.description}
                                        </Typography>
                                    </Box>
                                </Stack>

                                {index <
                                    summaryItems.length - 1 && (
                                        <Divider
                                            sx={{
                                                borderColor: isDark
                                                    ? "rgba(255,255,255,0.06)"
                                                    : "rgba(15,23,42,0.06)",
                                            }}
                                        />
                                    )}
                            </Box>
                        );
                    })}
                </Stack>
            </CardContent>
        </MotionCard>
    );
};

export default AnalyticsSummary;