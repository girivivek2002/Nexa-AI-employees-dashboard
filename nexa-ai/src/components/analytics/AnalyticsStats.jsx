import {
    BusinessRounded,
    GroupsRounded,
    PersonRounded,
    TimelineRounded,
} from "@mui/icons-material";

import {
    Box,
    Card,
    CardContent,
    Grid,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";

import { motion } from "framer-motion";

import { getAnalyticsData } from "../../data/analyticsData";
import useEmployees from "../../hooks/useEmployees";

const MotionCard = motion(Card);

const AnalyticsStats = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";

    const { employees } = useEmployees();

    const {
        totalEmployees,
        activeEmployees,
        totalDepartments,
    } = getAnalyticsData(employees);

    // Calculate average experience from values like "5 years"
    const averageExperience =
        employees.length > 0
            ? (
                employees.reduce((total, employee) => {
                    const years =
                        parseFloat(employee.experience) || 0;

                    return total + years;
                }, 0) / employees.length
            ).toFixed(1)
            : "0";

    const stats = [
        {
            title: "Total Employees",
            value: totalEmployees,
            subtitle: "Current workforce",
            icon: GroupsRounded,
            accent: "#7C5CFC",
        },
        {
            title: "Active Employees",
            value: activeEmployees,
            subtitle: "Currently active",
            icon: PersonRounded,
            accent: "#22C55E",
        },
        {
            title: "Departments",
            value: totalDepartments,
            subtitle: "Across organization",
            icon: BusinessRounded,
            accent: "#06B6D4",
        },
        {
            title: "Avg. Experience",
            value: `${averageExperience} yrs`,
            subtitle: "Average employee experience",
            icon: TimelineRounded,
            accent: "#F59E0B",
        },
    ];

    return (
        <Grid container spacing={{ xs: 2, md: 2.5 }}>
            {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                    <Grid
                        key={stat.title}
                        size={{
                            xs: 12,
                            sm: 6,
                            lg: 3,
                        }}
                    >
                        <MotionCard
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.45,
                                delay: index * 0.08,
                            }}
                            whileHover={{
                                y: -5,
                            }}
                            sx={{
                                height: "100%",
                                borderRadius: "20px",
                                border: "1px solid",
                                borderColor: isDark
                                    ? "rgba(255,255,255,0.08)"
                                    : "rgba(15,23,42,0.08)",
                                background: isDark
                                    ? "rgba(255,255,255,0.025)"
                                    : "#ffffff",
                                boxShadow: isDark
                                    ? "0 10px 35px rgba(0,0,0,0.18)"
                                    : "0 10px 35px rgba(15,23,42,0.06)",
                                overflow: "hidden",
                                position: "relative",
                                transition:
                                    "border-color 0.25s ease, box-shadow 0.25s ease",

                                "&:hover": {
                                    borderColor: `${stat.accent}55`,
                                    boxShadow: isDark
                                        ? `0 16px 40px ${stat.accent}18`
                                        : `0 16px 40px ${stat.accent}15`,
                                },
                            }}
                        >
                            {/* Accent glow */}

                            <Box
                                sx={{
                                    position: "absolute",
                                    width: 100,
                                    height: 100,
                                    borderRadius: "50%",
                                    top: -55,
                                    right: -45,
                                    background: stat.accent,
                                    opacity: 0.08,
                                    filter: "blur(2px)",
                                }}
                            />

                            <CardContent
                                sx={{
                                    p: { xs: 2, sm: 2.5 },
                                    "&:last-child": {
                                        pb: { xs: 2, sm: 2.5 },
                                    },
                                }}
                            >
                                <Stack
                                    direction="row"
                                    alignItems="flex-start"
                                    justifyContent="space-between"
                                    spacing={2}
                                >
                                    <Box>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: "text.secondary",
                                                fontWeight: 600,
                                                mb: 1,
                                            }}
                                        >
                                            {stat.title}
                                        </Typography>

                                        <Typography
                                            variant="h4"
                                            sx={{
                                                fontWeight: 800,
                                                letterSpacing: "-0.04em",
                                                lineHeight: 1.1,
                                                color: "text.primary",
                                            }}
                                        >
                                            {stat.value}
                                        </Typography>
                                    </Box>

                                    {/* Icon */}

                                    <Box
                                        sx={{
                                            width: 46,
                                            height: 46,
                                            flexShrink: 0,
                                            borderRadius: "14px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: stat.accent,
                                            backgroundColor: `${stat.accent}14`,
                                            border: `1px solid ${stat.accent}20`,
                                        }}
                                    >
                                        <Icon />
                                    </Box>
                                </Stack>

                                <Typography
                                    variant="caption"
                                    sx={{
                                        display: "block",
                                        mt: 1.5,
                                        color: "text.secondary",
                                        fontWeight: 500,
                                    }}
                                >
                                    {stat.subtitle}
                                </Typography>
                            </CardContent>
                        </MotionCard>
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default AnalyticsStats;