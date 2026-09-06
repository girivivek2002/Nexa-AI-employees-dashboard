import { GroupsRounded } from "@mui/icons-material";

import {
    Box,
    Card,
    CardContent,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";

import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
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

const DepartmentBarChart = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";

    const { employees } = useEmployees();

    const { departmentData } =
        getAnalyticsData(employees);

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
                delay: 0.1,
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
                    sx={{ mb: 3 }}
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
                        <GroupsRounded />
                    </Box>

                    <Box>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 800,
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Employees by Department
                        </Typography>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            Workforce distribution across teams
                        </Typography>
                    </Box>
                </Stack>

                {/* Chart */}

                <Box
                    sx={{
                        width: "100%",
                        height: {
                            xs: 300,
                            sm: 330,
                            md: 360,
                        },
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
                                right: 10,
                                left: -20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid
                                stroke={
                                    isDark
                                        ? "rgba(255,255,255,0.07)"
                                        : "rgba(15,23,42,0.07)"
                                }
                                vertical={false}
                            />

                            <XAxis
                                dataKey="name"
                                tick={{
                                    fill: theme.palette.text.secondary,
                                    fontSize: 11,
                                }}
                                axisLine={false}
                                tickLine={false}
                                interval={0}
                                angle={-25}
                                textAnchor="end"
                                height={55}
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
                                    fill: isDark
                                        ? "rgba(255,255,255,0.04)"
                                        : "rgba(15,23,42,0.04)",
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
                                    marginBottom: 4,
                                }}
                                itemStyle={{
                                    color: theme.palette.text.secondary,
                                }}
                                formatter={(value) => [
                                    `${value} employees`,
                                    "Workforce",
                                ]}
                            />

                            <Bar
                                dataKey="value"
                                name="Employees"
                                radius={[8, 8, 0, 0]}
                                animationDuration={1000}
                                animationBegin={150}
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
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </Box>

                {/* Bottom insight */}

                {departmentData.length > 0 && (
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1}
                        sx={{
                            mt: 1,
                            px: 1.5,
                            py: 1,
                            borderRadius: "10px",
                            backgroundColor: isDark
                                ? "rgba(124,92,252,0.06)"
                                : "rgba(124,92,252,0.04)",
                        }}
                    >
                        <Box
                            sx={{
                                width: 7,
                                height: 7,
                                flexShrink: 0,
                                borderRadius: "50%",
                                backgroundColor: "#7C5CFC",
                            }}
                        />

                        <Typography
                            variant="caption"
                            color="text.secondary"
                        >
                            {departmentData[0].name} is currently the
                            largest department with{" "}
                            <strong>
                                {departmentData[0].value}
                            </strong>{" "}
                            employees.
                        </Typography>
                    </Stack>
                )}
            </CardContent>
        </MotionCard>
    );
};

export default DepartmentBarChart;