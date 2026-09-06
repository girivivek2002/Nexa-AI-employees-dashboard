import { LocationOnRounded, GroupsRounded } from "@mui/icons-material";

import {
    Box,
    Card,
    CardContent,
    Divider,
    LinearProgress,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";

import { motion } from "framer-motion";

import { getAnalyticsData } from "../../data/analyticsData";
import useEmployees from "../../hooks/useEmployees";

const MotionCard = motion(Card);

const locationColors = [
    "#7C5CFC",
    "#06B6D4",
    "#22C55E",
    "#F59E0B",
    "#EC4899",
    "#8B5CF6",
    "#14B8A6",
    "#F97316",
];

const LocationAnalytics = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";

    const { employees } = useEmployees();

    const {
        locationData,
        totalEmployees,
    } = getAnalyticsData(employees);

    const sortedLocations = [...locationData].sort(
        (a, b) => b.value - a.value
    );

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
                delay: 0.3,
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
                    sx={{ mb: 2.5 }}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1.5}
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
                            <LocationOnRounded />
                        </Box>

                        <Box>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 800,
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                Workforce by Location
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Geographic distribution of your workforce
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
                        <GroupsRounded
                            sx={{
                                fontSize: 18,
                                color: "#7C5CFC",
                            }}
                        />

                        <Typography
                            variant="caption"
                            sx={{
                                fontWeight: 700,
                                color: "text.secondary",
                            }}
                        >
                            {totalEmployees} employees
                        </Typography>
                    </Stack>
                </Stack>

                <Divider
                    sx={{
                        mb: 2,
                        borderColor: isDark
                            ? "rgba(255,255,255,0.07)"
                            : "rgba(15,23,42,0.07)",
                    }}
                />

                {/* Location rows */}

                <Stack spacing={1.5}>
                    {sortedLocations.map((location, index) => {
                        const percentage =
                            totalEmployees > 0
                                ? (
                                    (location.value /
                                        totalEmployees) *
                                    100
                                ).toFixed(1)
                                : 0;

                        const locationColor =
                            locationColors[
                            index % locationColors.length
                            ];

                        return (
                            <MotionCard
                                key={location.name}
                                initial={{
                                    opacity: 0,
                                    x: -15,
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                transition={{
                                    duration: 0.35,
                                    delay: 0.35 + index * 0.06,
                                }}
                                elevation={0}
                                sx={{
                                    borderRadius: "14px",
                                    backgroundColor: isDark
                                        ? "rgba(255,255,255,0.025)"
                                        : "rgba(15,23,42,0.025)",
                                    border: "1px solid",
                                    borderColor: isDark
                                        ? "rgba(255,255,255,0.05)"
                                        : "rgba(15,23,42,0.05)",
                                }}
                            >
                                <Box
                                    sx={{
                                        px: {
                                            xs: 1.5,
                                            sm: 2,
                                        },
                                        py: 1.5,
                                    }}
                                >
                                    {/* Top row */}

                                    <Stack
                                        direction="row"
                                        alignItems="center"
                                        justifyContent="space-between"
                                        spacing={2}
                                        sx={{ mb: 1 }}
                                    >
                                        <Stack
                                            direction="row"
                                            alignItems="center"
                                            spacing={1.2}
                                            sx={{
                                                minWidth: 0,
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: 32,
                                                    height: 32,
                                                    flexShrink: 0,
                                                    borderRadius:
                                                        "10px",
                                                    display: "flex",
                                                    alignItems:
                                                        "center",
                                                    justifyContent:
                                                        "center",
                                                    color: locationColor,
                                                    backgroundColor: `${locationColor}14`,
                                                }}
                                            >
                                                <LocationOnRounded
                                                    sx={{
                                                        fontSize: 18,
                                                    }}
                                                />
                                            </Box>

                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    fontWeight: 700,
                                                    overflow:
                                                        "hidden",
                                                    textOverflow:
                                                        "ellipsis",
                                                    whiteSpace:
                                                        "nowrap",
                                                }}
                                            >
                                                {location.name}
                                            </Typography>
                                        </Stack>

                                        <Stack
                                            direction="row"
                                            alignItems="center"
                                            spacing={1}
                                            sx={{
                                                flexShrink: 0,
                                            }}
                                        >
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    fontWeight: 800,
                                                }}
                                            >
                                                {location.value}
                                            </Typography>

                                            <Typography
                                                variant="caption"
                                                color="text.secondary"
                                            >
                                                ({percentage}%)
                                            </Typography>
                                        </Stack>
                                    </Stack>

                                    {/* Progress */}

                                    <LinearProgress
                                        variant="determinate"
                                        value={Number(percentage)}
                                        sx={{
                                            height: 6,
                                            borderRadius: 10,
                                            backgroundColor:
                                                isDark
                                                    ? "rgba(255,255,255,0.07)"
                                                    : "rgba(15,23,42,0.07)",

                                            "& .MuiLinearProgress-bar":
                                            {
                                                borderRadius: 10,
                                                backgroundColor:
                                                    locationColor,
                                            },
                                        }}
                                    />
                                </Box>
                            </MotionCard>
                        );
                    })}
                </Stack>

                {/* Empty state */}

                {sortedLocations.length === 0 && (
                    <Box
                        sx={{
                            py: 6,
                            textAlign: "center",
                        }}
                    >
                        <LocationOnRounded
                            sx={{
                                fontSize: 40,
                                color: "text.disabled",
                                mb: 1,
                            }}
                        />

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            No location data available.
                        </Typography>
                    </Box>
                )}
            </CardContent>
        </MotionCard>
    );
};

export default LocationAnalytics;