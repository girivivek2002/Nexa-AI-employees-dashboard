import {
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

import {
    Box,
    Chip,
    Paper,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";

import { motion } from "framer-motion";

import { getDashboardData } from "../../data/dashboardData";
import useEmployees from "../../hooks/useEmployees";

const MotionPaper = motion(Paper);

const CustomTooltip = ({ active, payload }) => {
    if (!active || !payload || payload.length === 0) {
        return null;
    }

    const item = payload[0].payload;

    return (
        <Paper
            elevation={0}
            sx={{
                px: 1.5,
                py: 1,
                borderRadius: 2,
                border: "1px solid",
                borderColor: "divider",
                backgroundColor: "background.paper",
                boxShadow:
                    "0 8px 25px rgba(0,0,0,0.12)",
            }}
        >
            <Typography
                sx={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "text.primary",
                }}
            >
                {item.name}
            </Typography>

            <Typography
                sx={{
                    mt: 0.3,
                    fontSize: "0.72rem",
                    color: "text.secondary",
                }}
            >
                {item.value} employees
            </Typography>
        </Paper>
    );
};

const WorkforceChart = () => {
    const theme = useTheme();

    const isDark =
        theme.palette.mode === "dark";

    const {
        employees,
        loading,
    } = useEmployees();

    const {
        departmentData,
    } = getDashboardData(employees);

    const totalEmployees =
        departmentData.reduce(
            (total, item) =>
                total + item.value,
            0
        );

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
            }}
            elevation={0}
            sx={{
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
                    ? "linear-gradient(145deg, rgba(255,255,255,0.02), rgba(124,92,252,0.05))"
                    : "linear-gradient(145deg, #ffffff, rgba(124,92,252,0.025))",

                transition:
                    "all 0.3s ease",

                "&:hover": {
                    borderColor:
                        "rgba(124,92,252,0.35)",

                    boxShadow: isDark
                        ? "0 18px 45px rgba(0,0,0,0.25)"
                        : "0 18px 45px rgba(30,25,80,0.08)",
                },
            }}
        >
            {/* Header */}

            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                spacing={2}
                sx={{
                    mb: 2,
                }}
            >
                <Box
                    sx={{
                        minWidth: 0,
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: {
                                xs: "1rem",
                                sm: "1.1rem",
                            },

                            fontWeight: 800,

                            color:
                                "text.primary",
                        }}
                    >
                        Employees by Department
                    </Typography>

                    <Typography
                        sx={{
                            mt: 0.4,
                            fontSize: "0.78rem",
                            color:
                                "text.secondary",
                        }}
                    >
                        Workforce distribution
                        across teams
                    </Typography>
                </Box>

                <Chip
                    label="This year"
                    size="small"
                    sx={{
                        flexShrink: 0,
                        height: 28,

                        fontSize: "0.68rem",
                        fontWeight: 700,

                        color: "#7C5CFC",

                        backgroundColor:
                            isDark
                                ? "rgba(124,92,252,0.12)"
                                : "rgba(124,92,252,0.08)",

                        border: "1px solid",

                        borderColor:
                            isDark
                                ? "rgba(124,92,252,0.2)"
                                : "rgba(124,92,252,0.12)",
                    }}
                />
            </Stack>

            {/* Chart */}

            <Box
                sx={{
                    width: "100%",

                    height: {
                        xs: 270,
                        sm: 310,
                        md: 330,
                    },

                    minWidth: 0,
                }}
            >
                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >
                    <BarChart
                        data={departmentData}
                        margin={{
                            top: 10,
                            right: 5,
                            left: 0,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid
                            strokeDasharray="3 3"
                            vertical={false}
                            stroke={
                                isDark
                                    ? "rgba(255,255,255,0.08)"
                                    : "rgba(0,0,0,0.08)"
                            }
                        />

                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{
                                fill:
                                    theme.palette
                                        .text
                                        .secondary,
                                fontSize: 11,
                            }}
                            interval={0}
                            angle={-35}
                            textAnchor="end"
                            height={65}
                        />

                        <YAxis
                            dataKey="value"
                            axisLine={false}
                            tickLine={false}
                            allowDecimals={false}
                            tick={{
                                fill:
                                    theme.palette
                                        .text
                                        .secondary,
                                fontSize: 11,
                            }}
                        />

                        <Tooltip
                            content={
                                <CustomTooltip />
                            }
                            cursor={{
                                fill: isDark
                                    ? "rgba(255,255,255,0.04)"
                                    : "rgba(124,92,252,0.04)",
                            }}
                        />

                        <Bar
                            dataKey="value"
                            fill="#7C5CFC"
                            radius={[
                                8,
                                8,
                                2,
                                2,
                            ]}
                            maxBarSize={48}
                            isAnimationActive
                            animationBegin={100}
                            animationDuration={900}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </Box>

            {/* Footer */}

            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                    mt: 1,
                    pt: 2,
                    borderTop: "1px solid",
                    borderColor:
                        "divider",
                }}
            >
                <Typography
                    sx={{
                        fontSize: "0.82rem",
                        color:
                            "text.secondary",
                        marginRight: 2,
                    }}
                >
                    Total workforce
                </Typography>

                <Typography
                    sx={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        color:
                            "text.primary",
                    }}
                >
                    {loading
                        ? "Loading..."
                        : `${totalEmployees} employees`}
                </Typography>
            </Stack>
        </MotionPaper>
    );
};

export default WorkforceChart;