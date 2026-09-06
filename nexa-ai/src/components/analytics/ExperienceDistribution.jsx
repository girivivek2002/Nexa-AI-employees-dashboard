import { WorkspacePremiumRounded } from "@mui/icons-material";

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

import useEmployees from "../../hooks/useEmployees";

const MotionCard = motion(Card);

const experienceColors = [
    "#06B6D4",
    "#7C5CFC",
    "#F59E0B",
    "#EC4899",
];

const ExperienceDistribution = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";

    const { employees } = useEmployees();

    // Create experience groups from actual employee data
    const experienceGroups = [
        {
            name: "0–2 years",
            min: 0,
            max: 2,
            value: 0,
        },
        {
            name: "3–5 years",
            min: 3,
            max: 5,
            value: 0,
        },
        {
            name: "6–8 years",
            min: 6,
            max: 8,
            value: 0,
        },
        {
            name: "9+ years",
            min: 9,
            max: Infinity,
            value: 0,
        },
    ];

    employees.forEach((employee) => {
        const years = parseFloat(employee.experience) || 0;

        const group = experienceGroups.find(
            (item) =>
                years >= item.min &&
                years <= item.max
        );

        if (group) {
            group.value += 1;
        }
    });

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
                delay: 0.25,
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
                            color: "#F59E0B",
                            backgroundColor:
                                "rgba(245,158,11,0.10)",
                            border:
                                "1px solid rgba(245,158,11,0.15)",
                        }}
                    >
                        <WorkspacePremiumRounded />
                    </Box>

                    <Box>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 800,
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Experience Distribution
                        </Typography>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            Workforce experience levels
                        </Typography>
                    </Box>
                </Stack>

                {/* Chart */}

                <Box
                    sx={{
                        width: "100%",
                        height: {
                            xs: 280,
                            sm: 310,
                            md: 330,
                        },
                    }}
                >
                    <ResponsiveContainer
                        width="100%"
                        height="100%"
                    >
                        <BarChart
                            data={experienceGroups}
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
                                animationBegin={250}
                            >
                                {experienceGroups.map(
                                    (item, index) => (
                                        <Cell
                                            key={item.name}
                                            fill={
                                                experienceColors[
                                                index
                                                ]
                                            }
                                        />
                                    )
                                )}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </Box>

                {/* Summary */}

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
                            ? "rgba(245,158,11,0.06)"
                            : "rgba(245,158,11,0.05)",
                    }}
                >
                    <Box
                        sx={{
                            width: 7,
                            height: 7,
                            flexShrink: 0,
                            borderRadius: "50%",
                            backgroundColor: "#F59E0B",
                        }}
                    />

                    <Typography
                        variant="caption"
                        color="text.secondary"
                    >
                        Most of your workforce falls within the{" "}
                        <strong>3–5 year</strong> experience range.
                    </Typography>
                </Stack>
            </CardContent>
        </MotionCard>
    );
};

export default ExperienceDistribution;