import { DonutLargeRounded } from "@mui/icons-material";

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

const statusColors = {
    Active: "#22C55E",
    Away: "#F59E0B",
    Inactive: "#EF4444",
};

const EmployeeStatusChart = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";

    const { employees } = useEmployees();

    const {
        statusData,
        totalEmployees,
    } = getAnalyticsData(employees);

    const activeEmployees =
        statusData.find((item) => item.name === "Active")?.value || 0;

    const activePercentage =
        totalEmployees > 0
            ? Math.round((activeEmployees / totalEmployees) * 100)
            : 0;

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
                delay: 0.2,
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
                            color: "#22C55E",
                            backgroundColor:
                                "rgba(34,197,94,0.10)",
                            border:
                                "1px solid rgba(34,197,94,0.15)",
                        }}
                    >
                        <DonutLargeRounded />
                    </Box>

                    <Box>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 800,
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Employee Status
                        </Typography>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            Current workforce availability
                        </Typography>
                    </Box>
                </Stack>

                {/* Chart */}

                <Box
                    sx={{
                        width: "100%",
                        height: {
                            xs: 240,
                            sm: 260,
                            md: 280,
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
                                data={statusData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                innerRadius="58%"
                                outerRadius="78%"
                                paddingAngle={4}
                                cornerRadius={7}
                                stroke="none"
                                animationBegin={200}
                                animationDuration={1000}
                            >
                                {statusData.map((item) => (
                                    <Cell
                                        key={item.name}
                                        fill={
                                            statusColors[item.name] ||
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
                                        `${value} (${percentage}%)`,
                                        name,
                                    ];
                                }}
                            />
                        </PieChart>
                    </ResponsiveContainer>

                    {/* Center percentage */}

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
                                        xs: "1.8rem",
                                        sm: "2rem",
                                    },
                                    fontWeight: 800,
                                    lineHeight: 1,
                                }}
                            >
                                {activePercentage}%
                            </Typography>

                            <Typography
                                variant="caption"
                                color="text.secondary"
                                sx={{
                                    fontWeight: 600,
                                }}
                            >
                                Active
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Status list */}

                <Stack spacing={1}>
                    {statusData.map((item) => {
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
                                sx={{
                                    px: 1.25,
                                    py: 1,
                                    borderRadius: "10px",
                                    backgroundColor: isDark
                                        ? "rgba(255,255,255,0.025)"
                                        : "rgba(15,23,42,0.025)",
                                }}
                            >
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    spacing={1}
                                >
                                    <Box
                                        sx={{
                                            width: 9,
                                            height: 9,
                                            borderRadius: "50%",
                                            backgroundColor:
                                                statusColors[item.name],
                                        }}
                                    />

                                    <Typography
                                        variant="body2"
                                        sx={{
                                            fontWeight: 600,
                                        }}
                                    >
                                        {item.name}
                                    </Typography>
                                </Stack>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontWeight: 700,
                                    }}
                                >
                                    {item.value}

                                    <Typography
                                        component="span"
                                        variant="caption"
                                        color="text.secondary"
                                        sx={{ ml: 0.5 }}
                                    >
                                        ({percentage}%)
                                    </Typography>
                                </Typography>
                            </Stack>
                        );
                    })}
                </Stack>
            </CardContent>
        </MotionCard>
    );
};

export default EmployeeStatusChart;