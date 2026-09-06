import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

import {
    Box,
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
    if (!active || !payload || !payload.length) {
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
                    fontSize: "0.78rem",
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

const WorkforceDistribution = () => {
    const theme = useTheme();

    const isDark =
        theme.palette.mode === "dark";

    const {
        employees,
        loading,
    } = useEmployees();

    const {
        departmentData,
        totalEmployees,
    } = getDashboardData(employees);

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
                delay: 0.1,
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

                transition: "all 0.3s ease",

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
                sx={{
                    mb: 1,
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
                        Workforce Distribution
                    </Typography>

                    <Typography
                        sx={{
                            mt: 0.4,
                            fontSize: "0.78rem",
                            color:
                                "text.secondary",
                        }}
                    >
                        Employees by department
                    </Typography>
                </Box>
            </Stack>

            {/* Donut Chart */}

            <Box
                sx={{
                    position: "relative",
                    width: "100%",

                    height: {
                        xs: 240,
                        sm: 270,
                        md: 280,
                    },
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
                            innerRadius="58%"
                            outerRadius="78%"
                            paddingAngle={3}
                            startAngle={90}
                            endAngle={-270}
                            stroke="none"
                            isAnimationActive
                            animationBegin={100}
                            animationDuration={900}
                            animationEasing="ease-out"
                        >
                            {departmentData.map(
                                (item) => (
                                    <Cell
                                        key={item.name}
                                        fill={item.color}
                                        stroke={
                                            item.color
                                        }
                                    />
                                )
                            )}
                        </Pie>

                        <Tooltip
                            content={
                                <CustomTooltip />
                            }
                        />
                    </PieChart>
                </ResponsiveContainer>

                {/* Center */}

                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform:
                            "translate(-50%, -50%)",
                        textAlign: "center",
                        pointerEvents: "none",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: {
                                xs: "1.7rem",
                                sm: "2rem",
                            },

                            lineHeight: 1,
                            fontWeight: 900,
                            letterSpacing:
                                "-0.04em",
                            color:
                                "text.primary",
                        }}
                    >
                        {loading
                            ? "..."
                            : totalEmployees}
                    </Typography>

                    <Typography
                        sx={{
                            mt: 0.5,
                            fontSize: "0.7rem",
                            color:
                                "text.secondary",
                            fontWeight: 600,
                        }}
                    >
                        Employees
                    </Typography>
                </Box>
            </Box>

            {/* Department Legend */}

            <Box
                sx={{
                    mt: 1,

                    display: "grid",

                    gridTemplateColumns: {
                        xs: "repeat(2, minmax(0, 1fr))",
                        sm: "repeat(2, minmax(0, 1fr))",
                    },

                    gap: 1,

                    maxHeight: {
                        xs: 155,
                        sm: 165,
                        md: 175,
                    },

                    overflowY: "auto",
                    overflowX: "hidden",

                    pr: 0.5,

                    /* Custom scrollbar */

                    "&::-webkit-scrollbar": {
                        width: 4,
                    },

                    "&::-webkit-scrollbar-track": {
                        background:
                            "transparent",
                    },

                    "&::-webkit-scrollbar-thumb":
                    {
                        backgroundColor:
                            isDark
                                ? "rgba(255,255,255,0.15)"
                                : "rgba(0,0,0,0.12)",
                        borderRadius: 10,
                    },

                    scrollbarWidth: "thin",
                }}
            >
                {departmentData.map(
                    (item) => {
                        const percentage =
                            totalEmployees > 0
                                ? (
                                    (item.value /
                                        totalEmployees) *
                                    100
                                ).toFixed(1)
                                : "0.0";

                        return (
                            <Box
                                key={item.name}
                                sx={{
                                    minWidth: 0,
                                    px: 1,
                                    py: 0.8,
                                    borderRadius: 2,

                                    transition:
                                        "background-color 0.2s ease",

                                    "&:hover": {
                                        backgroundColor:
                                            isDark
                                                ? "rgba(255,255,255,0.035)"
                                                : "rgba(124,92,252,0.035)",
                                    },
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
                                    {/* Color dot */}

                                    <Box
                                        sx={{
                                            width: 8,
                                            height: 8,
                                            minWidth: 8,
                                            borderRadius:
                                                "50%",

                                            backgroundColor:
                                                item.color,

                                            boxShadow: `0 0 7px ${item.color}66`,
                                        }}
                                    />

                                    {/* Department name */}

                                    <Typography
                                        sx={{
                                            minWidth: 0,
                                            flex: 1,

                                            fontSize: {
                                                xs: "0.68rem",
                                                sm: "0.72rem",
                                            },

                                            fontWeight: 600,
                                            color:
                                                "text.primary",

                                            overflow:
                                                "hidden",
                                            textOverflow:
                                                "ellipsis",
                                            whiteSpace:
                                                "nowrap",
                                        }}
                                    >
                                        <Typography
                                            component="span"
                                            sx={{
                                                fontSize:
                                                    "0.8rem",
                                                fontWeight: 800,
                                                color:
                                                    "text.primary",
                                            }}
                                        >
                                            {item.name} :{" "}
                                            {item.value}
                                        </Typography>
                                    </Typography>
                                </Stack>

                                {/* Value */}

                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    sx={{
                                        mt: 0.35,
                                        pl: 1.8,
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize:
                                                "0.8rem",
                                            color:
                                                "text.secondary",
                                        }}
                                    >
                                        {percentage}%
                                    </Typography>
                                </Stack>
                            </Box>
                        );
                    }
                )}
            </Box>
        </MotionPaper>
    );
};

export default WorkforceDistribution;