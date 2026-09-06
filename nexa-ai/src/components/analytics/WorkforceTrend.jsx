import {
    CalendarMonthRounded,
    TrendingUpRounded,
} from "@mui/icons-material";

import {
    Box,
    Card,
    CardContent,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";

import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

import { motion } from "framer-motion";

import useEmployees from "../../hooks/useEmployees";

const MotionCard = motion(Card);

const WorkforceTrend = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";

    const { employees } = useEmployees();

    /*
     * Convert joined values such as:
     * "Jan 2022"
     * "Jun 2023"
     * "Apr 2024"
     *
     * into yearly employee counts.
     */

    const yearlyJoins = employees.reduce((acc, employee) => {
        const date = new Date(employee.joined);

        if (Number.isNaN(date.getTime())) {
            return acc;
        }

        const year = date.getFullYear();

        if (!acc[year]) {
            acc[year] = 0;
        }

        acc[year] += 1;

        return acc;
    }, {});

    const trendData = Object.entries(yearlyJoins)
        .sort(([yearA], [yearB]) => Number(yearA) - Number(yearB))
        .map(([year, employeesJoined]) => ({
            year,
            employees: employeesJoined,
        }));

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
            }}
            sx={{
                width: "100%",
                minWidth: 0,
                borderRadius: "22px",
                border: "1px solid",
                borderColor: isDark
                    ? "rgba(255,255,255,0.08)"
                    : "rgba(15,23,42,0.08)",
                background: isDark
                    ? "rgba(255,255,255,0.025)"
                    : "#ffffff",
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

                <Stack
                    direction={{
                        xs: "column",
                        sm: "row",
                    }}
                    alignItems={{
                        xs: "flex-start",
                        sm: "center",
                    }}
                    justifyContent="space-between"
                    spacing={2}
                    sx={{ mb: 3 }}
                >
                    <Stack
                        direction="row"
                        spacing={1.5}
                        alignItems="center"
                    >
                        <Box
                            sx={{
                                width: 44,
                                height: 44,
                                borderRadius: "14px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#7C5CFC",
                                backgroundColor:
                                    "rgba(124,92,252,0.10)",
                                border:
                                    "1px solid rgba(124,92,252,0.15)",
                            }}
                        >
                            <TrendingUpRounded />
                        </Box>

                        <Box>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 800,
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                Workforce Trend
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Employee joining activity by year
                            </Typography>
                        </Box>
                    </Stack>

                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1}
                        sx={{
                            px: 1.5,
                            py: 0.8,
                            borderRadius: "10px",
                            backgroundColor: isDark
                                ? "rgba(255,255,255,0.04)"
                                : "rgba(15,23,42,0.04)",
                        }}
                    >
                        <CalendarMonthRounded
                            sx={{
                                fontSize: 18,
                                color: "#06B6D4",
                            }}
                        />

                        <Typography
                            variant="caption"
                            sx={{
                                fontWeight: 700,
                                color: "text.secondary",
                            }}
                        >
                            Joining history
                        </Typography>
                    </Stack>
                </Stack>

                {/* Chart */}

                <Box
                    sx={{
                        width: "100%",
                        height: {
                            xs: 280,
                            sm: 320,
                            md: 360,
                        },
                    }}
                >
                    <ResponsiveContainer
                        width="100%"
                        height="100%"
                    >
                        <AreaChart
                            data={trendData}
                            margin={{
                                top: 10,
                                right: 10,
                                left: -20,
                                bottom: 0,
                            }}
                        >
                            <defs>
                                <linearGradient
                                    id="workforceGradient"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor="#7C5CFC"
                                        stopOpacity={0.35}
                                    />

                                    <stop
                                        offset="100%"
                                        stopColor="#7C5CFC"
                                        stopOpacity={0.02}
                                    />
                                </linearGradient>
                            </defs>

                            <CartesianGrid
                                stroke={
                                    isDark
                                        ? "rgba(255,255,255,0.07)"
                                        : "rgba(15,23,42,0.07)"
                                }
                                vertical={false}
                            />

                            <XAxis
                                dataKey="year"
                                tick={{
                                    fill: theme.palette.text.secondary,
                                    fontSize: 12,
                                }}
                                axisLine={false}
                                tickLine={false}
                            />

                            <YAxis
                                allowDecimals={false}
                                tick={{
                                    fill: theme.palette.text.secondary,
                                    fontSize: 12,
                                }}
                                axisLine={false}
                                tickLine={false}
                            />

                            <Tooltip
                                cursor={{
                                    stroke: "#7C5CFC",
                                    strokeWidth: 1,
                                    strokeDasharray: "4 4",
                                }}
                                contentStyle={{
                                    backgroundColor:
                                        theme.palette.background.paper,
                                    border: `1px solid ${isDark
                                        ? "rgba(255,255,255,0.10)"
                                        : "rgba(15,23,42,0.10)"
                                        }`,
                                    borderRadius: 12,
                                    boxShadow: isDark
                                        ? "0 10px 30px rgba(0,0,0,0.30)"
                                        : "0 10px 30px rgba(15,23,42,0.10)",
                                }}
                                labelStyle={{
                                    color: theme.palette.text.primary,
                                    fontWeight: 700,
                                }}
                            />

                            <Area
                                type="monotone"
                                dataKey="employees"
                                name="Employees Joined"
                                stroke="#7C5CFC"
                                strokeWidth={3}
                                fill="url(#workforceGradient)"
                                dot={{
                                    r: 4,
                                    fill: "#7C5CFC",
                                    strokeWidth: 2,
                                    stroke: theme.palette.background.paper,
                                }}
                                activeDot={{
                                    r: 6,
                                }}
                                animationDuration={1200}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </Box>

                {/* Footer */}

                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{ mt: 1 }}
                >
                    <Box
                        sx={{
                            width: 7,
                            height: 7,
                            borderRadius: "50%",
                            backgroundColor: "#7C5CFC",
                        }}
                    />

                    <Typography
                        variant="caption"
                        color="text.secondary"
                    >
                        Based on employee joining records
                    </Typography>
                </Stack>
            </CardContent>
        </MotionCard>
    );
};

export default WorkforceTrend;