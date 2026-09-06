import { PieChartRounded } from "@mui/icons-material";

import {
    Box,
    Card,
    CardContent,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";

import {
    Cell,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

import { motion } from "framer-motion";

import { getAnalyticsData } from "../../data/analyticsData";
import useEmployees from "../../hooks/useEmployees";

const MotionCard = motion(Card);

const departmentColors = {
    Engineering: "#7C5CFC",
    Sales: "#22C55E",
    Marketing: "#06B6D4",
    HR: "#F59E0B",
    Design: "#EC4899",
    Finance: "#8B5CF6",
    Manufacturing: "#F97316",
};

const DepartmentPieChart = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";

    const { employees } = useEmployees();

    const {
        departmentData,
        totalEmployees,
    } = getAnalyticsData(employees);

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
                delay: 0.15,
            }}
            sx={{
                width: "100%",
                minWidth: 0,
                height: "100%",
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
                    direction="row"
                    alignItems="center"
                    spacing={1.5}
                    sx={{ mb: 2 }}
                >
                    <Box
                        sx={{
                            width: 44,
                            height: 44,
                            borderRadius: "14px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#06B6D4",
                            backgroundColor:
                                "rgba(6,182,212,0.10)",
                            border:
                                "1px solid rgba(6,182,212,0.15)",
                        }}
                    >
                        <PieChartRounded />
                    </Box>

                    <Box>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 800,
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Workforce Distribution
                        </Typography>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            Percentage of employees by department
                        </Typography>
                    </Box>
                </Stack>

                {/* Chart */}

                <Box
                    sx={{
                        width: "100%",
                        height: {
                            xs: 230,
                            sm: 250,
                            md: 270,
                        },
                        position: "relative",
                    }}
                >
                    <ResponsiveContainer
                        width="100%"
                        height="100%"
                    >
                        <PieChart>
                            <Pie
                                data={departmentData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                innerRadius="55%"
                                outerRadius="78%"
                                paddingAngle={3}
                                cornerRadius={6}
                                stroke="none"
                                animationBegin={150}
                                animationDuration={1000}
                            >
                                {departmentData.map((item) => (
                                    <Cell
                                        key={item.name}
                                        fill={
                                            departmentColors[item.name] ||
                                            "#7C5CFC"
                                        }
                                    />
                                ))}
                            </Pie>

                            <Tooltip
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
                                formatter={(value, name) => {
                                    const percentage =
                                        totalEmployees > 0
                                            ? (
                                                (value /
                                                    totalEmployees) *
                                                100
                                            ).toFixed(1)
                                            : 0;

                                    return [
                                        `${value} employees (${percentage}%)`,
                                        name,
                                    ];
                                }}
                            />
                        </PieChart>
                    </ResponsiveContainer>

                    {/* Center value */}

                    <Box
                        sx={{
                            position: "absolute",
                            inset: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            pointerEvents: "none",
                        }}
                    >
                        <Box sx={{ textAlign: "center" }}>
                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: "1.7rem",
                                        sm: "2rem",
                                    },
                                    fontWeight: 800,
                                    lineHeight: 1,
                                }}
                            >
                                {totalEmployees}
                            </Typography>

                            <Typography
                                variant="caption"
                                color="text.secondary"
                                sx={{
                                    fontWeight: 600,
                                }}
                            >
                                Employees
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Legend */}

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "repeat(2, 1fr)",
                        },
                        gap: 1,
                        mt: 1,
                        maxHeight: 125,
                        overflowY: "auto",
                        pr: 0.5,

                        "&::-webkit-scrollbar": {
                            width: 4,
                        },

                        "&::-webkit-scrollbar-thumb": {
                            backgroundColor: isDark
                                ? "rgba(255,255,255,0.15)"
                                : "rgba(15,23,42,0.15)",
                            borderRadius: 10,
                        },
                    }}
                >
                    {departmentData.map((item) => {
                        const percentage =
                            totalEmployees > 0
                                ? (
                                    (item.value /
                                        totalEmployees) *
                                    100
                                ).toFixed(1)
                                : 0;

                        return (
                            <Stack
                                key={item.name}
                                direction="row"
                                alignItems="center"
                                justifyContent="space-between"
                                spacing={1}
                                sx={{
                                    px: 1,
                                    py: 0.8,
                                    borderRadius: "9px",
                                    backgroundColor: isDark
                                        ? "rgba(255,255,255,0.025)"
                                        : "rgba(15,23,42,0.025)",
                                    minWidth: 0,
                                }}
                            >
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    spacing={0.8}
                                    sx={{
                                        minWidth: 0,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 8,
                                            height: 8,
                                            flexShrink: 0,
                                            borderRadius: "50%",
                                            backgroundColor:
                                                departmentColors[
                                                item.name
                                                ] || "#7C5CFC",
                                        }}
                                    />

                                    <Typography
                                        variant="caption"
                                        sx={{
                                            fontWeight: 600,
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        {item.name}
                                    </Typography>
                                </Stack>

                                <Typography
                                    variant="caption"
                                    sx={{
                                        flexShrink: 0,
                                        fontWeight: 700,
                                        color: "text.secondary",
                                    }}
                                >
                                    {percentage}%
                                </Typography>
                            </Stack>
                        );
                    })}
                </Box>
            </CardContent>
        </MotionCard>
    );
};

export default DepartmentPieChart;